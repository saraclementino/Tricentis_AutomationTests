const BTN_SELECT_OPTION = '#selectplatinum'
const BTN_NEXT_SEND_QUOTE = '#nextsendquote'

//Comando personalizado para selecionar opção de preço do seguro
Cypress.Commands.add('clicarSelectOption', () => {
   cy.get(BTN_SELECT_OPTION).check({force:true})
})

//Comando personalizado para o click no botão Next e redirecionar para aba Send Quote
Cypress.Commands.add('clicarNextSendQuote', () => {
   cy.get(BTN_NEXT_SEND_QUOTE).click()
})


