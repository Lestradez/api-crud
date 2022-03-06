# Pruebas CRUD
---
### Json-server
Para simular un api-rest al cual realizar las consultas, se utilizó la librería json-server. Esta librería permite mediante un archivo json, llamado ***'db.json'*** realizar consultas como get, post, put, patch.
Para realizar las pruebas es necesario inicializar el servidor json-server con el comando

` json-server --watch db.json --port 3004 `

donde ***--port 3004*** indica el puerto local en el que se ejecutará la api-rest. Las consultas se realizan sobre el enlace http://localhost:3004/.... agregando al final el endpoint deseado 

---
Iniciar la aplicación con 
`npm start`

