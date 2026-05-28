const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(btn=>{

btn.addEventListener("click",()=>{

pages.forEach(page=>
page.classList.remove("active-page"));

navItems.forEach(nav=>
nav.classList.remove("active-nav"));

const pageId =
btn.getAttribute("data-page");

document
.getElementById(pageId)
.classList.add("active-page");

btn.classList.add("active-nav");

});

});

let visible = true;

const toggleBalance =
document.getElementById("toggleBalance");

toggleBalance.addEventListener("click",()=>{

const balance =
document.getElementById("balanceText");

const cfa =
document.getElementById("cfaText");

visible = !visible;

if(visible){

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye"></i>';

}else{

balance.innerText = "••••";

cfa.innerText = "≈ ••••";

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye-slash"></i>';

}

});

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeToggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

themeToggle.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

let xp = 0;

document
.getElementById("xpFill")
.style.width = xp + "%";

document
.getElementById("levelPercent")
.innerText = xp + "%";

const copyBtn =
document.getElementById("copyReferral");

copyBtn.addEventListener("click",()=>{

const input =
document.querySelector(".referral-box input");

navigator.clipboard.writeText(input.value);

copyBtn.innerText =
"Lien copié ✓";

setTimeout(()=>{

copyBtn.innerText =
"Copier le lien";

},2000);

});

const modal =
document.getElementById("mainModal");

const modalContent =
document.getElementById("modalContent");

function openModal(content){

modal.style.display = "flex";

modalContent.innerHTML = content;

}

function closeModal(){

modal.style.display = "none";

}

window.addEventListener("click",(e)=>{

if(e.target === modal){

closeModal();

}

});

document
.querySelectorAll(".mission-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

openModal(`

<h2>🎯 ${btn.innerText}</h2>

<p style="margin-top:10px">
💰 Gain : 0 BCC
</p>

<p style="margin-top:10px">
⏱️ Durée : 0 min
</p>

<p style="margin-top:10px">
📋 Conditions : mission admin.
</p>

<button class="main-btn"
style="width:100%;margin-top:20px">

COMMENCER

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

});

document
.getElementById("sendBtn")
.addEventListener("click",()=>{

openModal(`

<h2>📤 Envoyer BCC</h2>

<input placeholder="ID BCC destinataire">

<input placeholder="Montant BCC">

<p style="margin-top:15px">
Frais : 1%
</p>

<button class="main-btn"
style="width:100%;margin-top:20px">

Confirmer

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.getElementById("receiveBtn")
.addEventListener("click",()=>{

openModal(`

<h2>📥 Recevoir</h2>

<div class="receive-id-box">

BCC20458

</div>

<button class="main-btn"
style="width:100%;margin-top:20px">

Copier ID

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.getElementById("scanBtn")
.addEventListener("click",
async()=>{

try{

const stream =
await navigator
.mediaDevices
.getUserMedia({
video:true
});

openModal(`

<h2>📷 Scanner QR</h2>

<video id="scannerVideo"
autoplay
playsinline
style="
width:100%;
height:260px;
border-radius:20px;
margin-top:20px;
background:black;
"></video>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

const video =
document.getElementById("scannerVideo");

video.srcObject = stream;

}catch(error){

alert("Caméra refusée");

}

});

document
.getElementById("convertBtn")
.addEventListener("click",()=>{

openModal(`

<h2>🔄 Convertir</h2>

<select>

<option>
Wave
</option>

<option>
Orange Money
</option>

<option>
MTN Money
</option>

<option>
Moov Money
</option>

</select>

<input placeholder="Numéro mobile money">

<input placeholder="Montant">

<button class="main-btn"
style="width:100%;margin-top:20px">

Valider

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.querySelector(".notif-btn")
.addEventListener("click",()=>{

openModal(`

<h2>🔔 Notifications</h2>

<p style="margin-top:15px">

Aucune notification admin

</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.querySelector(".center-btn")
.addEventListener("click",()=>{

openModal(`

<h2>🔥 Mission du jour</h2>

<p style="margin-top:15px">

Mission administrateur bientôt disponible

</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.getElementById("scratchCard")
.addEventListener("click",()=>{

const gains =
[10,25,50,100];

const gain =
gains[
Math.floor(
Math.random()*gains.length
)
];

document
.getElementById("scratchCard")
.innerHTML =
`🎉 ${gain} BCC GAGNÉS`;

});

document
.getElementById("levelBadge")
.addEventListener("click",()=>{

openModal(`

<h2>🏆 Niveaux BCC</h2>

<div style="
margin-top:20px;
display:flex;
flex-direction:column;
gap:12px;
">

<div class="badge">
🥉 Niveau 1 → 15 : BRONZE
</div>

<div class="badge">
🥈 Niveau 16 → 30 : SILVER
</div>

<div class="badge">
🥇 Niveau 31 → 45 : GOLD
</div>

<div class="badge">
💎 Niveau 46 → 50 : PREMIUM
</div>

<div class="badge">
🔥 Niveau 51 → 60 : PRO
</div>

<div class="badge">
👑 Niveau 65+ : SUPER PRO
</div>

</div>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.getElementById("transferRewardBtn")
.addEventListener("click",()=>{

let reward =
parseInt(
document
.getElementById("rewardBalance")
.innerText
) || 0;

let main =
parseInt(
document
.getElementById("balanceText")
.innerText
) || 0;

main += reward;

document
.getElementById("balanceText")
.innerText = main;

document
.getElementById("cfaText")
.innerText =
`≈ ${main} FCFA`;

document
.getElementById("rewardBalance")
.innerText =
"0 BCC";

openModal(`

<h2>
✅ Récompenses transférées
</h2>

<p style="margin-top:15px">

Les récompenses ont été envoyées
vers le solde principal.

</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

document
.getElementById("copyReferral2")
.addEventListener("click",()=>{

navigator.clipboard.writeText(
"https://bccfuture.com/ref/BCC20458"
);

openModal(`

<h2>
✅ Lien copié
</h2>

<p style="margin-top:15px">

Votre lien de parrainage
a été copié.

</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});
