------------------- query 1 -----------------------------

--alter PROCEDURE itemsDetailsByID   @byItemIDButt int =0
--AS
--begin
--SELECT * FROM items
--WHERE @byItemIDButt = itemID or @byItemIDButt = 0
--end
--go
--exec itemsDetailsByID 


------------------- query 2 ------------------------------

--ALTER procedure orderDetailsByStatDatefieldAndID
-- @status as varchar(30) = null,
-- @startDate as datetime = null,
--@endDate as datetime= null,
--@orderid as int = null
--as
--begin
--select status,
--       E.exOrderID,
--       itemid ,
--	   Quantity,
--	   orderprice,  
--	   SupplyDate
--from  exOrders e join OrdersDetails d
--on e.exOrderID = d.exOrderID
--where 
--status = @status
--or SupplyDate between @startDate and @endDate 
--or E.exOrderID = @orderid
--end;
--go

--exec orderDetailsByStatDatefieldAndID --  @startDate = '2424-01-01',
----@endDate = '2424-12-25'
---- @status = notdelivered,
---- @orderid =4

--select * from exOrders


------------------------- query 3 ------------------------------

---- ALTER TABLE customers
----ADD identityNum  int,
----CONSTRAINT chk_my_column 
----CHECK (identityNum >= 100000000 AND identityNum <= 999999999);


--create procedure customerAndOrderDetailsByIdentityNum
--@identityNum  int
--as
--begin
--select identitynum,
--        customerName,
--		customerStatus,
--		o.subsOrdersID ordernumber,
--		status orderStatus,
--		frequncy ordrFrequncy,
--		ItemID,
--		Quantity,
--		o.customerID

--from customers c join SubscriptionOrders o
--on c.customerID = o.customerID
--join OrdersDetails d
--on o.subsOrdersID = d.subsOrdersID
--where @identitynum = identitynum
--end;
--go

--exec customerAndOrderDetailsByIdentityNum  @identitynum = 993333333



---------------------   query 4  -----------------------------------------------------

--CREATE PROCEDURE acountDebitCreditProfit
--as
--	SELECT
--    r.receiptID,
--    e.exOrderID,
--    s.subsOrdersID,
--    st.stockOrdersID,
--	paidDate,
--    SUM(CASE 
--        WHEN r.exOrderID IS NOT NULL OR r.subsOrdersID IS NOT NULL THEN r.paidAmount 
--        ELSE 0 
--    END) AS credit_amount,
--    SUM(CASE 
--        WHEN r.stockOrdersID IS NOT NULL THEN r.paidAmount 
--        ELSE 0 
--    END) AS debit_amount,
--    NULL AS Profit_amount 
--FROM
--    receipt r
--    LEFT JOIN exOrders e ON r.exOrderID = e.exOrderID
--    LEFT JOIN SubscriptionOrders s ON r.subsOrdersID = s.subsOrdersID
--    LEFT JOIN stockOrders st ON r.stockOrdersID = st.stockOrdersID
--GROUP BY
--    r.receiptID,
--    e.exOrderID,
--    s.subsOrdersID,
--    paidDate,st.stockOrdersID
--UNION ALL
--SELECT
--    null as paidDate,
--    NULL AS receiptID,
--    NULL AS exOrderID,
--    NULL AS subsOrdersID,
--    NULL AS stockOrdersID,
--    SUM(CASE 
--        WHEN r.exOrderID IS NOT NULL OR r.subsOrdersID IS NOT NULL THEN r.paidAmount 
--        ELSE 0 
--    END) AS total_credit_amount,
--    SUM(CASE 
--        WHEN r.stockOrdersID IS NOT NULL THEN r.paidAmount 
--        ELSE 0 
--    END) AS total_debit_amount,
--	SUM(CASE 
--        WHEN r.exOrderID IS NOT NULL OR r.subsOrdersID IS NOT NULL THEN r.paidAmount 
--        ELSE 0 
--    END) -  SUM(CASE 
--        WHEN r.stockOrdersID IS NOT NULL THEN r.paidAmount 
--        ELSE 0 
--    END) AS Profit_amount  
--FROM
--    receipt r
--    LEFT JOIN exOrders e ON r.exOrderID = e.exOrderID
--    LEFT JOIN SubscriptionOrders s ON r.subsOrdersID = s.subsOrdersID
--    LEFT JOIN stockOrders st ON r.stockOrdersID = st.stockOrdersID
--go
--exec acountDebitCreditProfit
---------------------  Query 5  ----------------------------------------

--CREATE PROCEDURE exOrdersByStatusNot
--as
--select orderDate,
--       SupplyDate,
--	   orderPrice,
--	   status
--from exOrders 
--where status in ('notdelivered' , 'notFruition')
--order by SupplyDate 
--go

--exec exOrdersByStatusNot