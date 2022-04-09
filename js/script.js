'use strict'


let bill =document.getElementById('bill')
let person =document.getElementById('people')


// Tip Percent

let five = document.getElementById('five')
let ten = document.getElementById('ten')
let fifteen = document.getElementById('fifteen')
let twentyFive = document.getElementById('twenty-five')
let Fifty = document.getElementById('fifty')
let custom_percent = document.getElementById('custom-percent')

let submit=document.getElementById('submit')

let tip=0
let billAmount=0
let totalTip=0
let tipPerPerson=0
let totalPerPerson=0
let totalAmount=0
let members=0

bill.addEventListener('change',(e)=>{
    
    console.log(e.target.value)
    console.log(bill.value)
   
    billAmount=e.target.value
    calculateAmount()
})
custom_percent.addEventListener('change',(e)=>{
    
    console.log(e.target.value)
    tip=e.target.value
    calculateAmount()
    
    
   

})

five.addEventListener('click',()=>{
    console.log("value")
    tip=5
    five.style.background="hsl(185, 41%, 84%)"
    ten.style.background="hsl(183, 100%, 15%)"
    fifteen.style.background="hsl(183, 100%, 15%)"
    twentyFive.style.background="hsl(183, 100%, 15%)"
    Fifty.style.background="hsl(183, 100%, 15%)"
    calculateAmount()
    
})
ten.addEventListener('click',()=>{
    console.log("value")
    tip=10
    ten.style.background="hsl(185, 41%, 84%)"
    five.style.background="hsl(183, 100%, 15%)"
    fifteen.style.background="hsl(183, 100%, 15%)"
    twentyFive.style.background="hsl(183, 100%, 15%)"
    Fifty.style.background="hsl(183, 100%, 15%)"
    calculateAmount()
    
})
fifteen.addEventListener('click',()=>{
    console.log("value")
    tip=15
    fifteen.style.background="hsl(185, 41%, 84%)"
    ten.style.background="hsl(183, 100%, 15%)"
    five.style.background="hsl(183, 100%, 15%)"
    twentyFive.style.background="hsl(183, 100%, 15%)"
    Fifty.style.background="hsl(183, 100%, 15%)"
    calculateAmount()
    
})
twentyFive.addEventListener('click',()=>{
    console.log("value")
    tip=25
    twentyFive.style.background="hsl(185, 41%, 84%)"
    ten.style.background="hsl(183, 100%, 15%)"
    fifteen.style.background="hsl(183, 100%, 15%)"
    five.style.background="hsl(183, 100%, 15%)"
    Fifty.style.background="hsl(183, 100%, 15%)"
    calculateAmount()
    
})
Fifty.addEventListener('click',()=>{
    console.log("value")
    tip=50
    Fifty.style.background="hsl(185, 41%, 84%)"
    ten.style.background="hsl(183, 100%, 15%)"
    fifteen.style.background="hsl(183, 100%, 15%)"
    twentyFive.style.background="hsl(183, 100%, 15%)"
    five.style.background="hsl(183, 100%, 15%)"
    calculateAmount()
    
})

person.addEventListener('change',(e)=>{
    
    console.log(e.target.value)
    peopleValidation(e.target.value)
    calculateAmount()
    
   

})

submit.addEventListener('click',()=>{
    console.log("reset")
    init()
})



function calculateAmount(){

   
    totalPerPerson=0
    totalTip = (billAmount*tip)/100
    totalAmount = parseInt(billAmount) + parseFloat(totalTip)
    totalPerPerson = totalAmount/members
    document.getElementById('tip-amount').textContent=`$ ${Math.round(totalTip,2)}`
    document.getElementById('amount').textContent=`$${Math.round(totalPerPerson,2)}`
    console.log(billAmount,"bill")
    console.log(totalTip,"totaltip")
    console.log(totalAmount,"total-amount")
    console.log(totalPerPerson,"perperson")




    console.log("Amount")
}

function peopleValidation(people){
    
    if(Number(people) === 0 ){
       document.getElementById('error-text').textContent="Can't be zero"
       document.getElementById('error-text').style.color="red"
       document.getElementById('error-text').style.fontSize="8px"
        person.style.border="2px solid red"
    }
    else if(Number(people)>0)
    {
        document.getElementById('error-text').textContent=" "
       person.style.border="2px solid hsl(184, 14%, 56%)"
       members=people

    }
    
}

function init(){
    bill.value=' '
    person.value=' '
    twentyFive.style.background="hsl(183, 100%, 15%)"
    ten.style.background="hsl(183, 100%, 15%)"
    fifteen.style.background="hsl(183, 100%, 15%)"
    five.style.background="hsl(183, 100%, 15%)"
    Fifty.style.background="hsl(183, 100%, 15%)"
}


