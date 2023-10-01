/*

0 - Inteiro
0.0 - Decimal/Float
"" - String


BASE_URL: /api/v1


----------------------------------------------------------------------------------


DESKTOP-LOGIN (POST)

POST - ENVIAR DADOS PARA O LOGIN (/login)

{
  "email": "",
  "password": ""
}


----------------------------------------------------------------------------------


DESKTOP-CADASTRO-HOSPITAL-PARTE-4 (POST)

POST - ENVIAR DADOS DO HOSPITAL (/hospital-registration)

{
  "hospital": {
    "name": "",
    "cnpj": "",
    "email": "",
    "phone": "",
    "website": "",
    "donationSite": "",
    "otherDonationSite": "",
    "photo": "",
    "password": ""
  },
  "address": {
    "cep": "",
    "state": "",
    "city": "",
    "neighborhood": "",
    "road": "",
    "complement": ""
  }
}


----------------------------------------------------------------------------------


DESKTOP-AGENDAMENTOS (GET 2x)

GET - DADOS DO HOSPITAL (/hospital/{id})

{
  "hospitalId": 0,
  "name": "",
  "photo": ""
}


GET - TODOS AGENDAMENTOS (/hospital/schedules)

{
  "user": {
    "userId": 0,
    "name": "",
    "photo": ""
  },
  "schedule": {
    "scheduleId": 0,
    "date": "",
    "hour": "",
    "site": "",
    "status": ""
  }
}


----------------------------------------------------------------------------------


DESKTOP-AGENDAMENTOS-CANCELAR (PUT)

PUT - MUDAR STATUS PARA CANCELAR (/hospital/schedules/{id})

{
  "scheduleId": 0,
  "reason": ""
}


----------------------------------------------------------------------------------


DESKTOP-AGENDAMENTOS-CONCLUIR (PUT)

PUT - MUDAR O STATUS PARA CONCLUIDO (/hospital/schedules/{id})

{
  "scheduleId": 0
}


----------------------------------------------------------------------------------


DESKTOP-AGENDAMENTOS-REMARCAR (GET E PUT)

GET - SELECT DO LOCAL (/hospital/sites)

{
  "siteId": 0,
  "site": ""
}


PUT - MUDAR O STATUS PARA REMARCADO (/hospital/schedules/{id})

{
  "idSchedule": 0,
  "date": "",
  "hour": "",
  "siteId": 0
}


----------------------------------------------------------------------------------


DESKTOP-DOADOR (GET 2X, DELETE, PUT)

GET - DADOS DO USUÁRIO (/users/{id})

{
  "name": "",
  "photo": "",
  "email": "",
  "phone": "",
  "bloodType": "",
  "age": "",
  "sex": "",
  "weight": ""
}


GET - AGENDAMENTOS DO USUÁRIO (/users/schedules)

{
  "scheduleId": 0,
  "date": "",
  "hour": "",
  "site": "",
  "status": ""
}


DELETE - EXCLUIR AGENDAMENTO DO USUÁRIO (/users/schedules/{id})

{
  "userId": 0,
  "scheduleId": 0
}


PUT - REMARCAR AGENDAMENTO DO USUÁRIO (/users/schedules/{id})

{
  "userId": 0,
  "scheduleId": 0,
  "date": "",
  "hour": "",
  "siteId": 0
}


----------------------------------------------------------------------------------


DESKTOP-RESERVAR-AGENDAMENTOS (GET 2X)

GET - SELECT DO LOCAL (/hospital/sites)

{
  "siteId": 0,
  "site": ""
}


GET - TRAZER TODOS OS AGENDAMENTOS DISPONÍVEIS (/hospital/book-schedules)

{
  "scheduleId": 0,
  "date": "",
  "hour": "",
  "site": ""
}


----------------------------------------------------------------------------------


DESKTOP-RESERVAR-AGENDAMENTOS-CRIAR-AGENDAMENTOS (POST)

POST - CRIAR AGENDAMENTO (/hospital/book-schedules)

{
  "date": "",
  "hour": "",
  "siteId": 0
}


----------------------------------------------------------------------------------


DESKTOP-RESERVAR-AGENDAMENTOS-CANCELAR-AGENDAMENTO (DELETE)

DELETE - REMOVER AGENDAMENTO DISPONÍVEL (/hospital/book-schedules)

{
  "hospitalId": 0,
  "scheduleId": 0
}


----------------------------------------------------------------------------------


DESKTOP-RESERVAR-AGENDAMENTOS-REMARCAR-AGENDAMENTO (PUT)

PUT - EDITAR AGENDAMENTO (/hospital/book-schedules)

{
  "hospitalId": 0,
  "scheduleId": 0,
  "date": "",
  "hour": "",
  "siteId": 0
}


----------------------------------------------------------------------------------


DESKTOP-CONFIGURAÇÕES (GET)

GET - BUSCAR DADOS DO HOSPITAL (/hospital/{id})

{
  "hospital": {
    "name": "",
    "cnpj": "",
    "email": "",
    "phone": "",
    "website": "",
    "donationSite": "",
    "otherDonationSite": "",
    "photo": ""
  },
  "address": {
    "cep": "",
    "state": "",
    "city": "",
    "neighborhood": "",
    "road": "",
    "complement": ""
  }
}


----------------------------------------------------------------------------------


DESKTOP-EDITAR HOSPITAL (GET, PUT)

GET - BUSCAR DADOS DO HOSPITAL (/hospital/{id})

{
  "hospital": {
    "name": "",
    "cnpj": "",
    "email": "",
    "phone": "",
    "website": "",
    "donationSite": "",
    "otherDonationSite": "",
    "photo": ""
  },
  "address": {
    "cep": "",
    "state": "",
    "city": "",
    "neighborhood": "",
    "road": "",
    "complement": ""
  }
}


PUT - ALTERAR DADOS DO HOSPITAL (/hospital/{id})

{
  "hospital": {
    "name": "",
    "cnpj": "",
    "email": "",
    "phone": "",
    "website": "",
    "donationSite": "",
    "otherDonationSite": "",
    "photo": ""
  },
  "address": {
    "cep": "",
    "state": "",
    "city": "",
    "neighborhood": "",
    "road": "",
    "complement": ""
  }
}


----------------------------------------------------------------------------------


DESKTOP-REDEFINIR-SENHA (PUT)

PUT - ALTERAR SENHA DO HOSPITAL (/hospital/redefine-password/{id})

{
  "hospitalId": 0,
  "password": ""
}


----------------------------------------------------------------------------------


DESKTOP-ESTATÍSTICAS (GET 3X)

GET - DADOS DO GRÁFICO DE AGENDAMENTOS (/hospital/{id}/statistics/schedules)

{
  "scheduledAmount": 0,
  "concludedAmount": 0,
  "rescheduledAmount": 0,
  "pendingAmount": 0,
  "totalSchedules": 0
}


GET - DADOS DO GRÁFICO DE AVALIAÇÕES (/hospital/{id}/statistics/ratings)

{
  "fiveStarsRating": 0,
  "fourStarsRating": 0,
  "threeStarsRating": 0,
  "twoStarsRating": 0,
  "oneStarsRating": 0,
  "average": 0.0,
  "totalReviews": 0
}


GET - DADOS DOS COMENTÁRIOS (/hospital/{id}/statistics/reviews)

{
  "userId": 0,
  "photo": "",
  "name": "",
  "starRating": 0.0,
  "date": "",
  "opinion": ""
}


*/