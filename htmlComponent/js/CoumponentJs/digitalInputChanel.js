//import element we Need for DigitalInputChanel Event
//get productNavbar for check submenu
let prductNavbar = document.getElementById("products");
//get digitalInput chanels class
let digitalInputChanels = document.querySelectorAll(".DigitalInputChanel");
//get digitalInputChenelsSection for show the result
let DigitalInputChanelsSection = document.getElementById(
    "DigitalInputChanelsSection"
);
//get buutonSave and back for remove section
let saveDigitalInputChanel = document.getElementById("saveDigitalInputChanel");
let removeDigitalInputChanel = document.getElementById(
    "removeDigitalInputChanel"
);
////chek prodductNavbar when display flex is tru
if ((prductNavbar.style.display = "flex")) {
    digitalInputChanels.forEach((item) => {
        item.addEventListener("click", () => {
            DigitalInputChanelsSection.style.display = "flex";
        });
    });
}
///add to event buttons remove the section
saveDigitalInputChanel.addEventListener("click", removeDigitalinputSection);

removeDigitalInputChanel.addEventListener("click", removeDigitalinputSection);

///createFunction for remove the Digital Section
function removeDigitalinputSection() {
    DigitalInputChanelsSection.remove();
}
