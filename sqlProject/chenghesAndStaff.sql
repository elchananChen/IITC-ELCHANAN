-insert into Invoices
--VALUES('vip' , 0.30)
  
--select * from discounts



--insert into Invoices
--VALUES(10, null , null , 7 ,9850 ,'2424-08-29' )

--select * 
--from Invoices


--לשינוי dataType
--ALTER TABLE
--  exOrders
--ALTER COLUMN
--  status
--   varchar(30)   ;

----,להפוך לfk, בעמודה קיימת

--   ALTER TABLE receipt
--ADD CONSTRAINT fk_r
--FOREIGN KEY (invoiceID) REFERENCES invoices(invoiceID)

---- i join OrdersDetails d
--on i.itemID = d.itemID
--join stockOrders s
--on s.stockOrdersID = d.stockOrdersID

-- שינוי ערך 

--update items 
--set available = 450
--where itemID = 1

-- הוספת עמודה

-- ALTER TABLE items
--ADD available varchar(255);

--alter table stockOrders 
--add stockOrderPrice   money 


--update exOrders
--set orderprice =7500
--where exOrderID =6

--select * from exOrders

--עדכון משבצות 

--   update  OrdersDetails
--   set stockOrdersID = null
--   where exOrderID =4 
  

--  insert into OrdersDetails 
--  values (null,null , 6, 3,3 )

--select * from OrdersDetails
--  --insert into discounts
----VALUES('vip' , 0.30)

select * from exOrders



  update exOrders
set orderDate  ='2424-09-29'
where exOrderID =5

--ALTER TABLE
--OrdersDetails
--ALTER COLUMN
--exOrderID
--   int   NULL;


--  update OrdersDetails
--set Quantity =45
--where ItemID = 1

--update customers
--set identityNum = 993654333
--where customerID = 2

--SELECT * FROM custome

-- אילוץ 9 ספרות ורק ספרות אבל אי אפשר אפסים מובילים

--ALTER TABLE customers
--ADD CONSTRAINT chk_identityNum
--CHECK (LEN(identityNum) = 9 AND identityNum LIKE '[0-9]%');

--select * from customers

--update customers
--set identityNum = 69365333
--where customerID = 2


--  ALTER TABLE receipt
--ADD CONSTRAINT fk_stock
--FOREIGN KEY (stockOrdersID) REFERENCES stockOrders(stockOrdersID)

--select * 
--from Invoices

--select * 
--from SubscriptionOrders


-- ALTER TABLE receipt
--ADD stockOrdersID int ;



--select *

--from customers
--select *
--from SubscriptionOrders
--select *
--from OrdersDetails