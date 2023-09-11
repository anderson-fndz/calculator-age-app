const form = document.querySelector('form')
const inputDay = document.querySelector('#day')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')

const spanYear = document.querySelector('#spanYear')
const spanMonth = document.querySelector('#spanMonth')
const spanDay = document.querySelector('#spanDay')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    var dayValue
    var monthValue
    var yearValue
    

    /* -------- ---------------------- DIA ----------------------------- */

    if(inputDay.value === '' ){
        let labelDay = document.querySelector('#labelDay')

        labelDay.classList.add('error')

    }else{
        dayValue = inputDay.value
        labelDay.classList.remove('error')
    }
    
    /* -------- ---------------------- MES ----------------------------- */

    if(inputMonth.value === '' ){
        let labelMonth = document.querySelector('#labelMonth')

        labelMonth.classList.add('error')

    }else{
        monthValue = inputMonth.value -1
        labelMonth.classList.remove('error')
    }
    
    /* -------- ---------------------- ANO ----------------------------- */


    if(inputDay.value === '' ){
        let labelYear = document.querySelector('#labelYear')

        labelYear.classList.add('error')

    }else{
        yearValue = inputYear.value
        labelYear.classList.remove('error')
    }
    
    if(inputDay.value != '' && inputMonth.value != '' && inputYear.value != '' ){
        let data = new Date()
        let ano = data.getFullYear()
        let mes = data.getMonth()
        let dia = data.getDate()
        
        spanYear.innerHTML = ano - yearValue
        spanMonth.innerHTML = mes - monthValue
        spanDay.innerHTML = dia - dayValue
    }
})