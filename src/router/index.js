import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import HospitalRegistrationPartOne from "@/pages/HospitalRegistrationPartOne.vue";
import HospitalRegistrationPartTwo from "@/pages/HospitalRegistrationPartTwo.vue";
import HospitalRegistrationPartThree from "@/pages/HospitalRegistrationPartThree.vue";
import CheckYourEmail from "@/pages/CheckYourEmail.vue";
import RedefinePassword from "@/pages/RedefinePassword.vue";
import RedefinePasswordConfirmation from "@/pages/RedefinePasswordConfirmation.vue";
import Faq from "@/pages/Faq.vue";
//DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import SchedulingDashboard from "@/pages/dashboard/SchedulingDashboard.vue";
import Seeds from '@/pages/dashboard/Seeds.vue';
import Seed from "@/pages/dashboard/Seed.vue";
import AllHelp from "@/pages/dashboard/AllHelp.vue";
import AllVolunteers from "@/pages/dashboard/AllVolunteers.vue";
import Volunteer from "@/pages/dashboard/Volunteer.vue";
import VolunteerRequests from "@/pages/dashboard/VolunteerRequests.vue";
import DataVolunteerRequest from "@/pages/dashboard/DataVolunteerRequest.vue";
import AllBeneficiaries from "@/pages/dashboard/AllBeneficiaries.vue";
import BeneficiarieRequests from "@/pages/dashboard/BeneficiarieRequests.vue";
import DataBeneficiarieRequest from "@/pages/dashboard/DataBeneficiarieRequest.vue";
import Beneficiarie from "@/pages/dashboard/Beneficiarie.vue";
import Administrator from "@/pages/dashboard/Administrator.vue";
import UpdateAdministrator from "@/pages/dashboard/UpdateAdministrator.vue";
import UpdateBeneficiarie from "@/pages/dashboard/UpdateBeneficiarie.vue";
import UpdateVolunteer from "@/pages/dashboard/UpdateVolunteer.vue";
import UpdateHelp from "@/pages/dashboard/UpdateHelp.vue";
import Help from "@/pages/dashboard/Help.vue";
import CreateHelp from "@/pages/dashboard/CreateHelp.vue";
// TELAS DE TESTE
import Requisicoes from "@/pages/Requisicoes.vue";
import Firebase from "@/pages/Firebase.vue";
import Criptografia from "@/pages/Criptografia.vue";
import Menu from "@/pages/Menu.vue";
import Notificacao from "@/pages/Notificacao.vue";
import PopUp from "@/pages/PopUp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/hospital-registration-part-one",
    name: "HospitalRegistrationPartOne",
    component: HospitalRegistrationPartOne,
  },
  {
    path: "/hospital-registration-part-two",
    name: "HospitalRegistrationPartTwo",
    component: HospitalRegistrationPartTwo,
  },
  {
    path: "/hospital-registration-part-three",
    name: "HospitalRegistrationPartThree",
    component: HospitalRegistrationPartThree,
  },
  {
    path: "/check-your-email",
    name: "CheckYourEmail",
    component: CheckYourEmail,
  },
  {
    path: "/redefine-password",
    name: "RedefinePassword",
    component: RedefinePassword,
  },
  {
    path: "/redefine-password-confirmation",
    name: "RedefinePasswordConfirmation",
    component: RedefinePasswordConfirmation,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  }, 

  //DASHBOARD
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        redirect: "/dashboard/scheduling",
      },
      {
        path: "/dashboard/scheduling",
        name: "SchedulingDashboard",
        component: SchedulingDashboard,
      },
      {
        path: "/dashboard/all-help",
        name: "AllHelp",
        component: AllHelp,
      },
      {
        path: "/dashboard/seeds",
        name: "Seeds",
        component: Seeds,
      },
      {
        path: "/dashboard/seeds/seed",
        name: "Seed",
        component: Seed,
      },
      {
        path: "/dashboard/all-volunteers",
        name: "AllVolunteers",
        component: AllVolunteers,
      },
      {
        path: "/dashboard/volunteer-requests",
        name: "VolunteerRequests",
        component: VolunteerRequests,
      },
      {
        path: "/dashboard/volunteer-requests/volunteer-request",
        name: "DataVolunteerRequest",
        component: DataVolunteerRequest,
      },
      {
        path: "/dashboard/all-volunteers/volunteer",
        name: "Volunteer",
        component: Volunteer,
      },
      {
        path: "/dashboard/all-beneficiaries",
        name: "AllBeneficiaries",
        component: AllBeneficiaries,
      },
      {
        path: "/dashboard/beneficiarie-requests",
        name: "BeneficiarieRequests",
        component: BeneficiarieRequests,
      },
      {
        path: "/dashboard/beneficiarie-requests/data-beneficiarie-request",
        name: "DataBeneficiarieRequest",
        component: DataBeneficiarieRequest,
      },
      {
        path: "/dashboard/all-beneficiaries/beneficiary",
        name: "Beneficiarie",
        component: Beneficiarie,
      },
      {
        path: "/dashboard/administrator",
        name: "Administrator",
        component: Administrator,
      },
      {
        path: "/dashboard/update-administrator",
        name: "UpdateAdministrator",
        component: UpdateAdministrator,
      },
      {
        path: "/dashboard/update-beneficiarie",
        name: "UpdateBeneficiarie",
        component: UpdateBeneficiarie,
      },
      {
        path: "/dashboard/all-volunteers/volunteer/update-volunteer",
        name: "UpdateVolunteer",
        component: UpdateVolunteer,
      },
      {
        path: "/dashboard/update-help",
        name: "UpdateHelp",
        component: UpdateHelp,
      },
      {
        path: "/dashboard/help",
        name: "Help",
        component: Help,
      },
      {
        path: "/dashboard/create-help",
        name: "CreateHelp",
        component: CreateHelp,
      },
    ],
  },

  // TESTES DE FUNCIONALIDADES
  {
    path: "/requisicoes",
    name: "Requisicoes",
    component: Requisicoes,
  },
  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase,
  },
  {
    path: "/criptografia",
    name: "Criptografia",
    component: Criptografia,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/notificacao",
    name: "Notificacao",
    component: Notificacao,
  },
  {
    path: "/popup",
    name: "PopUp",
    component: PopUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
