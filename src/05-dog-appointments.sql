-- Expected Output --

--    name   | appointment_date
-- ----------+------------------
--  Bixby    | 2016-02-18
--  Bixby    | 2016-02-18
--  Mesa     | 2016-02-18
--  Trixy    | 2016-02-18
--  Trixy    | 2016-02-18
--  Penelope | 2016-02-18
--  Iago     |

SELECT dog.name, appointment.appointment_date
FROM dog LEFT JOIN appointment ON dog.id = appointment.dog_id
