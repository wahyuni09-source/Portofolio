const DATA_KEY="aswPortfolioDataV2";
const defaults={
name:"Anggi Septi Wahyuni",
roles:"Excel • Data Analysis • Looker Studio • Graphic Design",
intro:"Saya membantu pemilik bisnis mengolah data menjadi insight yang jelas, rapi, dan menarik secara visual.",
whatsapp:"6280000000000",
email:"emailanda@example.com",
excelTitle:"Sales & Inventory Dashboard",
lookerTitle:"Business Performance Dashboard",
designTitle:"Branding & Promotional Design",
about:"Saya membangun portfolio melalui studi kasus usaha sendiri agar setiap project dapat dijelaskan dari masalah, proses, sampai hasilnya."
};
let data={...defaults,...JSON.parse(localStorage.getItem(DATA_KEY)||"{}")};

function apply(){
 document.querySelector("#name").innerHTML=(data.name||defaults.name).replace(" ","<br>");
 document.querySelector("#roles").textContent=data.roles;
 document.querySelector("#intro").textContent=data.intro;
 document.querySelector("#wa").href="https://wa.me/"+data.whatsapp;
 document.querySelector("#email").href="mailto:"+data.email;
 document.querySelector("#excelTitle").textContent=data.excelTitle;
 document.querySelector("#lookerTitle").textContent=data.lookerTitle;
 document.querySelector("#designTitle").textContent=data.designTitle;
 document.querySelector("#aboutText").textContent=data.about;
 document.querySelector("#fName").value=data.name;
 document.querySelector("#fRoles").value=data.roles;
 document.querySelector("#fIntro").value=data.intro;
 document.querySelector("#fWa").value=data.whatsapp;
 document.querySelector("#fEmail").value=data.email;
 document.querySelector("#fExcel").value=data.excelTitle;
 document.querySelector("#fLooker").value=data.lookerTitle;
 document.querySelector("#fDesign").value=data.designTitle;
 document.querySelector("#fAbout").value=data.about;
}
apply();

const editor=document.body;
document.querySelector("#editorBtn").onclick=()=>editor.classList.add("editor-open");
document.querySelector("#closeEditor").onclick=()=>editor.classList.remove("editor-open");
document.querySelector("#save").onclick=()=>{
 data={
  name:fName.value,roles:fRoles.value,intro:fIntro.value,whatsapp:fWa.value,email:fEmail.value,
  excelTitle:fExcel.value,lookerTitle:fLooker.value,designTitle:fDesign.value,about:fAbout.value
 };
 localStorage.setItem(DATA_KEY,JSON.stringify(data));apply();toast("Perubahan tersimpan di browser.");
};
document.querySelector("#reset").onclick=()=>{localStorage.removeItem(DATA_KEY);data={...defaults};apply();toast("Kembali ke isi awal.");};

function toast(msg){const t=document.querySelector("#toast");t.textContent=msg;t.classList.add("show-toast");setTimeout(()=>t.classList.remove("show-toast"),2200)}

// Download a self-contained HTML copy with current text values.
document.querySelector("#download").onclick=()=>{
 const clone=document.documentElement.cloneNode(true);
 clone.querySelector("#editor")?.remove();
 clone.querySelector("#editorBtn")?.remove();
 clone.querySelector("#toast")?.remove();
 clone.querySelectorAll("script").forEach(s=>s.remove());
 const cssText=document.querySelector("style").textContent;
 const scriptText=`const DATA=${JSON.stringify(data)};`;
 const style=document.createElement("style");style.textContent=cssText;clone.querySelector("head").appendChild(style);
 const script=document.createElement("script");script.textContent=scriptText;clone.querySelector("body").appendChild(script);
 const blob=new Blob(["<!doctype html>\\n"+clone.outerHTML],{type:"text/html"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="ASW-Portfolio-Updated.html";a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),1000);
 toast("File website berhasil dibuat.");
};

// Mobile menu
const sidebar=document.querySelector("#sidebar");
document.querySelector("#open").onclick=()=>sidebar.classList.add("open");
document.querySelector("#close").onclick=()=>sidebar.classList.remove("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>sidebar.classList.remove("open"));
