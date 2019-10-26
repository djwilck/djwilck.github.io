/*
 * f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
 *  t = current temp in F
 *  s = wind speed in MPH
 *  f = wind chill in F
*       Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
*       and wind speeds above 4.8 kilometres per hour (3.0 mph). 
 */

let t = parseInt(document.getElementById("temp").innerHTML);
let s = parseInt(document.getElementById("speed").innerHTML);
let tMax = 50;
let sMin = 3;
let f = 0;

if (t < tMax && s > sMin) {
    f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    f = Math.round(f);

    document.getElementById("chill").innerHTML = f + "&#176;F";
} else {
    f = "N/A";
    document.getElementById("chill").innerHTML = f;
}
//console.log("Current Temp = " + t + ", Wind Speed = " + s + ", Wind Chill = " + f)