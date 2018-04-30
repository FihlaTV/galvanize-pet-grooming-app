-- Expected Output --

--   name   | first_name | last_name
-- ---------+------------+-----------
-- Bixby    | Kyle       | Coberly
-- Mesa     | CJ         | Reynolds
-- Trixy    | CJ         | Reynolds
-- Penelope | Danny      | Fritz
-- Iago     | CJ         | Reynolds

SELECT dog.name, customer.first_name, customer.last_name
FROM customer
INNER JOIN dog ON dog.customer_id = customer.id;
