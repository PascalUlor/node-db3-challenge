# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.productname, c.categoryname FROM [Products]
as p
left join categories as c on p.productid = c.categoryid
group by productname
order by productname asc

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderid, s.shippername FROM [Orders] as o
left join shippers as s on o.shipperid = s.shipperid where o.orderdate < date('1997-01-09');

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT o.quantity, p.productname FROM [OrderDetails] as o
join products as p
on o.productid = p.productid
where o.orderid = 10251
order by productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.orderid, c.customername, e.lastname FROM [Orders] o
left join customers c on o.customerid = c.customerid
left join employees e on o.employeeid = e.employeeid

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.categoryname, count(p.productid) as Quantity
FROM [Categories] c
left join products p
on c.categoryid = p.categoryid
group by c.categoryname

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

select o.orderid, count(p.productid) from orderdetails o
left join products p on o.productid = p.productid
group by o.orderid
