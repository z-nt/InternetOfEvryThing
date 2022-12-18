/// create 7 wiget with loop
let wigetNameList = [
    "Lump",
    "Number",
    "TankWaterLevel",
    "anoluagInput",
    "Chart",
    "Timer",
];
const services = document.getElementById("service");
for (var i = 0; i < wigetNameList.length; i++) {
    var wigetItems = document.createElement("div");
    wigetItems.innerHTML = `
        <li draggable="true" class="draggable" draggable="true" id="${wigetNameList[i]}" >
            ${wigetNameList[i]}
        </li>
        `;
    services.appendChild(wigetItems);
}
/// Drag and Drop Element
let itemsElement = document.querySelectorAll(".draggable");
let wigetHolder = document.getElementById("wigetHolder");
/// get element
itemsElement.forEach((item) => {
    item.addEventListener("drag", (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    });
    item.addEventListener("dragover", (ev) => {
        ev.preventDefault();
    });
    ///drag element

    item.addEventListener("dragend", (ev) => {
        ev.preventDefault();
        ev.dataTransfer.getData("text");
        document
            .getElementById("wigetHolder")
            .append(document.getElementById(ev.target.id));
        /// import inside the wigets Element
    });

    //resize element
    if (item) {
        item.style.resize = "both";
    }
});

//// lumpWiget Event and Styles
//create Lump Element
let wigetLump = document.getElementById("Lump");
wigetLump.addEventListener("dragend", () => {
    let lump = document.createElement("div");
    lump.innerHTML = `<img class=" imageLump"  src="../../src/image/Lumpimng_preview_rev_1.png"/>`;
    lump.classList.add("lumpElement");
    /// create bitton for on and off
    //create button on
    let btnOn = document.createElement("button");
    btnOn.innerHTML = "On";
    btnOn.classList.add("LumpBTN");
    // button event
    btnOn.addEventListener("click", () => {
        wigetLump.style.backgroundColor = "#FFE61B";
        lump.style.transform = "scale(1.4)";
        lump.style.animation = "";
        lump.style.transition = "all .3s ease";
    });
    /// create button offf
    let btnOFF = document.createElement("button");
    btnOFF.innerHTML = "OFF";
    btnOFF.classList.add("LumpBTN");
    ///button event
    btnOFF.addEventListener("click", () => {
        wigetLump.style.backgroundColor = "#1A374D";
        lump.style.transform = "scale(1)";
        lump.style.transition = "all .3s ease";
    });
    //// append Element to the lump div parent
    wigetLump.appendChild(lump);
    wigetLump.appendChild(btnOn);
    wigetLump.appendChild(btnOFF);
    ///set defaulte background for lump wiget
    wigetLump.style.transition = "background .3s ease-in-out ";
    wigetLump.style.backgroundColor = "#1A374D";
    //// This is End for lumpWiget Event and Styles
});

