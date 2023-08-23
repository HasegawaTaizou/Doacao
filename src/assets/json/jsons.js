/*
0 - Inteiro
0.0 - Decimal/Float
"" - String
*/

//DESKTOP-LOGIN (POST)
//POST - ENVIAR DADOS PARA O LOGIN
// {
//   "email": "",
//   "password": ""
// }

//DESKTOP-CADASTRO-HOSPITAL-PARTE-4 (POST)
//POST - ENVIAR DADOS DO HOSPITAL
// {
//   "hospital": {
//     "name": "",
//     "cnpj": "",
//     "email": "",
//     "phone": "",
//     "website": "",
//     "donationSite": "",
//     "otherDonationSite": "",
//     "photo": "",
//     "password": ""
//   },
//   "address": {
//     "cep": "",
//     "state": "",
//     "city": "",
//     "neighborhood": "",
//     "road": "",
//     "complement": ""
//   }
// }

// DESKTOP-AGENDAMENTOS (GET 2x)
//GET - DADOS DO HOSPITAL
// {
//   "hospitalId": 0,
//   "name": "",
//   "photo": ""
// }

//GET - TODOS AGENDAMENTOS
// {
//   "user": {
//     "userId": 0,
//     "name": "",
//     "photo": ""
//   },
//   "schedule": {
//     "scheduleId": 0,
//     "date": "",
//     "hour": "",
//     "site": "",
//     "status": ""
//   }
// }

// DESKTOP-AGENDAMENTOS-CANCELAR (PUT)
//PUT - MUDAR STATUS PARA CANCELAR
// {
//   "scheduleId": 0,
//   "reason": ""
// }

// DESKTOP-AGENDAMENTOS-CONCLUIR (PUT)
// {
//   "scheduleId": 0
// }

// DESKTOP-AGENDAMENTOS-REMARCAR (GET E PUT)
//GET - SELECT DO LOCAL
// {
//   "siteId": 0,
//   "site": ""
// }

//PUT - AGENDAMENTO
// {
//   "idSchedule": 0,
//   "date": "",
//   "hour": "",
//   "siteId": 0
// }

// DESKTOP-DOADOR (GET 2X, DELETE, PUT)
//GET - DADOS DO USUÁRIO
// {
//   "name": "",
//   "photo": "",
//   "email": "",
//   "phone": "",
//   "bloodType": "",
//   "age": "",
//   "sex": "",
//   "weight": ""
// }

//GET - AGENDAMENTOS DO USUÁRIO
// {
//   "scheduleId": 0,
//   "date": "",
//   "hour": "",
//   "site": "",
//   "status": ""
// }

//DELETE - EXCLUIR AGENDAMENTO DO USUÁRIO
// {
//   "userId": 0,
//   "scheduleId": 0
// }

//PUT - REMARCAR AGENDAMENTO DO USUÁRIO
// {
//   "userId": 0,
//   "scheduleId": 0,
//   "date": "",
//   "hour": "",
//   "siteId": 0
// }

//DESKTOP-RESERVAR-AGENDAMENTOS (GET 2X, POST, DELETE, PUT)
//GET - SELECT DO LOCAL
// {
//   "siteId": 0,
//   "site": ""
// }

//POST - CRIAR AGENDAMENTO
// {
//   "date": "",
//   "hour": "",
//   "siteId": 0
// }

//GET - TRAZER TODOS OS AGENDAMENTOS DISPONÍVEIS
// {
//   "scheduleId": 0,
//   "date": "",
//   "hour": "",
//   "site": ""
// }

//DELETE - REMOVER AGENDAMENTO DISPONÍVEL
// {
//   "hospitalId": 0,
//   "scheduleId": 0
// }

//PUT - EDITAR AGENDAMENTO
// {
//   "hospitalId": 0,
//   "scheduleId": 0,
//   "date": "",
//   "hour": "",
//   "siteId": 0
// }

//DESKTOP-CONFIGURAÇÕES (GET)
// {
//   "hospital": {
//     "name": "",
//     "cnpj": "",
//     "email": "",
//     "phone": "",
//     "website": "",
//     "donationSite": "",
//     "otherDonationSite": "",
//     "photo": ""
//   },
//   "address": {
//     "cep": "",
//     "state": "",
//     "city": "",
//     "neighborhood": "",
//     "road": "",
//     "complement": ""
//   }
// }

//DESKTOP-EDITAR HOSPITAL (GET, PUT)
//GET - BUSCAR DADOS DO HOSPITAL
// {
//   "hospital": {
//     "name": "",
//     "cnpj": "",
//     "email": "",
//     "phone": "",
//     "website": "",
//     "donationSite": "",
//     "otherDonationSite": "",
//     "photo": ""
//   },
//   "address": {
//     "cep": "",
//     "state": "",
//     "city": "",
//     "neighborhood": "",
//     "road": "",
//     "complement": ""
//   }
// }

//PUT - ALTERAR DADOS DO HOSPITAL
// {
//   "hospital": {
//     "name": "",
//     "cnpj": "",
//     "email": "",
//     "phone": "",
//     "website": "",
//     "donationSite": "",
//     "otherDonationSite": "",
//     "photo": ""
//   },
//   "address": {
//     "cep": "",
//     "state": "",
//     "city": "",
//     "neighborhood": "",
//     "road": "",
//     "complement": ""
//   }
// }

//DESKTOP-REDEFINIR-SENHA (PUT)
// {
//   "hospitalId": 0,
//   "password": ""
// }

//DESKTOP-ESTATÍSTICAS (GET 3X)
//GET - DADOS DO GRÁFICO DE AGENDAMENTOS
// {
//   "scheduledAmount": 0,
//   "concludedAmount": 0,
//   "rescheduledAmount": 0,
//   "pendingAmount": 0,
//   "totalSchedules": 0
// }

//GET - DADOS DO GRÁFICO DE AVALIAÇÕES
// {
//   "fiveStarsRating": 0,
//   "fourStarsRating": 0,
//   "threeStarsRating": 0,
//   "twoStarsRating": 0,
//   "oneStarsRating": 0,
//   "average": 0.0,
//   "totalReviews": 0
// }

//GET - DADOS DOS COMENTÁRIOS
// {
//   "userId": 0,
//   "photo": "",
//   "name": "",
//   "starRating": 0.0,
//   "date": "",
//   "opinion": ""
// }
