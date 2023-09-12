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
    
    const pDay = document.querySelector('#pDay')
    const pMonth = document.querySelector('#pMonth')
    const pYear = document.querySelector('#pYear')

    let dataAtual = new Date()
    let ano = dataAtual.getFullYear()
    let mes = dataAtual.getMonth()
    let dia = dataAtual.getDate()
    /* -------- ---------------------- DIA ----------------------------- */

    if(inputDay.value === '' ){
        let labelDay = document.querySelector('#labelDay')

        labelDay.classList.add('error')
        pDay.innerHTML = 'This field is required'
    }else{
        dayValue = inputDay.value
        labelDay.classList.remove('error')
    }
    
    /* -------- ---------------------- MES ----------------------------- */

    if(inputMonth.value === '' ){
        let labelMonth = document.querySelector('#labelMonth')

        labelMonth.classList.add('error')
        pMonth.innerHTML = 'This field is required'
    }
    else if(inputMonth.value > 12){
        labelMonth.classList.add('error')
        pMonth.innerHTML = 'Must be a valid month'
    }
    else{
        monthValue = inputMonth.value -1
        labelMonth.classList.remove('error')

    }
    
    /* -------- ---------------------- ANO ----------------------------- */


    if(inputYear.value === '' ){
        let labelYear = document.querySelector('#labelYear')

        labelYear.classList.add('error')
        pYear.innerHTML = 'This field is required'
    }
    else if (inputYear.value > ano){
        labelYear.classList.add('error')
        pYear.innerHTML = 'Must be in the past'
    }
    else{
        yearValue = inputYear.value
        labelYear.classList.remove('error')
    }
    
    if(inputDay.value != '' && inputMonth.value != '' && inputYear.value != '' ){
        const dataPassada = new Date(yearValue, monthValue, dayValue)


        spanYear.innerHTML = ano - yearValue
        spanMonth.innerHTML = mes - monthValue
        spanDay.innerHTML = dia - dayValue
    }
})