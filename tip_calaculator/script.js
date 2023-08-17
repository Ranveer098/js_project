 const billInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById("tipInput")
const numberOfPeopleDiv=document.getElementById("numberofPeople")
const perPersonTotalDiv=document.getElementById("perPersonTotal")


let numberofPeople=Number(numberOfPeopleDiv.innerText)
const calculateBill=()=>{
  const bill=Number(billInput)
  const tipPercentage=Number(tipInput.value)/100
  const tipAmount=bill*tipPercentage
  const total=tipAmount+bill
  const perPersonTotal=total/numberofPeople
 perPersonTotalDiv.innerText=`$${perPersonTotal.toLocaleString('en-US')}`

}

