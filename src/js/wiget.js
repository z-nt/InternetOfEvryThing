////get position of mouse
let wigetHolder = document.getElementById("wigetHolder")
    const itemsElement = document.querySelectorAll(".draggable");
        itemsElement.forEach( item =>{
            item.addEventListener("drag",(ev)=>{
                ev.dataTransfer.setData("text", ev.target.id);
                  //  ev = posX;
                  //  ev = posY;
                })
                    item.addEventListener("dragover",(ev)=>{
                        ev.preventDefault();
                    })
                item.addEventListener("dragend" , (ev) =>{
                    ev.preventDefault();
                  ev.dataTransfer.getData("text");
                document.getElementById("wigetHolder").append(document.getElementById(ev.target.id));
             //   ev.clientX = posX;
             //   ev.clientY = posY;
                })
                if(item){
                        item.style.resize="both";
                }
        } )    

///element of java script 

///ChipElement

var chipEl = document.getElementById("item1");
var chipWi = document.getElementById("wiget5");

chipEl.addEventListener("drag",()=>{
    chipEl.appendChild(chipWi);
    chipWi.style.display="flex";
    chipEl.style.maxWidth="500px";
    chipEl.style.maxHeight="500px";
    chipEl.style.minWidth="200px";
    chipEl.style.minHeight="200px";
    
})

//// coumpElement
var chouEl = document.getElementById("item2");
var coupWi = document.getElementById("wiget2");
chouEl.addEventListener("drag",()=>{
    chouEl.appendChild(coupWi);
    coupWi.style.display="flex";
    chouEl.style.minWidth="200px";
    chouEl.style.minHeight="200px";    
})



///kitElement 
var mobilEl = document.getElementById("item3");
var mobilpWi = document.getElementById("wigetMobile");
mobilEl.addEventListener("drag",()=>{
    mobilEl.appendChild(mobilpWi);
    mobilpWi.style.display="flex";
    mobilEl.style.minWidth="200px";
    mobilEl.style.minHeight="200px";    
    mobilEl.style.maxWidth="300px";
    mobilEl.style.maxHeight="200px";    
})

//helper wiget

var helperEl = document.getElementById("item4");
var helperWi = document.getElementById("helperWiget");
helperEl.addEventListener("drag",()=>{
    helperEl.appendChild(helperWi);
    helperWi.style.display="flex";
    helperEl.style.minWidth="200px";
    helperEl.style.minHeight="350px";    
    helperEl.style.maxWidth="500px";
    helperEl.style.maxHeight="500px";    
})

/////wiget 6 
var kitEL = document.getElementById("item5");
var kitWi = document.getElementById("wiget3");
kitEL.addEventListener("drag",()=>{
    kitEL.appendChild(kitWi);
    kitWi.style.display="flex";
    kitEL.style.minWidth="200px";
    kitEL.style.minHeight="200px";    
    kitEL.style.maxWidth="300px";
    kitEL.style.maxHeight="300px";    
})