/// this is Start Of Number Wiget Element EVent and Style
let wigetNumber = document.getElementById("Number");
wigetNumber.addEventListener("dragend", () => {
    let canvasElement = document.createElement("canvas");
    canvasElement.setAttribute("id", "canvas");
    wigetNumber.appendChild(canvasElement);
    canvasElement.style.maxWidth = "400px";
    canvasElement.style.maxHeight = "300px";

    $(wigetNumber).ready(function () {
        var canvas = $("#canvas")[0];
        var ctx = canvas.getContext("2d");
        var w = (canvas.width = window.innerWidth);
        var h = (canvas.height = window.innerHeight);
        var progressCircle = {
            x: w / 2,
            y: h / 2,
            diameter: 160,
            stroke: 16,
            color: "",
            start: Math.PI * 1.5,
            end: Math.PI * 1.5,
            percentage: 0,
            calcPercent: function (percentage) {
                // Set the max to 100
                if (percentage > 100) {
                    percentage = 100;
                }
                percentage = percentage / 100;
                this.percentage = Math.round(percentage * 100);
                // Set where the arcs should end
                this.end = this.start + Math.PI * 2 * percentage;
                // Gradually shift color from red (0deg) to green (120deg)
                this.color = "hsl(" + this.percentage / 0.8 + ", 100%, 50%)";
            },
            setColor: function () {
                /*if (this.percentage <= 25) {
                                this.color = 'hsl(000, 100%, 50%)';
                            }
                            else if (this.percentage > 25 && this.percentage <= 50) {
                                this.color = 'hsl(040, 100%, 50%)'; 
                            } 
                            else if (this.percentage > 50 && this.percentage <= 75) {
                                this.color = 'hsl(080, 100%, 50%)';
                            } 
                            else if (this.percentage > 75 && this.percentage < 100) {
                                this.color = 'hsl(120, 100%, 50%)';
                            }*/

                // Set color to blue when 100%
                if (this.percentage == 100) {
                    this.color = "#1E90FF";
                }
            },
            draw: function () {
                ctx.lineWidth = this.stroke;
                ctx.strokeStyle = this.color;
                ctx.setLineDash([]);
                ctx.globalAlpha = 0.2;
                // Inner solid fill of circle
                ctx.beginPath();
                ctx.arc(
                    this.x,
                    this.y,
                    this.diameter,
                    this.start,
                    this.end,
                    false
                );
                ctx.stroke();
                ctx.globalAlpha = 1;
                ctx.setLineDash([1, 4.1]);
                ctx.lineWidth = this.stroke;
                // Inner dashed fill of circle
                ctx.beginPath();
                ctx.arc(
                    this.x,
                    this.y,
                    this.diameter,
                    this.start,
                    this.end,
                    false
                );
                ctx.stroke();

                ctx.lineWidth = 1;
                ctx.setLineDash([]);

                // Inner solid stroke of circle
                ctx.beginPath();
                ctx.arc(
                    this.x,
                    this.y,
                    this.diameter - this.stroke / 2,
                    0,
                    Math.PI * 2,
                    false
                );
                ctx.stroke();

                // Outer solid stroke of circle
                ctx.beginPath();
                ctx.arc(
                    this.x,
                    this.y,
                    this.diameter + this.stroke / 2,
                    0,
                    Math.PI * 2,
                    false
                );
                ctx.stroke();

                ctx.font = "70 50px Lato";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = this.color;

                // Outer stroke of percentage text
                ctx.strokeText(this.percentage + "%", this.x, this.y);

                // Inner fill of percentage text
                ctx.globalAlpha = 0.2;
                ctx.fillText(this.percentage + "%", this.x, this.y);

                range = 10;
                speed = 0.02;
                angle += speed;

                // Outer glow
                ctx.shadowBlur = 20 + Math.sin(angle) * range;
                ctx.shadowColor = this.color;
            },
        };

        var angle = 0;
        var range = 10;
        var speed = 0.03;
        var t = 0;
        var duration = 12; // in seconds

        function loop() {
            window.requestAnimationFrame(loop);
            ctx.clearRect(0, 0, w, h);

            t += 100 / (duration * 60);
            progressCircle.calcPercent(t);
            progressCircle.setColor();
            progressCircle.draw();
        }

        loop();

        wigetNumber.addEventListener("resize", resize);

        function resize() {
            w = canvas.width = wigetNumber.innerWidth;
            h = canvas.height = wigetNumber.innerHeight;
        }
    });
});

/// /// this is End Of Number Wiget Element EVent and Style
let wigetInput = document.getElementById("anoluagInput");
wigetInput.addEventListener("dragend", () => {
    wigetInput.innerHTML = `
                <div id="wrapper">	
                        <div id="termometer">
                        <div id="temperature" style="height:0" data-value="0°C"></div>
                        <div id="graduations"></div>
                    </div>
            
                    <div id="playground">		
                        <div id="range">
                            <input id="minTemp" type="text" value="-20">
                            <input type="range" min="-20" max="50" value="42">
                            <input id="maxTemp" type="text" value="50">
                        </div>
                        <p id="unit">Celcius C°</p>
                    </div>
            
                    <p id="info">Click on the values to change them!</p>
                </div>
                        `;

    const units = {
        Celcius: "°C",
        Fahrenheit: "°F",
    };

    const config = {
        minTemp: -20,
        maxTemp: 50,
        unit: "Celcius",
    };

    // Change min and max temperature values

    const tempValueInputs = document.querySelectorAll("input[type='text']");

    tempValueInputs.forEach((input) => {
        input.addEventListener("change", (event) => {
            const newValue = event.target.value;

            if (isNaN(newValue)) {
                return (input.value = config[input.id]);
            } else {
                config[input.id] = input.value;
                range[input.id.slice(0, 3)] = config[input.id]; // Update range
                return setTemperature(); // Update temperature
            }
        });
    });

    // Switch unit of temperature

    const unitP = document.getElementById("unit");

    unitP.addEventListener("click", () => {
        config.unit = config.unit === "Celcius" ? "Fahrenheit" : "Celcius";
        unitP.innerHTML = config.unit + " " + units[config.unit];
        return setTemperature();
    });

    // Change temperature

    const range = document.querySelector("input[type='range']");
    const temperature = document.getElementById("temperature");

    function setTemperature() {
        temperature.style.height =
            ((range.value - config.minTemp) /
                (config.maxTemp - config.minTemp)) *
                100 +
            "%";
        temperature.dataset.value = range.value + units[config.unit];
    }

    range.addEventListener("input", setTemperature);
    setTimeout(setTemperature, 1000);
});

