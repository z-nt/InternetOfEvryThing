// Animation  for IotItems
var circ = document.querySelectorAll(".IotItems");
var newq;
let h, w, nh, nw, s;

function newPosition() {
    h = window.innerHeight - 50;
    w = window.innerWidth - 50;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
    s = Math.floor(Math.random() * 3000) + 1000;
    return [nh, nw, s];
}

circ.forEach(function circ(myclass) {
    var newq = newPosition();
    $(myclass).animate(
        {
            top: newq[0],
            left: newq[1],
        },
        newq[2],
        function () {
            circ(myclass);
        }
    );
});
///// inputCheck for event and Change backGround
let circleButton = document.querySelectorAll(".circleButton");
let inputCheck = document.querySelectorAll(".inputCheck");
console.log(circleButton);
circleButton.forEach((circle) => {
    circle.addEventListener("click", changeCircle);
    function changeCircle() {
        inputCheck.forEach((inputs) => {
            circle.classList.add("changePosition");
        });
    }
});
