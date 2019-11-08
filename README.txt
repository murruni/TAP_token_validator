https://jwt.io/
SECRET: Klave muy secreT4

sub: subject (usuario del sistema)
admin: indica si es administrador del sistema, agregado en el response

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
