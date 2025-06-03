create schema trashion

create table driver_details(
drivers_id VARCHAR primary KEY,
name VARCHAR not null,
dob INTEGER not null,
vehicle_reg_no VARCHAR not null,
driving_lisence VARCHAR not null
);

drop table trashion.driver_details;

insert into trashion.driver_details(drivers_id,name,dob,vehicle_reg_no,driving_lisence)
values
('D011','Seline mwai',2025-15-11,'KCU 345T','256597t'),
('D02','Seli',2025-15-03,'KCU 348T','256597u'),
('D03','marget',2025-15-04,'KCU 349T','256597t'),
('D04','magree',2025-15-05,'KCU 344T','256567t'),
('D05','maryann',2025-15-08,'KCU 342T','256547t'),
('D06','jane',2025-15-1,'KCU 341T','256527t')

select * from trashion.driver_details;

create table clothes_details(
clothes_id VARCHAR primary key,
types_of_clothes VARCHAR not null,
quality_clothes VARCHAR not null,
quantity_of_clothes VARCHAR not null,
date_of_delivery INTEGER not null,
drivers_id VARCHAR not NULL,
FOREIGN KEY(drivers_id) REFERENCES trashion.driver_details(drivers_id) 
);

drop table trashion.clothes_details;

insert into trashion.clothes_details(clothes_id,types_of_clothes,quality_clothes,quantity_of_clothes,date_of_delivery)
values
('T099','Jackets','high','50kg',2024-4-3),
('T090','Tops','medium','40kg', 2024-4-6),
('T093','Dresses','low','10kg', 2024-4-9)

select * from trashion.clothes_details;





