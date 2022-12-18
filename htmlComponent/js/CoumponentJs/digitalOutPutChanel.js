//import element we Need for DigitalOutPutChanel Event
//get productNavbar for check submenu
let prductNavbar = document.getElementById("products");
//get digital outPut chanels class
let DigitalOutPutChanel = document.querySelectorAll(".DigitalOutPutChanel");
//get digitalOutPutChenelsSection for show the result
let DigitalOutPutChanelsSection = document.getElementById(
    "DigitalOutPutChanelsSection"
);
//get buutonSave and back for remove section
let saveDigitalOutPutChanel = document.getElementById(
    "saveDigitalOutPutChanel"
);
let removeDigitalOutPutChanel = document.getElementById(
    "removeDigitalOutPutChanel"
);
////chek prodductNavbar when display flex is tru
if ((prductNavbar.style.display = "flex")) {
    DigitalOutPutChanel.forEach((item) => {
        item.addEventListener("click", () => {
            DigitalOutPutChanelsSection.style.display = "flex";
        });
    });
}
///add to event buttons remove the section
//saveButton
saveDigitalOutPutChanel.addEventListener("click", removeDigitaloutPutSection);
///removeButton
removeDigitalOutPutChanel.addEventListener("click", removeDigitaloutPutSection);

///createFunction for remove the Digital Section
function removeDigitaloutPutSection() {
    DigitalOutPutChanelsSection.remove();
}
