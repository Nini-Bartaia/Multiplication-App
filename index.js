let form= document.getElementsByClassName('form')[0]
let btn=document.getElementsByTagName('button')[0]
let input=document.getElementsByTagName('input')[0]
let para= document.getElementsByTagName('p')[0]
let span=document.getElementsByTagName('span')[0]
let num1= Math.ceil(Math.random()*10)
let num2= Math.ceil(Math.random()*10)

para.innerText=`What is ${num1} multiply by  ${num2}?`
correctAns= num1*num2
let score=JSON.parse(localStorage.getItem("score"))

if(!score){
    score=0
}

span.innerText=`score:${score}`

form.addEventListener('submit', ()=>{
   
    
    const UserAns=+input.value

    if(correctAns===UserAns){
        score++
        storage()
    }else{
        score--
        storage()
    }


})

function storage(){
    localStorage.setItem('score', JSON.stringify(score))
}





