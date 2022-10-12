--script that creates a trigger that decreases the quantity of an item
--after a new order is placed

CREATE TRIGGER order_dec 
    AFTER INSERT ON orders
    FOR EACH ROW 
    UPDATE items
SET quantity = quantity - NEW.number
WHERE name = NEW.item_name;

