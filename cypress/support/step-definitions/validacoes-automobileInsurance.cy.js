import { Given, When, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que acesso o portal da Tricentis', () => {
    cy.visit('/app.php')   
  })
  
  When('clico na opção Automobile', () => {
    cy.contains('Automobile').click().should('be.visible')
  })

  And('preencho o formulario da aba Enter Vehicle Data', () => {
    cy.contains('Enter Vehicle Data').should('be.visible')
    cy.preencherDadosDoVeiculo()
  })
  
  And('clico em Next para prosseguir para a aba Enter Insurant Data', () => {
    cy.contains('Next').should('be.visible')
    cy.clicarNextInsurant()
  })

  And('preencho o formulario da aba Enter Insurant Data', ()=> {
    cy.contains('Enter Insurant Data').should('be.visible')
    cy.preencherDadosDoSegurado()
  })

  And('clico em Next para prosseguir para a aba Enter Product Data', () => {
    cy.contains('Prev').should('be.visible')
    cy.clicarNextProduct()
  })

  And('preencho o formulario da aba Enter Product Data', ()=> {
    cy.contains('Enter Product Data').should('be.visible')
    cy.preencherDadosDoProduto()
  })

  And('clico em Next para prosseguir para a aba Select Price Option', () => {
    cy.contains('Courtesy Car').should('be.visible')
    cy.clicarNextPrice()
  })

  And('seleciono a opção do preço por ano do seguro', () => {
    cy.contains('Price per Year ($)').should('be.visible')
    cy.contains('Platinum').should('be.visible')
    cy.clicarSelectOption()
  })

  And('clico em Next para prosseguir para a aba Send Quote', () => {
    cy.contains('View Quote').should('be.visible')
    cy.clicarNextSendQuote()
  })

  And('preencho o formulario da aba Send Quote', ()=> {
    cy.contains('Send Quote').should('be.visible')
    cy.preencherDadosOrçamento()
  })

  Then('clico em send para enviar email do orçamento', () => {
    //Após interceptar a requisição, esse comando personalizado chama a ação de click no botão de enviar e-mail
    cy.clicarSendEmail()  

    //validando que a aplicação exibiu a mensagem correta para o usuário após o envio do e-mail de orçamento do seguro
    cy.contains('Sending e-mail success!').should('be.visible')
  })

  
