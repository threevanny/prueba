'SELECT * FROM mascotas'

'SELECT * FROM mascotas WHERE propietario IS NULL'

'SELECT COUNT(*) AS cantidad, tipo_mascota FROM mascotas GROUP BY tipo_mascota'

'SELECT * FROM propietarios WHERE id IN (SELECT propietario FROM mascotas GROUP BY propietarios HAVING COUNT(*) > 1)'

'SELECT COUNT(*) AS cantidad, tipo_mascota, propietario FROM mascotas GROUP BY tipo_mascota, propietarios'

'SELECT * FROM propietarios WHERE id NOT IN (SELECT propietario FROM mascotas)'
