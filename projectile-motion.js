//defining variables
let gEarth = 9.81;
let gVenus = 8.87;
let gMars = 3.71;
let gMoon = 1.62;
let g = 9.81;
let v;
let theta;

//different gravity values, simulating the projection on respective planets.
function earthGrav() {
    g = gEarth;
    document.getElementById("planet").innerHTML = "Gravity: Earth";
}

function marsGrav() {
    g = gMars;
    document.getElementById("planet").innerHTML = "Gravity: Mars";
}

function moonGrav() {
    g = gMoon;
    document.getElementById("planet").innerHTML = "Gravity: Moon";
}

function venusGrav() {
    g = gVenus;
    document.getElementById("planet").innerHTML = "Gravity: Venus";
}


//finding the amount of significant digits from the user's input
function sigFig() {
    for (i = 0;i < v.length; i++) {
        vSig = i + 1;
    }
    for (i = 0; i < theta.length; i++) {
        aSig = i + 1;
    }
    if (vSig != aSig) {
        if (vSig > aSig) {
            return vSig;
        }
        else {
            return aSig;
        }
    }
    else {
        return vSig;
    }
}       

//converting user input angle to radians
function toRadians () { 
   return theta * (Math.PI / 180); 
}

//math
function getVx() {
    vx = Math.cos(toRadians()) * v;
    return vx;
}

function getVy() {
   vy = Math.sin(toRadians()) * v;
   return vy;
} 
              
function getTime() {
    t = ((2*getVy()) / g);
    return t;
}

function getDist() {
    dist = getVx() * getTime();
    sigDist = sigFig();
    return Number(dist.toPrecision(sigDist));
}
        
function calculate() {
    v = document.getElementById("barrel-vel").value;
    theta = document.getElementById("proj-ang").value;
    
    if (v != 0 && theta != 0) { document.getElementById("approx").innerHTML = "The projectile will travel " + getDist() + "m with a " + v + " m/s launch speed, aimed at " + theta + "° above the horizontal.";
    }
    else {
        alert("missing input(s)");
    }
  }