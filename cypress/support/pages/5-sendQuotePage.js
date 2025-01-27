const BTN_SEND_QUOTE = '#sendemail'

//Comando personalizado para o preenchimento da aba Send Quote
Cypress.Commands.add('preencherDadosOrçamento', () => {
    const orcamento = Cypress.env('sendQuote')
 
    cy.get('#email').type(orcamento.email)
    cy.get('#phone').type(orcamento.phone)
    cy.get('#username').type(orcamento.username)
    cy.get('#password').type(orcamento.password)
    cy.get('#confirmpassword').type(orcamento.confirmPassword) 
    cy.get('#Comments').type(orcamento.comments)  
 })

 Cypress.Commands.add('clicarSendEmail', () => {
   // intercepta a requisição HTTP do tipo POST para o endpoint /101/tcpdf/pdfs/quote.php antes do click
   cy.intercept('POST', '/101/tcpdf/pdfs/quote.php').as('sendEmail')

   // click no botão de enviar email
    cy.get(BTN_SEND_QUOTE).click()

    // aguarda até que a requisição interceptada com o alias @sendEmail seja capturada
    cy.wait('@sendEmail', { timeout: 10000 }).then((interception) => {
      // Valida o status da resposta http da requisição
      expect(interception.response.statusCode).to.eq(200)
    })
 })