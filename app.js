let $ = document

const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')

const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')

const myBtn =$.querySelector('#btn')
const Bmi = $.querySelector('#res')
const myState = $.querySelector('#state')





function bmiCalc(){

    const myInputWeight = weightInput.value
    const myInputHeight = heightInput.value

    weightVal.innerHTML = myInputWeight
    heightVal.innerHTML = myInputHeight

    myBtn.addEventListener('click' , function(){

        const myBmi = (myInputWeight / (Math.pow(myInputHeight/100, 2))).toFixed(1)

        Bmi.innerHTML = myBmi

        

        if(myBmi < 18.5){

            myState.innerHTML = 'UnderWeight'
            myState.style.color = '#ff0606'
            Bmi.style.color = '#ff0606'
        }

        else if(myBmi >= 18.5 && myBmi <= 24.9){

            myState.innerHTML = 'Normal Weight'
            myState.style.color = '#0be881'
            Bmi.style.color = '#0be881'
        }
        else if(myBmi >= 25 && myBmi <= 29.9){
            myState.innerHTML = 'OverWeight'
            myState.style.color = '#ff5f00'
            Bmi.style.color = '#ff5f00'
        }
        else{
            myState.innerHTML = 'Obese'
            myState.style.color = '#ff5e4d'
            Bmi.style.color = '#ff5e4d'
        }


    })

    
    




}







weightInput.addEventListener('change' , bmiCalc)
heightInput.addEventListener('change' , bmiCalc)