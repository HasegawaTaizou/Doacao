<template>
  <!-- Seu código de template vai aqui -->
  <input type="file" @change="uploadImage" />
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDofRds_OjtPBMabg4-lS82cRWdLjXA4Zk",
  authDomain: "greenworld-f2763.firebaseapp.com",
  projectId: "greenworld-f2763",
  storageBucket: "greenworld-f2763.appspot.com",
  messagingSenderId: "549856611550",
  appId: "1:549856611550:web:ca75f1092264f9d607864f"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default {
  name: "Firebase",
  methods: {
    async uploadImage(event) {
      const file = event.target.files[0];
      const storageRef = ref(storage, "images/" + file.name);

      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);

      // Lógica para lidar com a URL de download da imagem
      console.log("URL da imagem:", downloadURL);
    }
  }
};
</script>
