let questionContainers = document.querySelectorAll('.grid-container')
let questions = document.querySelectorAll('.question') 
let anwsers = document.querySelectorAll('.anwser')  

questionContainers.forEach(questionContainer => {
    questionContainer.addEventListener('click', function showAnwser(){

        /* Bolded question */
        let question = questionContainer.firstElementChild
        question.classList.toggle('bold')
        
        /* Rotate arrow 180deg */
        let rorateArrow = question.nextElementSibling
        rorateArrow.classList.toggle('rotate')

        /* Show anwser */
        let p = questionContainer.lastElementChild
        p.classList.toggle('hidden')
    })
})


