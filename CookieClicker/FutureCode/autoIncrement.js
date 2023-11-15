//Create a function that gets run 1 time per second
let log = 1;
setInterval(function () {
    console.log("This function have run " + log++ + " times")
    clicks += autoclick;
    console.log("Added " + autoclick + " clicks")
    document.getElementById("Count").innerHTML = clicks;
}, 1000);