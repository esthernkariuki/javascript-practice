//list ingredients we all allow user tochoose
const ingredientsList = [
  "chicken", "beef", "pork", "salmon", "tuna", "egg", "rice", "pasta", "flour", "milk",
  "onion", "garlic", "tomato", "mushroom", "spinach", "butter", "cheese", "olive oil", "lemon", "carrot"
];
//getiing the three select elements
const selects = [document.getElementById("ingredient1"), document.getElementById("ingredient2"), document.getElementById("ingredient3")];
//getiing the three select elements
const searchBtn = document.getElementById("searchBtn");
//to diplay results
const resultsContainer = document.getElementById("results");
const savedList = document.getElementById("savedList");
//empty array to store saved recipes
const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"))||[]

//loop thru acah drop down
selects.forEach(select => {
      //for each ingredient in our list
  ingredientsList.forEach(ingredient => {
     //create a neww option
    const option = document.createElement("option");
    //setting the value to the new option
    option.value = ingredient;
    //stting disply text
    option.textContent = ingredient;
    //adding to the dropdown
    select.appendChild(option);
  });
});
//adding evenlistener to the search btn
searchBtn.addEventListener("click", () => {
    //get the values from the three dropdowns depeding what user selected
 //filter(boolean) remove empty values 
 //join joins the two ingredients selcted into one string
  const ingredients = selects.map(s => s.value).filter(Boolean).join(",");
   //this checkes if the string is empty if not it continue to check
  if (ingredients) {
     //this runs fetchRecipes()  and give it ingredients  which it uses to vcall  from apis 
    fetchRecipes(ingredients);
  } 
    //if the item is not found in the drop down useer is asked to choose again
  else {
    resultsContainer.innerHTML = "<p>Please select at least one ingredient.</p>";
  }
});
//function to take in ingredients inputs
async function fetchRecipes(ingredients) {
    //shows message in the result area to show user something is happening
  resultsContainer.innerHTML = "<p>Searching...</p>";
  //creating api requests url using the ingredients which tells mealDb to find meals that uses the ingredients
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  try {
     //send a request to that url 
        //the awaits waits untill the Api respomds
    const request = await fetch(apiUrl);
    //after geting the response it is changed to json( a js object we ca use)
    const data = await request.json();
    //if th API gives us the resut we call displayRecipes function to dipslay them on the screens
    if (data.meals) {
      displayRecipes(data.meals);
    }
     //if not found display helpful message
     else {
      resultsContainer.innerHTML = "<p>No recipes found. Try fewer or different ingredients.</p>";
    }
  }
    //if an error occureed of either networkwe show this message
   catch (error) {
    resultsContainer.innerHTML = "<p>Error fetching recipes.</p>";
  }
}
function displayRecipes(meals) {
     //clears the what was showingin result box thta is old recipes or searchingto make sure only the neww search displays
  resultsContainer.innerHTML = "";
  //loop that is going thru each meal one by one and do the following
  meals.forEach(meal => {
      //create an empty div for each recipe
    const card = document.createElement("div");
     // fiil the card with Image,name
   //when button clicked view instruction will get intruction() with meals id 
   //when button clicked for save it runss to save recipes with the name
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <button onclick="getInstructions('${meal.idMeal}')">View Instructions</button>
      <button onclick="saveRecipe('${meal.strMeal}')">Save</button>
    `;
       //add the card to the resultbox that is the result
    resultsContainer.appendChild(card);
  });
}
// async it will fech dsata from internaet
async function getInstructions(id) {
    try{
          //look-up to get detailed info about one meal
  const resquest= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await resquest.json();
      //send request and wit for the fill meal details 
  const meal = data.meals[0];
    //to show the cooking steps 
  alert(`Instructions for ${meal.strMeal}:${meal.strInstructions}`);
    }
    catch(error){
            alert("Failed to lead instructions")
    }
}
function saveRecipe(name) {
      //check if the recipe is already in the saved recipes array
  if (!savedRecipes.includes(name)) {
     //pushes the name in the saved array
    savedRecipes.push(name);
      //store it in the local storage to prevent it dissappearing when th epage is refreshed
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
     //create an new li with the recipe name
    // const li = document.createElement("li");
    // li.textContent = name;
     // add the saved list on the page


    //  //create a delete btn
    //  const deletebtn= Document.createElement("button")
    //  deletebtn.textContent="";
    //  deletebtn.style.marginLeft="20px";
    //  deletebtn.addEventListener('click',()=>removeRecipe(name,li))
    //  li.appendChild(deletebtn);
    // savedList.appendChild(li);
    addRecipeToDom(name)

  }
      //if already saved show
   else {
    alert("Recipe already saved!");
  }
}
function addRecipeToDom(name){
    const li=document.createElement("li")
    li.textContent=name;
     const deletebtn=document.createElement("button")
     deletebtn.textContent="";
     deletebtn.addEventListener('click',()=>removeRecipe(name,li))

     li.appendChild(deletebtn);
     savedList.appendChild(li)
}
function removeRecipe(name,liElement){
    //remove from array
    const index=savedRecipes.indexOf(name)
    if (index > -1){
        savedRecipes.splice(index,1)

    }
    //updating the localstorage
    localStorage.setItem("savedRecipes",
    JSON.stringify(savedRecipes) )
    //remove from DOM
    liElement.remove();
}

// //teells the browser that when page hass fully loaded run the function
// window.addEventListener("DOMContentLoaded", () => {
//       //json.parse changes the saved string back to an array
//   //local storage.getitem is used to read the saved recipesfrom the local bworsers storage and the [] is used to  mean if what is got is nullthen it should return empty array [] instead 
//   const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//     //add the  previous saved recipe intothe current working list
//   savedRecipes.push(...saved);
//    //loop 
//   saved.forEach(name => {
//     //create an new li with the recipe name
//     const li = document.createElement("li");
//     li.textContent = name;
//      // add the saved list on the page
    
//      savedList.appendChild(li);
//   });
// });
window.addEventListener("DOMContentLoaded",()=>{
    savedRecipes.forEach(name=>{
        addRecipeToDom(name);
    })
})