////get Element for show the result of device Anolag and digital input or outPut
//get newDevice For Show the comboBox in events
const newDevice = document.getElementById("importDevice");
//get comboBox Element
const comboBox = document.getElementById("comboBox");
//  get buttons for show the anolag and digital section in comboBox
const btnShowAiSections = document.querySelectorAll(".btnShowAnolagResult");
//get list as anolag and digital input or outPut
const anolagSection = document.querySelectorAll(".IO_AD");
/// get saveButtton for comboBox
const addButtonDevice = document.getElementById("SaveDevice");
//get removeButton for combobox
const removebuttonDevice = document.getElementById("RemoveDevice");

////set Event for newDevice
newDevice.addEventListener("click", getComboBox);
///set event For Buttin save and remove comboBox
addButtonDevice.addEventListener("click", removeComboBox);
removebuttonDevice.addEventListener("click", removeComboBox);
////function for Get ComboBox
function getComboBox() {
    comboBox.style.display = "flex";
    ////check the Function For Show Result
    if (getComboBox) {
        return getbtnShowAiSections();
    } else {
        return false;
    }
}
////list as buttons for show the anolag and digital section in comboBox
///  get buttons and set Event
function getbtnShowAiSections() {
    //// getButtons and ForEch for show the anolag Section with id and Name
    btnShowAiSections.forEach((button) => {
        ///set buttons Event
        button.addEventListener("click", () => {
            ///get name of button Element
            let getAttributeButton = document.getElementById(button.id).name;
            //  console.log(getAttributeButton);
            //for Loop for anolag Section
            for (var i = 0; i < anolagSection.length; i++) {
                //get anolag Section id
                let anolagSectionsid = anolagSection[i].id;
                //check anolag id and buutons name
                if (anolagSectionsid === getAttributeButton) {
                    //  console.log("true");
                    /// show the anolag section
                    anolagSection[i].style.display = "flex";
                } else {
                    // console.log("false");
                    ///hide the others anolag section
                    anolagSection[i].style.display = "none";
                }
            }
        });
    });
}

/////function remove comboBox
function removeComboBox() {
    comboBox.remove();
}
