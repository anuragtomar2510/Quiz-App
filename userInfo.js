let nameOfUser = sessionStorage.getItem("username");
let pointOfUser = sessionStorage.getItem("points");
let timeOfUser = sessionStorage.getItem("usertime");


document.querySelector(".user").innerHTML = nameOfUser;
document.querySelector(".points").innerHTML = pointOfUser;
document.querySelector(".time-taken").innerHTML = timeOfUser;