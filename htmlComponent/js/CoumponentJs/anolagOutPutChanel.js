//import element we Need for anolagOutPutChanel Event
//get productNavbar for check submenu
let prductNavbar = document.getElementById("products");
//get anolag outPut chanels class
let anologOutPutChanels = document.querySelectorAll(".AnolagOutputChanel");
//get anolagOutPutChenelsSection for show the result
let anolagOutPutChanelsSection = document.getElementById(
    "anolagOutPutChanelsSection"
);
//get buutonSave and back for remove section
let saveAnolagOutPutChanel = document.getElementById("saveAnolagOutPutChanel");
let removeAnolagOutPutChanel = document.getElementById(
    "removeAnolagOutPutChanel"
);
////chek prodductNavbar when display flex is tru
if ((prductNavbar.style.display = "flex")) {
    anologOutPutChanels.forEach((item) => {
        item.addEventListener("click", () => {
            anolagOutPutChanelsSection.style.display = "flex";
        });
    });
}
///add to event buttons remove the section
saveAnolagOutPutChanel.addEventListener("click", removeAnolagOutPutSection);

removeAnolagOutPutChanel.addEventListener("click", removeAnolagOutPutSection);

///createFunction for remove the anolag Section
function removeAnolagOutPutSection() {
    anolagOutPutChanelsSection.remove();
}