//// this is Thermometer Wiget Style

///This is TankWaterLevel
let tankWaterLevel = document.getElementById("TankWaterLevel");
tankWaterLevel.addEventListener("dragend", () => {
    tankWaterLevel.style.minWidth = "420px";
    tankWaterLevel.style.minHeight = "320px";
    tankWaterLevel.innerHTML = `
            <fieldset >
            <legend>WaterLevel</legend>
            <label orient='270deg' type='range' for="band" before="-5" after="5">0</label>
            <input orient='270deg' type='range' min='0' value='2' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='2' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='2' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='4' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='3' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='3' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='6' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='7' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='7' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='8' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='8' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='6' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='5' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='6' max='9' step='1' />
            <input orient='270deg' type='range' min='0' value='6' max='9' step='1' />
            <label orient='90deg' type='range' for="band" before="5" after="-5">0</label>
          </fieldset>
            `;
});
///// this is end Of Water

// /// this is start for Chart ghraf
let wigetChart = document.getElementById("Chart");
wigetChart.addEventListener("dragend", () => {
    wigetChart.innerHTML = `
            <svg class="graph">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <g transform="translate(30,0)">
                        <g class="x axis" transform="translate(0,925)">
                            <g style="opacity: 1;" transform="translate(0,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle"> 1</text></g><g style="opacity: 1;" transform="translate(61.333333333333336,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle"> 3</text></g><g style="opacity: 1;" transform="translate(122.66666666666667,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle"> 5</text></g><g style="opacity: 1;" transform="translate(184,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle"> 7</text></g><g style="opacity: 1;" transform="translate(245.33333333333334,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle"> 9</text></g><g style="opacity: 1;" transform="translate(306.66666666666663,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">11</text></g><g style="opacity: 1;" transform="translate(368,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">13</text></g><g style="opacity: 1;" transform="translate(429.3333333333333,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">15</text></g><g style="opacity: 1;" transform="translate(490.6666666666667,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">17</text></g><g style="opacity: 1;" transform="translate(552,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">19</text></g><g style="opacity: 1;" transform="translate(613.3333333333333,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">21</text></g><g style="opacity: 1;" transform="translate(674.6666666666667,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">23</text></g><g style="opacity: 1;" transform="translate(736,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">25</text></g><g style="opacity: 1;" transform="translate(797.3333333333334,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">27</text></g><g style="opacity: 1;" transform="translate(858.6666666666666,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">29</text></g><g style="opacity: 1;" transform="translate(920,0)"><line class="tick" y2="6" x2="0"></line><text y="9" x="0" dy=".71em" text-anchor="middle">31</text></g><path class="domain" d="M0,6V0H920V6"></path></g><g class="y axis" transform="translate(0, 0)"><g style="opacity: 1;" transform="translate(0,821.6811859476935)"><line class="tick" x2="-6" y2="0"></line><text x="-9" y="0" dy=".32em" text-anchor="end">6</text></g><g style="opacity: 1;" transform="translate(0,582.576562528558)"><line class="tick" x2="-6" y2="0"></line><text x="-9" y="0" dy=".32em" text-anchor="end">7</text></g><g style="opacity: 1;" transform="translate(0,343.4719391094225)"><line class="tick" x2="-6" y2="0"></line><text x="-9" y="0" dy=".32em" text-anchor="end">8</text></g><g style="opacity: 1;" transform="translate(0,104.36731569028704)"><line class="tick" x2="-6" y2="0"></line><text x="-9" y="0" dy=".32em" text-anchor="end">9</text></g><path class="domain" d="M-6,0H0V900H-6"></path>
                        </g>
                        <path class="line" style="stroke: #0072c6;" d="M-0,872.1457551394693C4.6000000000000005,868.0364319269877,26.066666666666666,797.9386846177426,30.666666666666668,787.278743840129S56.733333333333334,728.3835750661772,61.333333333333336,730.0132114379539S87.4,800.0933886879487,92,809.0072287971533S118.06666666666668,842.0399550538006,122.66666666666667,848.8644128925141S148.73333333333332,903.8693836786841,153.33333333333331,900S179.4,804.7627148345915,184,797.2726305115585S210.06666666666666,805.2258784939872,214.66666666666666,800.1322090262267S240.73333333333335,733.6161970338039,245.33333333333334,729.357037608086S271.4,739.532928153508,276,743.3434166833206S302.0666666666666,770.8434939974969,306.66666666666663,780.16355133892S332.73333333333335,868.4036850606145,337.33333333333337,867.610847902295S363.4,784.1589003159586,368,769.592389227992S394.06666666666666,684.3118741070884,398.6666666666667,673.3907000627415S424.7333333333333,633.1596368127348,429.3333333333333,623.9767353033673S455.4,560.0202150727658,460,550.9520132711746S486.06666666666666,503.0663994133497,490.6666666666667,503.06737794881735S516.7333333333333,552.158932327768,521.3333333333334,550.9650604107431S547.4,493.7675390530424,552,487.1490857218206S578.0666666666666,466.1838245385211,582.6666666666666,462.7190159944524S608.7333333333332,445.36620075506227,613.3333333333333,440.95163846757083S639.4000000000001,405.0130857654193,644.0000000000001,403.85818549456644S670.0666666666667,430.18429463403777,674.6666666666667,425.55296818953184S700.7333333333333,349.54268104463677,705.3333333333334,342.1071662344867S731.4,336.02210198471766,736,326.4127707208655S762.0666666666667,213.95556450442257,766.6666666666667,213.98274938312397S792.7333333333333,313.5469356579391,797.3333333333334,326.77523577021793S823.4,388.78075552163386,828,390.36008421350857S854.0666666666666,351.8867510511966,858.6666666666666,347.83295166188077S884.7333333333333,340.20771450620623,889.3333333333334,336.3094256892973S915.4,300.0866334286284,920,295.85576743642764S946.0666666666667,289.97796074285225,950.6666666666667,279.8978791266204S976.7333333333333,161.69844733926686,981.3333333333334,161.4546792200042S1007.4000000000001,271.6895591675776,1012.0000000000001,276.6476375364508S1038.0666666666668,235.6111964084887,1042.6666666666667,227.56239080497983S1068.7333333333336,168.77230061740897,1073.3333333333335,169.33022948966516S1099.4,229.35498269851132,1104,235.00144243506247S1130.0666666666668,243.8367399381625,1134.6666666666667,244.6163593103464S1160.7333333333333,247.0350047114789,1165.3333333333333,245.3963673975146S1191.4,221.92638467412087,1196,222.76786179082364S1222.0666666666666,251.3644285511407,1226.6666666666665,256.61606228688447S1252.7333333333331,298.59417940077356,1257.3333333333333,292.7896449340725S1283.4000000000003,194.32114945786407,1288.0000000000002,179.22226939753637S1314.0666666666668,99.77649519402462,1318.6666666666667,91.47124412970243S1344.7333333333336,75.34593184963478,1349.3333333333335,68.4855885399071S1375.4,4.05988687932836,1380,0S1406.0666666666668,10.077532787466339,1410.6666666666667,14.353763482196086S1436.7333333333333,45.56337614432641,1441.3333333333333,57.016409263063Q1444.3999999999999,64.6517646755542,1472,167.06087173201854"></path>
                        <path class="area" style="fill: rgba(0, 114, 198, 0.2980392156862745);" d="M-0,872.1457551394693C4.6000000000000005,868.0364319269877,26.066666666666666,797.9386846177426,30.666666666666668,787.278743840129S56.733333333333334,728.3835750661772,61.333333333333336,730.0132114379539S87.4,800.0933886879487,92,809.0072287971533S118.06666666666668,842.0399550538006,122.66666666666667,848.8644128940141S148.73333333333332,903.8693836786841,153.33333333333331,900S179.4,804.7627148345915,184,797.2726305115585S210.06666666666666,805.2258784939872,214.66666666666666,800.1322090262267S240.73333333333335,733.6161970338039,245.33333333333334,729.357037608086S271.4,739.532928153508,276,743.3434166833206S302.0666666666666,770.8434939974969,306.66666666666663,780.16355133892S332.73333333333335,868.4036850606145,337.33333333333337,867.610847902295S363.4,784.1589003159586,368,769.592389227992S394.06666666666666,684.3118741070884,398.6666666666667,673.3907000627415S424.7333333333333,633.1596368127348,429.3333333333333,623.9767353033673S455.4,560.0202150727658,460,550.9520132711746S486.06666666666666,503.0663994133497,490.6666666666667,503.06737794881735S516.7333333333333,552.158932327768,521.3333333333334,550.9650604107431S547.4,493.7675390530424,552,487.1490857218206S578.0666666666666,466.1838245385211,582.6666666666666,462.7190159944524S608.7333333333332,445.36620075506227,613.3333333333333,440.95163846757083S639.4000000000001,405.0130857654193,644.0000000000001,403.85818549456644S670.0666666666667,430.18429463403777,674.6666666666667,425.55296818953184S700.7333333333333,349.54268104463677,705.3333333333334,342.1071662344867S731.4,336.02210198471766,736,326.4127707208655S762.0666666666667,213.95556450442257,766.6666666666667,213.98274938312397S792.7333333333333,313.5469356579391,797.3333333333334,326.77523577021793S823.4,388.78075552163386,828,390.36008421350857S854.0666666666666,351.8867510511966,858.6666666666666,347.83295166188077S884.7333333333333,340.20771450620623,889.3333333333334,336.3094256892973S915.4,300.0866334286284,920,295.85576743642764S946.0666666666667,289.97796074285225,950.6666666666667,279.8978791266204S976.7333333333333,161.69844733926686,981.3333333333334,161.4546792200042S1007.4000000000001,271.6895591675776,1012.0000000000001,276.6476375364508S1038.0666666666668,235.6111964084887,1042.6666666666667,227.56239080497983S1068.7333333333336,168.77230061740897,1073.3333333333335,169.33022948966516S1099.4,229.35498269851132,1104,235.00144243506247S1130.0666666666668,243.8367399381625,1134.6666666666667,244.6163593103464S1160.7333333333333,247.0350047114789,1165.3333333333333,245.3963673975146S1191.4,221.92638467412087,1196,222.76786179082364S1222.0666666666666,251.3644285511407,1226.6666666666665,256.61606228688447S1252.7333333333331,298.59417940077356,1257.3333333333333,292.7896449340725S1283.4000000000003,194.32114945786407,1288.0000000000002,179.22226939753637S1314.0666666666668,99.77649519402462,1318.6666666666667,91.47124412970243S1344.7333333333336,75.34593184963478,1349.3333333333335,68.4855885399071S1375.4,4.05988687932836,1380,0S1406.0666666666668,10.077532787466339,1410.6666666666667,14.353763482196086S1436.7333333333333,45.56337614432641,1441.3333333333333,57.016409263063Q1444.3999999999999,64.6517646755542,1472,167.06087173201854L1472,925Q1444.3999999999999,925,1441.3333333333333,925C1436.7333333333333,925,1415.2666666666667,925,1410.6666666666667,925S1384.6,925,1380,925S1353.9333333333334,925,1349.3333333333335,925S1323.2666666666667,925,1318.6666666666667,925S1292.6000000000001,925,1288.0000000000002,925S1261.9333333333334,925,1257.3333333333333,925S1231.2666666666664,925,1226.6666666666665,925S1200.6,925,1196,925S1169.9333333333332,925,1165.3333333333333,925S1139.2666666666667,925,1134.6666666666667,925S1108.6,925,1104,925S1077.9333333333334,925,1073.3333333333335,925S1047.2666666666667,925,1042.6666666666667,925S1016.6000000000001,925,1012.0000000000001,925S985.9333333333334,925,981.3333333333334,925S955.2666666666668,925,925.6666666666667,925S924.6,925,920,925S893.9333333333334,925,889.3333333333334,925S863.2666666666667,925,858.6666666666666,925S832.6,925,828,925S801.9333333333334,925,797.3333333333334,925S771.2666666666668,925,766.6666666666667,925S740.6,925,736,925S709.9333333333334,925,705.3333333333334,925S679.2666666666668,925,674.6666666666667,925S648.6000000000001,925,644.0000000000001,925S617.9333333333333,925,613.3333333333333,925S587.2666666666667,925,582.6666666666666,925S556.6,925,552,925S525.9333333333334,925,521.3333333333334,925S495.2666666666667,925,490.6666666666667,925S464.6,925,460,925S433.93333333333334,925,429.3333333333333,925S403.2666666666667,925,398.6666666666667,925S372.6,925,368,925S341.9333333333334,925,337.33333333333337,925S311.26666666666665,925,306.66666666666663,925S280.6,925,276,925S249.93333333333334,925,245.33333333333334,925S219.26666666666665,925,214.66666666666666,925S188.6,925,184,925S157.9333333333333,925,153.33333333333331,925S127.26666666666667,925,122.66666666666667,925S96.6,925,92,925S65.93333333333334,925,61.333333333333336,925S35.266666666666666,925,30.666666666666668,925S4.6000000000000005,925,0,925Q-3.066666666666667,925,-0.666666666666668,925Z"></path>
                    </g>
                </svg>
            </svg>
            `;

    $(function () {
        "use strict";

        var resizeTracker;

        // Counteracts all transforms applied above an element.
        // Apply a translation to the element to have it remain at a local position
        var unscale = function (el) {
            var svg = el.ownerSVGElement.ownerSVGElement;
            var xf = el.scaleIndependentXForm;
            if (!xf) {
                // Keep a single transform matrix in the stack for fighting transformations
                xf = el.scaleIndependentXForm = svg.createSVGTransform();
                // Be sure to apply this transform after existing transforms (translate)
                el.transform.baseVal.appendItem(xf);
            }
            var m = svg.getTransformToElement(el.parentNode);
            m.e = m.f = 0; // Ignore (preserve) any translations done up to this point
            xf.setMatrix(m);
        };

        [].forEach.call($("text, .tick"), unscale);

        $(window).resize(function () {
            if (resizeTracker) clearTimeout(resizeTracker);
            resizeTracker = setTimeout(function () {
                [].forEach.call($("text, .tick"), unscale);
            }, 100);
        });
    });
});

