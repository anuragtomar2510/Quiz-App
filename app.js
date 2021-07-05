
let questionCount = 0;
let points = 0;
let questions = [
        {
          id: 1,
          question: "What is the full form of RAM ?",
          answer: "Random Access Memory",
          options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Accept Memory",
            "None of these"
          ]
        },
        {
          id: 2,
          question: "What is the full form of CPU ?",
          answer: "Central Processing Unit",
          options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
          ]
        },
        {
          id: 3,
          question: "What is the full form of E-mail ?",
          answer: "Electronic Mail",
          options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
          ]
        },

        {
                id: 4,
                question: "'OS' computer abbreviation usually means ?",
                answer: "Operating System",
                options: [
                        "Order of Significance",
                        "Open Software",
                        "Operating System",
                        "Optical Sensor"
                ]
        },

        {
                id: 5,
                question: "What does the abbreviation 'http' stand for ?",
                answer: "Hypertext Transfer Protocol",
                options: [
                        "Hypertext Transfer Protocol",
                        "High Task Termination Procedure",
                        "Harvard Teletext Proof",
                        "Hindustan Times Technical Proffesionals"
                ]
        },

        {
                id: 6, 
                question: "Which of the following is not a part of the Internet ?",
                answer: "CD-ROM",
                options: [
                        "World Wide Web",
                        "Email",
                        "HTTP",
                        "CD-ROM"

                ]
        },

      ];




let userName = document.querySelector(".username")
let subBtn = document.querySelector(".btn");
let btnNext = document.querySelector(".btn-next");
let question = document.querySelector(".question");
let options = document.querySelector(".options");



function submitForm(event) {

        event.preventDefault();
        let name = userName.value;

        if(name === '') {

                alert('Name is required');
                return;

        }

        console.log(name);
        sessionStorage.setItem('username', name);

        
        location.href = './quiz.html';
        
        

}


function next() {

        checkAnswer();

        questionCount++;

        if(questionCount < questions.length) {

                show(questionCount); 

        } else {

                sessionStorage.setItem("usertime", `${forMinutes} minutes & ${forSeconds} seconds`);
                clearInterval(myTime);
                location.href = './end.html';

        }
        

}

function checkAnswer() {

        let userAns = document.querySelector(".active");
        if(userAns == null) {

                return;

        }

        if(questions[questionCount].answer === userAns.innerText) {

                points = points + 10;
                sessionStorage.setItem("points", points);

        }

        
}



function show(count) {

        question.innerHTML = `<h2>${questions[count].question}</h2>
                            <ul class="option-group">
                            <li class="option">${questions[count].options[0]}</li>
                            <li class="option">${questions[count].options[1]}</li>
                            <li class="option">${questions[count].options[2]}</li>
                            <li class="option">${questions[count].options[3]}</li>
                            </ul>`;


        toggleActive();
}

function toggleActive() {

        let listOption = document.querySelectorAll("li.option");

        for(let i = 0; i <listOption.length; i++) {

                listOption[i].addEventListener("click", function () {

                        for(let j = 0; j < listOption.length; j++) {

                                if(listOption[j].classList.contains("active")) {

                                        listOption[j].classList.remove("active");

                                }
                        }

                        listOption[i].classList.add("active");

                });
        }
}
        

