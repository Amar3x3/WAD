const sidebar = document.getElementById("side");
const hamclose = document.querySelector(".hamclose");

function sidebarIN(){
    sidebar.classList.add("side-open");
    sidebar.classList.remove("side-close");
    console.log("nav-open")
}

hamclose.addEventListener("click", ()=>{
    sidebar.classList.add("side-close");
    sidebar.classList.remove("side-open");
    console.log("nav-close");
})