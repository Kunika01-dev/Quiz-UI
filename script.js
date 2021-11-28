const quizData= [
    {
        question:"Which language runs in a web browser?",
        a: "Java",
        b:"Python",
        c:"C",
        d:"Javascript",
        correct:"d",
    },
    {
        question:"What does CSS stand for?",
        a: "Cascading Style Sheet",
        b:"Central Style Sheet",
        c:"Cascading Simple Sheet",
        d:"Central Simple Style",
        correct:"a",
    },
    {
        question:"What does HTML stand for?",
        a: "Hyperloop Machine Language",
        b:"Hypertext Markdown Language",
        c:"Hypertext Markup Language",
        d:"Hyperloop Markup Language",
        correct:"c",
    },
    {
        question:"What year was Javascript launched?",
        a: "1996",
        b:"1995",
        c:"1994",
        d:"None of the above",
        correct:"b",
    },
    
]

const quiz= document.getElementById("quiz")
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text= document.getElementById("a_text")
const b_text= document.getElementById("b_text")
const c_text= document.getElementById("c_text")
const d_text= document.getElementById("d_text")
const submit=document.getElementById("Submit")

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText= currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=> answerEl.checked=false)}

function getselected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
submit.addEventListener("click", ()=>{
    const answer= getselected()
    if (answer){
        if(answer===quizData[currentQuiz].correct)
        {
            score++

        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`
                   
    }
}
})
