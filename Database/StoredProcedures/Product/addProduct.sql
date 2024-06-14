Use Products;
GO
CREATE OR ALTER PROCEDURE addProduct (@id VARCHAR(255), @name VARCHAR(255), @description VARCHAR(255),
@price INT)
AS
BEGIN
    INSERT INTO product VALUES (
        @id, @name, @description, @price
    )
END;
GO