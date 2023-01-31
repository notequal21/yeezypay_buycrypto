import Inputmask from '../../../node_modules/inputmask/dist/inputmask.es6.js'
import JustValidate from 'just-validate'

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger')
    const menu = document.querySelector('.header-body__menu')
    const body = document.querySelector('body')

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
      } else {
        openBtn.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')
      }
    }

    openBtn.addEventListener('click', toggleBurger)
  }
}

export const tooltip = () => {
  if (document.querySelector('.tooltip')) {
    const btn1 = document.querySelector(`#tooltip-btn-1`)
    const btn2 = document.querySelector(`#tooltip-btn-2`)
    const btnClose1 = document.querySelector(`#tooltip-close-btn-1`)
    const btnClose2 = document.querySelector(`#tooltip-close-btn-2`)

    const openTooltip = (num) => {
      document.querySelector(`#tooltip-1`).classList.remove('show')
      document.querySelector(`#tooltip-2`).classList.remove('show')

      let tooltip = document.querySelector(`#tooltip-${num}`)

      tooltip.classList.add('show')
    }
    const closeTooltip = (num) => {
      let tooltip = document.querySelector(`#tooltip-${num}`)

      tooltip.classList.remove('show')
    }

    btn1.addEventListener('click', () => openTooltip(1))
    btn2.addEventListener('click', () => openTooltip(2))
    btnClose1.addEventListener('click', () => closeTooltip(1))
    btnClose2.addEventListener('click', () => closeTooltip(2))
  }
}

export const locked = () => {
  if (document.querySelector('.main-body__con')) {
    const cont = document.querySelector('.main-body__con')
    const currencySelectors = document.querySelectorAll(
      '.main-select__item-radio'
    )
    let array = []

    const lockedCheck = () => {
      array = Array()
      currencySelectors.forEach((item) => array.push(item.checked))

      if (
        array.some((item) => item === true) &&
        cont.classList.contains('_locked')
      ) {
        cont.classList.remove('_locked')
      }
    }

    currencySelectors.forEach((item) => {
      item.addEventListener('click', lockedCheck)
    })
  }
}

export const mask = () => {
  const cardNumber = document.getElementById('card-number')
  const cardData = document.getElementById('card-data')

  Inputmask({ mask: '9999 9999 9999 9999' }).mask(cardNumber)
  Inputmask({ mask: '99/99' }).mask(cardData)
}

export const validate = () => {
  const validator = new JustValidate('#form')

  validator
    .addField('#card-number', [
      {
        rule: 'required',
      },
    ])
    .addField('#card-name', [
      {
        rule: 'required',
      },
    ])
    .addField('#card-data', [
      {
        rule: 'required',
      },
    ])
    .addField('#card-cvv', [
      {
        rule: 'required',
      },
    ])
}
