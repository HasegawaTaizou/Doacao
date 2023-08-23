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
const aa = {
  hospitalId: 0,
  name: "",
  photo: "",
}

//GET - TODOS AGENDAMENTOS
const aaaaaaa = {
  user: {
    userId: 0,
    "name": "",
    "photo": "",
  },
  schedule: {
    "scheduleId": 0,
    "date": "",
    "hour": "",
    "site": "",
    "status": ""
  }
}

// DESKTOP-AGENDAMENTOS-CANCELAR (PUT)
//PUT - MUDAR STATUS PARA CANCELAR
const logina = {
  scheduleId: 0,
  reason: "",
};

// DESKTOP-AGENDAMENTOS-CONCLUIR (PUT)`
const loginb = {
  scheduleId: 0,
};

// DESKTOP-AGENDAMENTOS-REMARCAR (GET E PUT)
//GET - SELECT DO LOCAL
const alo = {
  siteId: 0,
  site: "",
};

//PUT - AGENDAMENTO
const loginC = {
  idSchedule: 0,
  date: "",
  hour: "",
  siteId: 0,
};

// DESKTOP-DOADOR (GET 2X, DELETE, PUT)
//GET - DADOS DO USUÁRIO
const loginCA = {
  name: "",
  photo: "",
  email: "",
  phone: "",
  bloodType: "",
  age: "",
  sex: "",
  weight: "",
};

//GET - AGENDAMENTOS DO USUÁRIO
const aaa = {
  scheduleId: 0,
  date: "",
  hour: "",
  site: "",
  status: "",
}

//DELETE - EXCLUIR AGENDAMENTO DO USUÁRIO
const aaad = {
  userId: 0,
  scheduleId: 0,
}

//PUT - REMARCAR AGENDAMENTO DO USUÁRIO
const asaad = {
  userId: 0,
  scheduleId: 0,
  date: "",
  hour: "",
  siteId: 0,
}

//DESKTOP-RESERVAR-AGENDAMENTOS (GET 2X, POST, DELETE, PUT)
//GET - SELECT DO LOCAL
const aloaaa = {
  siteId: 0,
  site: "",
};

//POST - CRIAR AGENDAMENTO
const asssaad = {
  date: "",
  hour: "",
  siteId: 0,
}

//GET - TRAZER TODOS OS AGENDAMENTOS DISPONÍVEIS
const aaAAAa = {
  scheduleId: 0,
  date: "",
  hour: "",
  site: "",
}

//DELETE - REMOVER AGENDAMENTO DISPONÍVEL
const aaadaa = {
  hospitalId: 0,
  scheduleId: 0,
}

//PUT - EDITAR AGENDAMENTO
const asaaaad = {
  hospitalId: 0,
  scheduleId: 0,
  date: "",
  hour: "",
  siteId: 0,
}

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
const aaaaa = {
  hospitalId: 0,
  password: ""
}

//DESKTOP-ESTATÍSTICAS (GET 3X)
//GET - DADOS DO GRÁFICO DE AGENDAMENTOS
const fwe = {
  scheduledAmount: 0,
  concludedAmount: 0,
  rescheduledAmount: 0,
  pendingAmount: 0,
  totalSchedules: 0
}

//GET - DADOS DO GRÁFICO DE AVALIAÇÕES
const assessment = {
  fiveStarsRating:0,
  fourStarsRating:0,
  threeStarsRating:0,
  twoStarsRating:0,
  oneStarsRating:0,
  average: 0.0,
  totalReviews: 0
}

//GET - DADOS DOS COMENTÁRIOS
const aaaa = {
  userId: 0,
  photo: "",
  name: "",
  starRating: 0.0,
  date: "",
  opinion: "",
}