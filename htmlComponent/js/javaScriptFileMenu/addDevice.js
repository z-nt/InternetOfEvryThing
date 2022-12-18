///import javaScript Code and Component
import "./ElementClass.js";
import "../CoumponentJs/comboBox.js";
import "../CoumponentJs/anolagInputChanel.js";
import "../CoumponentJs/anolagOutPutChanel.js";
import "../CoumponentJs/digitalInputChanel.js";
import "../CoumponentJs/digitalOutPutChanel.js";
import "./AddNewPage.js";

//// get Element we Need For Add a Device
//Device Element li
const deviceElement = document.getElementById("addDevice");
// DeviceForm Get name and SerialNumber
const getSerialNumber = document.getElementById("informataionDevice");
//ulMenu For set Device in subMenu
const prductNavbar = document.getElementById("products");
prductNavbar.style.display = "none";
//input getName
const nameDeviceinput = document.getElementById("DeviceName");
//input getSerialNumber
const numberAddressInput = document.getElementById("NumberAddress");
/// li tag for set element name on it
const newDevice = document.getElementById("importDevice");
///button for saveInformation of Device
const buttonSaveDevice = document.getElementById("addDEI");
///createElement For Devices

////// show the form of information Device
deviceElement.addEventListener("click", filterAddNewDevices);
///////function new Device
function filterAddNewDevices() {
    /// show form of informationDevices
    getSerialNumber.style.display = "block";
}
///get informationDevice
buttonSaveDevice.addEventListener("click", getInformationDevices);
/////function saveInformation Devices
function getInformationDevices(name, serialNumber) {
    ///////get name and SerialNumber as input Value
    name = nameDeviceinput.value;
    // console.log(name);
    serialNumber = numberAddressInput.value;
    // console.log(serialNumber);
    //////check name and SerialNumber
    if (
        name == null ||
        (name == "" && serialNumber == null) ||
        serialNumber == ""
    ) {
        ///  console.log("False");
        alert("please Fit these Fields");
        return false;
    } else {
        //  console.log("true");
        newDevice.innerHTML = `${"RTU" + " " + name}`;
        newDevice.setAttribute("id", `${name}`);
        prductNavbar.style.display = "block";
        getSerialNumber.remove();
    }
}
