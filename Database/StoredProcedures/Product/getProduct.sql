Use Products;
GO
CREATE OR ALTER PROCEDURE getProduct (@id VARCHAR(255))
AS
BEGIN
    SELECT * FROM product WHERE id = @id
END;
GO