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
    /* -------- ---------------------- DIA ----------------------------- */

    if (inputDay.value === '') {
        let labelDay = document.querySelector('#labelDay')

        labelDay.classList.add('error')
        pDay.innerHTML = 'This field is required'

    } else if(inputDay.value > 31 ){
        labelDay.classList.add('error')
        pDay.innerHTML = 'Must be a valid day'
    }  
    else {
        dayValue = inputDay.value
        labelDay.classList.remove('error')
    }

    /* -------- ---------------------- MES ----------------------------- */

    if (inputMonth.value === '') {
        let labelMonth = document.querySelector('#labelMonth')

        labelMonth.classList.add('error')
        pMonth.innerHTML = 'This field is required'
    }
    else if (inputMonth.value > 12 || inputMonth.value < 1) {
        labelMonth.classList.add('error')
        pMonth.innerHTML = 'Must be a valid month'
    }
    else {
        monthValue = inputMonth.value - 1
        labelMonth.classList.remove('error')

    }

    /* -------- ---------------------- ANO ----------------------------- */


    if (inputYear.value === '') {
        let labelYear = document.querySelector('#labelYear')

        labelYear.classList.add('error')
        pYear.innerHTML = 'This field is required'
    }
    else if (inputYear.value > dataAtual.getFullYear()) {
        labelYear.classList.add('error')
        pYear.innerHTML = 'Must be in the past'
    }
    else {
        yearValue = inputYear.value
        labelYear.classList.remove('error')
    }

/*-------------------------- OUTRA COISA ------------------------------- */ 

    if (inputDay.value != '' && inputMonth.value != '' && inputYear.value != '') {
        let dataPassada = new Date(yearValue, monthValue, dayValue)
        DifenrecaDatas(dataAtual, dataPassada)
    }
})

function DifenrecaDatas(dataAtual, dataPassada) {
    let dataEmMilissegundos = Math.abs(dataAtual.getTime() - dataPassada.getTime());
    let diasDifenreca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));
    let mesDiferenca = (diasDifenreca / 30.5)
    let anoDiferenca = Math.floor(mesDiferenca / 12)
    if (diasDifenreca >= 30) {
        mesDiferenca = Math.floor(diasDifenreca / 30.5)
        diasDifenreca = diasDifenreca % 31
    }

    if (mesDiferenca > 12) {
        anoDiferenca = Math.floor(mesDiferenca / 12)
        mesDiferenca = mesDiferenca % 12
    }

    spanDay.innerHTML = diasDifenreca
    spanMonth.innerHTML = mesDiferenca
    spanYear.innerHTML = anoDiferenca

}