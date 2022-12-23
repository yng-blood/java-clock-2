function timeClock() {
    var Domtime = new Date();
    var hrs = Domtime.getHours();
    var min = Domtime.getMinutes();
    var sec = Domtime.getSeconds();
    var daynight = document.getElementById('DN');

    let callimg = document.getElementById('component');
    let calltext = document.getElementById('breakfast1');
    let callblog = document.getElementById('blog')
    if (hrs >= 00 && hrs <= 11) {
        callimg.src = "./Component.jpg"
        calltext.innerHTML = " GOOD MORNING!! WAKE UP !! "
        callblog.innerHTML = " GOOD MORNING!! WAKE UP !!"
    } else if (hrs >= 12 && hrs <= 15) {
        callimg.src = "./afternoon1.jpg"
        calltext.innerHTML = " GOOD AFTERNOON hAVE SOME LUNCH "
        callblog.innerHTML = " GOOD AFTERNOON !! TAKE SOME SLEEP"
    } else if (hrs >= 16 && hrs <= 19) {
        callimg.src = "./naptime@2x.jpg"
        calltext.innerHTML = " TIERED ! TAKE SOME NAP "
        callblog.innerHTML = " GOOD EVENING ! !"
    }
    if (hrs >= 20 && hrs <= 22) {
        callimg.src = "./lunch_image.jpg"
        calltext.innerHTML = " STOP YAWNING, GET SOME TEA... <BR> ITS JUST EVENING!"
        callblog.innerHTML = " GOOD EVENING ! !"
    } else if (hrs >= 23) {
        callimg.src = "./goodnight_image@2x.jpg"
        calltext.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP"
        callblog.innerHTML = " GOOD NIGHT ! !"
    }
    if (hrs >= 12) {
        daynight.innerHTML = 'PM'
    } else {
        daynight.innerHTML = 'AM'
    }
    if (hrs >= 12) {
        hrs -= 12;
    }
    if (hrs <= 9) {
        hrs = "0" + hrs;
    }
    if (min <= 9) {
        min = "0" + min;
    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(timeClock, 10);

function dropdown() {

    var wake_value = document.getElementById("wake_time").value;
    var lunch_value = document.getElementById("lunch_time").value;
    var np_value = document.getElementById("nap_time").value;
    var night_value = document.getElementById("night_time").value;

    document.getElementById("wakeup").innerHTML = wake_value;
    document.getElementById("lunch").innerHTML = lunch_value;
    document.getElementById("nap").innerHTML = np_value;
    document.getElementById("night").innerHTML = night_value;


}
var setalarm = document.getElementById("alarm");
setalarm.addEventListener("click", dropdown);

























// function setonfire() {
//     let addch = document.getElementById('sched1');
//     let wakeup = document.getElementById('SWT');
//     let lunch = document.getElementById('SLT');
//     let nap = document.getElementById('Snt');
//     let sleep = document.getElementById('SNT');
//     let clx = document.getElementById('alarm');
//     btnElement.addEventListener("click", function() {
//         let value = SWTElement.value;
//         let liElement = document.createElement("li");
//     })
// };
// list.appendChild(liElement);


// //
// var newformat = hrs >= 12 ? 'PM' : 'AM';
// document.getElementById("AM").innerHTML = newformat;

// if (hrs >= 1 && hrs <= 3) {
//     document.getElementById("breakfast").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
//     document.getElementById("breakfast").innerHTML = "LET'S HAVE SOME LUNCH !!";
//     document.getElementById("component").src = "./AFTERNOON.png";
// }