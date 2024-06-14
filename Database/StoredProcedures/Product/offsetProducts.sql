Use Products;
GO
CREATE OR ALTER PROCEDURE offsetProducts
AS
BEGIN
    SELECT name, description FROM product 
    ORDER BY price
    OFFSET 0 ROWS FETCH NEXT 2 ROWS ONLY

END;
GO
