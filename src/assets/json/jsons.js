/*
0 - Inteiro
0.0 - Decimal/Float
"" - String
*/

const login = {
  password: "",
};

//DESKTOP-LOGIN (POST)
// {
//   "email": "",
//   "password": ""
// }

//DESKTOP-CADASTRO-HOSPITAL-PARTE-4 (POST)
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

// DESKTOP-AGENDAMENTOS (GET)
// {
//   "scheduleId": 0,
//   "name": "",
//   "photo": "",
//   "date": "",
//   "hour": "",
//   "site": "",
//   "status": ""
// }

// DESKTOP-AGENDAMENTOS-CANCELAR (PUT)
const logina = {
  scheduleId: 0,
  reason: "",
};

// DESKTOP-AGENDAMENTOS-CONCLUIR (PUT)
const loginb = {
  scheduleId: 0,
};

// DESKTOP-AGENDAMENTOS-REMARCAR (GET E PUT)
//GET
const alo = {
  siteId: 0,
  site: "",
};

//PUT
const loginC = {
  idSchedule: 0,
  date: "",
  hour: "",
  siteId: 0,
};

// DESKTOP-DOADOR (GET 2X)
//GET
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

//GET
const aaa = {
  idSchedule: 0,
  date: "",
  hour: "",
  site: "",
  status: "",
}