/////this is end of it

//// check Air

let timerWiget = document.getElementById("Timer");
timerWiget.addEventListener("dragend", () => {
    timerWiget.innerHTML = `
<div class="boxMan">
<div class="timerDisplay">
    00 : 00 : 00 : 000
</div>
<div class="buttons">
    <button id="pauseTimer">Pause</button>
    <button id="startTimer">Start</button>
    <button id="resetTimer">Reset</button>
</div>
</div>      
      `;
    //// this is enddd
    let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    let timerRef = document.querySelector(".timerDisplay");
    let currentInterval = null;

    document.getElementById("startTimer").addEventListener("click", () => {
        if (currentInterval !== null) {
            clearInterval(currentInterval);
        }
        currentInterval = setInterval(displayTimer, 10);
    });

    document.getElementById("pauseTimer").addEventListener("click", () => {
        clearInterval(currentInterval);
    });

    document.getElementById("resetTimer").addEventListener("click", () => {
        clearInterval(currentInterval);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        timerRef.innerHTML = "00 : 00 : 00 : 000 ";
    });

    function displayTimer() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms =
            milliseconds < 10
                ? "00" + milliseconds
                : milliseconds < 100
                ? "0" + milliseconds
                : milliseconds;

        timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
    }
    ///noooooo
});
