const ingredientsList = [
  "chicken", "beef", "pork", "salmon", "tuna", "egg", "rice", "pasta", "flour", "milk",
  "onion", "garlic", "tomato", "mushroom", "spinach", "butter", "cheese", "olive oil", "lemon", "carrot"
];
const selects = [
  document.getElementById("ingredient1"),
  document.getElementById("ingredient2"),
  document.getElementById("ingredient3")
];
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");
const savedList = document.getElementById("savedList");
const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
selects.forEach(select => {
  ingredientsList.forEach(ingredient => {
    const option = document.createElement("option");
    option.value = ingredient;
    option.textContent = ingredient;
    select.appendChild(option);
  });
});
searchBtn.addEventListener("click", () => {
  const ingredients = selects.map(s => s.value).filter(Boolean).join(",");
  if (ingredients) {
    fetchRecipes(ingredients);
  } else {
    resultsContainer.innerHTML = "<p>Please select at least one ingredient.</p>";
  }
});
async function fetchRecipes(ingredients) {
  resultsContainer.innerHTML = "<p>Searching...</p>";
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data.meals) {
      displayRecipes(data.meals);
    } else {
      resultsContainer.innerHTML = "<p>No recipes found. Try fewer or different ingredients.</p>";
    }
  } catch (error) {
    resultsContainer.innerHTML = "<p>Error fetching recipes.</p>";
  }
}
function displayRecipes(meals) {
  resultsContainer.innerHTML = "";
  meals.forEach(meal => {
    const card = document.createElement("div");
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <button onclick="getInstructions('${meal.idMeal}')">View Instructions</button>
      <button onclick="saveRecipe('${meal.strMeal}')">Save</button>
    `;
    resultsContainer.appendChild(card);
  });
}
async function getInstructions(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  const meal = data.meals[0];
  alert(`Instructions for ${meal.strMeal}:\n\n${meal.strInstructions}`);
}
function saveRecipe(name) {
  if (!savedRecipes.includes(name)) {
    savedRecipes.push(name);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    addRecipeToDOM(name);
  } else {
    alert("Recipe already saved!");
  }
}
function addRecipeToDOM(name) {
  const li = document.createElement("li");
  li.textContent = name;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", () => {
    removeRecipe(name, li);
  });
  li.appendChild(deleteBtn);
  savedList.appendChild(li);
}
function removeRecipe(name, liElement) {
  const index = savedRecipes.indexOf(name);
  if (index > -1) {
    savedRecipes.splice(index, 1);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    liElement.remove();
  }
}
window.addEventListener("DOMContentLoaded", () => {
  savedRecipes.forEach(name => {
    addRecipeToDOM(name);
  });
});






