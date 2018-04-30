-- Expected Output --

--   name   |        name
-- ---------+---------------------
-- Bixby    | Chow Chow
-- Bixby    | German Shepherd
-- Mesa     | Jack Russell Terrier
-- Trixy    | Chow Chow
-- Penelope | German Shepherd
-- Iago     | Black Lab
-- Iago     | Cat



select dog.name, breed.name
from dog inner join breed on dog.id = breed.id
inner join dogbreed on dogbreed.breed_id=breed.id;
