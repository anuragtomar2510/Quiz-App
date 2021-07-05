let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let minutes = Math.floor((time % (1000*60*60))/(1000*60*60));
let seconds = Math.floor((time % (100*60))/(1000));

let myTime = setInterval(function() {

        if(seconds < 59) {

                seconds++;

        } else {

                minutes++;
                seconds = 0;

        }

        if(seconds < 10) {

                forSeconds = `0${seconds}`;

        } else {

                forSeconds = seconds;

        }

        if(minutes < 10) {

                forMinutes = `0${minutes}`;

        } else {

                forMinutes = minutes;

        }

        console.log(forMinutes, forSeconds);
        document.querySelector(".time").innerHTML = `${forMinutes} : ${forSeconds}`;



}, 1000);