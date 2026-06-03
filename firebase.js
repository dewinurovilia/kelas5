import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvbER9UML8e-FfwEsgnPvWdOVR2TE1zFY",
  authDomain: "rekap-pesanan.firebaseapp.com",
  databaseURL: "https://rekap-pesanan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rekap-pesanan",
  storageBucket: "rekap-pesanan.firebasestorage.app",
  messagingSenderId: "394281706606",
  appId: "1:394281706606:web:b7f1de991819396f40b27f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
