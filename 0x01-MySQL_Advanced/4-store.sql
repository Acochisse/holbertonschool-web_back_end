--script that creates a trigger that decreases the quantity of an item
--after a new order is placed

CREATE TRIGGER decrease_quantity
BEFORE INSERT 
ON orders
FOR EACH ROW
BEGIN
UPDATE items
SET quantity = quantity - NEW.quantity
WHERE name = NEW.item_name;
END;
