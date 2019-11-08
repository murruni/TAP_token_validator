# UP Técnicas Avanzadas de Programación

## Microservicio para validar token JWT

### Endpoints
* GET /validate
  * Función:
    * Comprobar la validez del token de usuario.
  * Requiere:
    * Token JWT en el header del request.
  * Retorna:
    * HTTP code 200 si es válido. <br />
      Datos en body { “sub” : “_user_”, “name” : “_username_” ,“admin” : true/false }
    * HTTP code 400 si el request está mal formado. <br />
      Mensaje de error en el body { “error” : “error message” }
    * HTTP code 401 si el token no es válido. <br />
      Mensaje de error en el body { “error” : “error message” }...

### Ejecución

* Para correr localmente<br>
  * clone https://github.com/murruni/TAP_token_validator.git<br>
  * cd app
  * npm install
  * node index.js
* Para correr con Docker
  * docker build -t murruni/tap_token_validator .
  * docker run --name tap_token_validator -p 8080:3000 -d murruni/tap_token_validator:latest
* Para obtener desde DockerHub (acceso público)
  * docker pull murruni/tap_token_validator
* Para pruebas 
  * Importar en Postman el archivo postman_collection.json

---

### JWT Detalle

* https://jwt.io/ 
* Datos
  * SECRET: Klave muy secreT4
  * sub: subject (usuario del sistema) user1, user2, admin
  * admin: indica si es administrador del sistema (agregado en el response)

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJVc3VhcmlvIDEifQ.p-81M-mAceOS-m3RR8_TfVDd6p5YqPJtIcyZz3SlxLg
{
  "sub": "user1",
  "name": "Usuario 1",
  "admin": false
}

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMiIsIm5hbWUiOiJVc3VhcmlvIDIifQ.EiKdTPpiqkrb-Tae--0qMflu0IYlqGGkOxWK1RBRNMo
{
    "sub": "user2",
    "name": "Usuario 2",
    "admin": false
}

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbmlzdHJhZG9yIn0.QNQ1rqU8a4tu5bCPGmgKZi1lIQz5V61ia0BfOsZz438
{
    "sub": "admin",
    "name": "administrador",
    "admin": true
}
