const addNewPageButton = document.getElementById("addNewPages");
const menuNewPage = document.getElementById("AddNewPage");

addNewPageButton.addEventListener("click", createForm);

//// function in function
function createForm() {
    console.log("createForm");
    let newPage = document.createElement("li");
    let getNamePage = document.createElement("input");
    getNamePage.classList.add("newInputPage");
    let inputSubmited = document.createElement("button");
    inputSubmited.innerText = "Ok";
    inputSubmited.classList.add("inputSubmit");
    menuNewPage.appendChild(newPage);
    menuNewPage.appendChild(getNamePage);
    menuNewPage.appendChild(inputSubmited);
    // ///event for submited
    inputSubmited.addEventListener("click", inputSubmit);
    ///function for inputSubmited
    function inputSubmit() {
        console.log("inputSubmited");
        newPage.innerHTML = `${getNamePage.value}`;
        newPage.setAttribute("id", `${getNamePage.value}`);
        //createBox for show the result
        let newPageDevice = document.createElement("div");
        newPageDevice.classList.add("newPageDiv");
        //create Menu for show the other Device
        let menuPageName = document.createElement("ul");
        menuPageName.setAttribute("id", "menuPageId");
        menuPageName.classList.add("menuPageName");
        newPageDevice.appendChild(menuPageName);
        ///append these to the basic section
        wigetHolder.appendChild(newPageDevice);

        ///remove the element
        inputSubmited.remove();
        getNamePage.remove();
    }
    ////addEvent for newpageELement li
    newPage.addEventListener("click", createNewPage);
    function createNewPage() {
        console.log("CreateNewPge");
        ////create Button for chek the pages
        let menePageItems = document.createElement("button");
        menePageItems.setAttribute("class", "btnNewPage");
        menePageItems.classList.add("menePageItems");
        //  console.log(menePageItems);
        menePageItems.innerText = ` ${getNamePage.value}`;
        document.getElementById("menuPageId").appendChild(menePageItems);
    }
    if (createNewPage) {
        const btnNewPage = document.querySelectorAll("btnNewPage");
        console.log("ssss");

        btnNewPage.forEach((pages) => {
            pages.addEventListener("click", () => {
                console.log("salam");
            });
        });
    } else {
        console.log("ssss");
    }
}
