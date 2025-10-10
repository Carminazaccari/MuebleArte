// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase (copiala de la consola Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCOerxYiWxznK5-oTb7eTlQSI_pdSRQw6U",
  authDomain: "mueblearte-8de32.firebaseapp.com",
  projectId: "mueblearte-8de32",
  storageBucket: "mueblearte-8de32.firebasestorage.app",
  messagingSenderId: "979209668401",
  appId: "1:979209668401:web:00cb28c258117513305210"
};

// Inicializar Firebase App
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y exportar para usar en componentes
const db = getFirestore(app);

export { db };