  SELECT breed.name
  FROM breed
  JOIN dogbreed
  ON  breed.id = dogbreed.breed_id
  JOIN dog
  ON dogbreed.dog_id = dog.id
  JOIN appointment
  ON dog.id = appointment.dog_id
  WHERE appointment.groomer_name = 'Martha'
  GROUP BY breed.name