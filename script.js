const DATA_KEY="aswPortfolioDataV2";
const defaults={name:"Anggi Septi Wahyuni",roles:"Excel • Data Analysis • Looker Studio • Graphic Design",intro:"Saya membantu pemilik bisnis mengolah data menjadi insight yang jelas, rapi, dan menarik secara visual.",whatsapp:"6280000000000",email:"emailanda@example.com",excelTitle:"Sales & Inventory Dashboard",lookerTitle:"Business Performance Dashboard",designTitle:"Branding & Promotional Design",about:"Saya membangun portfolio melalui studi kasus usaha sendiri agar setiap project dapat dijelaskan dari masalah, proses, sampai hasilnya."};
let data={...defaults,...JSON.parse(localStorage.getItem(DATA_KEY)||"{}")};
function apply(){
 const name=document.querySelector("#name"); if(name) name.innerHTML=(data.name||defaults.name).replace(" ","<br>");
 ["roles","intro","excelTitle","lookerTitle","designTitle","aboutText"].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=data[id]||defaults[id]});
 const wa=document.querySelector("#wa"); if(wa) wa.href="https://wa.me/"+data.whatsapp;
 const email=document.querySelector("#email"); if(email) email.href="mailto:"+data.email;
 ["fName","fRoles","fIntro","fWa","fEmail","fExcel","fLooker","fDesign","fAbout"].forEach(id=>{const el=document.getElementById(id); if(el) el.value={fName:data.name,fRoles:data.roles,fIntro:data.intro,fWa:data.whatsapp,fEmail:data.email,fExcel:data.excelTitle,fLooker:data.lookerTitle,fDesign:data.designTitle,fAbout:data.about}[id]||""});
}
apply();
const body=document.body;
const editorBtn=document.querySelector("#editorBtn"); if(editorBtn) editorBtn.onclick=()=>body.classList.add("editor-open");
const closeEditor=document.querySelector("#closeEditor"); if(closeEditor) closeEditor.onclick=()=>body.classList.remove("editor-open");
const save=document.querySelector("#save"); if(save) save.onclick=()=>{data={name:fName.value,roles:fRoles.value,intro:fIntro.value,whatsapp:fWa.value,email:fEmail.value,excelTitle:fExcel.value,lookerTitle:fLooker.value,designTitle:fDesign.value,about:fAbout.value};localStorage.setItem(DATA_KEY,JSON.stringify(data));apply();toast("Perubahan tersimpan di browser.")};
const reset=document.querySelector("#reset"); if(reset) reset.onclick=()=>{localStorage.removeItem(DATA_KEY);data={...defaults};apply();toast("Kembali ke isi awal.")};
function toast(msg){const t=document.querySelector("#toast");if(!t)return;t.textContent=msg;t.classList.add("show-toast");setTimeout(()=>t.classList.remove("show-toast"),2200)}
const open=document.querySelector("#open"),sidebar=document.querySelector("#sidebar"),close=document.querySelector("#close");
if(open)open.onclick=()=>sidebar.classList.add("open");if(close)close.onclick=()=>sidebar.classList.remove("open");document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>sidebar.classList.remove("open"));
