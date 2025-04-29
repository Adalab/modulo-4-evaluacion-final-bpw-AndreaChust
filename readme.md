📚 IndoAquarium API Documentation

### Bienvenido/a a IndoAquarium API, una API REST para gestionar peces del Océano Índico 🌊🐳.
Construida con Node.js, Express.js y MySQL.

## Base URL: http://localhost:5001

### - Endpoints disponibles:

#### Obtener todos los peces 🐠🐢🐬🐡
GET /api/fishes

- Descripción: Devuelve la lista completa de peces almacenados en la base de datos.

- Respuesta de ejemplo:
{
  "info": {
    "count": 6
  },
  "results": [
    {
      "id": 1,
      "name": "Moorish Idol",
      "scientific_name": "Zanclus cornutus",
      "depth_range": "2-150m",
      "behavior": "Peaceful reef fish often found swimming alone or in pairs."
    },
    ...
  ]
}

#### Añadir un nuevo pez 🐟
POST /api/fish

- Descripción: Permite crear un nuevo pez en la base de datos.

- Body JSON obligatorio:

    {
  "name": "Mandarinfish",
  "scientific_name": "Synchiropus splendidus",
  "depth_range": "1-18m",
  "behavior": "Small, shy, and peaceful fish often found hiding in coral crevices."
}

- Respuesta de ejemplo con Postman:

{
  "success": true,
  "id": 7
}

#### Actualizar un pez existente 🐡

PUT /api/fish/:id

 - Descripción: Actualiza los datos de un pez utilizando su id.

 - Parámetro en la URL: id → ID del pez a actualizar.

 - Body JSON obligatorio:

    {
  "name": "Updated Fish",
  "scientific_name": "Updated Scientific Name",
  "depth_range": "5-50m",
  "behavior": "Updated behavior description."
}

 - Respuesta de ejemplo con Postman:

 {
  "success": true,
  "id": 1
}

#### Eliminar un pez 🎣
DELETE /api/fish/:id

 - Descripción: Elimina un pez de la base de datos usando su id.

 - Parámetro en la URL: id → ID del pez a eliminar.

 - Respuesta de ejemplo con Postman:

 {
  "status": "success",
  "message": "Removed resource"
}

## Sobre el proyecto
Este proyecto es una práctica backend utilizando Express.js, Node.js y MySQL, pensado para trabajar operaciones CRUD con peces tropicales de Indonesia y del Océano Índico. 🎣🐟

## Creado por 🤿🧜‍♀️

Andrea María Chust Ramos, estudiante de la promoción 48 (Sara García Alonso) de Adalab.





