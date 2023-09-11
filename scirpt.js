const form = document.querySelector('form')
const inputDay = document.querySelector('#day')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')

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
    
    /* -------- ---------------------- MESE ----------------------------- */

    if(inputMonth.value === '' ){
        let labelMonth = document.querySelector('#labelMonth')

        labelMonth.classList.add('error')

    }else{
        monthValue = inputMonth.value
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
    

    data = new Date(yearValue, monthValue, dayValue)
    console.log(data)

    if(inputDay.value != '' && inputMonth.value != '' && inputYear.value != '' ){
        alert('nenhum tá vazio')
    }
})