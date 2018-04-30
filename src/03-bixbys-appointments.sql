-- Expected Output --

-- first_name | last_name | appointment_date
-- ------------+-----------+------------------
-- Kyle       | Coberly   | 2016-02-18
-- Kyle       | Coberly   | 2016-03-18

-- YOUR SQL HERE --
SELECT customer.first_name, customer.last_name, appointment.appointment_date
FROM appointment JOIN customer ON customer.id = 1
WHERE appointment.dog_id = 1;
