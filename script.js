
import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ==================
SIMPAN NILAI
================== */

const form = document.getElementById("formNilai");

if(form){

form.addEventListener("submit", async(e)=>{

e.preventDefault();

const nilai = [

+agama.value,
+indo.value,
+mtk.value,
+ipas.value,
+pp.value,
+pjok.value,
+seni.value,
+bing.value

];

const rata =
nilai.reduce((a,b)=>a+b,0)
/
nilai.length;

await addDoc(
collection(db,"nilai_siswa"),
{

nama:nama.value,
kelas:kelas.value,

agama:+agama.value,
bahasaIndonesia:+indo.value,
matematika:+mtk.value,
ipas:+ipas.value,
pancasila:+pp.value,
pjok:+pjok.value,
seni:+seni.value,
bahasaInggris:+bing.value,

rata:rata.toFixed(2),

tanggal:new Date()

});

alert("Nilai berhasil disimpan");

form.reset();

});

}

/* ==================
TAMPILKAN NILAI
================== */

const dataNilai =
document.getElementById("dataNilai");

if(dataNilai){

const querySnapshot =
await getDocs(
collection(db,"nilai_siswa")
);

querySnapshot.forEach((doc)=>{

const d = doc.data();

dataNilai.innerHTML += `

<tr>
<td>${d.nama}</td>
<td>${d.kelas}</td>
<td>${d.rata}</td>
</tr>

`;

});

}
