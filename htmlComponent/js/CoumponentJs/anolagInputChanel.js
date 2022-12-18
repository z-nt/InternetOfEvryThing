//import element we Need for anolagInputChanel Event
//get productNavbar for check submenu
let prductNavbar = document.getElementById("products");
//get anolag input chanels class
let anologinputChanels = document.querySelectorAll(".AnolagInputChanel");
//get anolag inputChenelsSection for show the result
let anoloagInputchanelSection = document.getElementById(
    "anolagInputChanelsSection"
);
//get buutonSave and back for remove section
let saveAnolagInputChanel = document.getElementById("saveAnolagInputChanel");
let removeAnolaginputChanel = document.getElementById(
    "removeAnolaginputChanel"
);
////chek prodductNavbar when display flex is tru
if ((prductNavbar.style.display = "flex")) {
    anologinputChanels.forEach((item) => {
        item.addEventListener("click", () => {
            anoloagInputchanelSection.style.display = "flex";
        });
    });
}
///add to event buttons remove the section
saveAnolagInputChanel.addEventListener("click", removeAnolaginputSection);

removeAnolaginputChanel.addEventListener("click", removeAnolaginputSection);

///createFunction for remove the anolag Section
function removeAnolaginputSection() {
    anoloagInputchanelSection.remove();
}
