const BTN_NEXT_PRICE = '#nextselectpriceoption'

//Comando personalizado para o preenchimento da aba Dados do Produto
Cypress.Commands.add('preencherDadosDoProduto', () => {
    const produto = Cypress.env('productData')
 
    cy.get('#startdate').type(produto.startDate)
    cy.get('#insurancesum').select(produto.insuranceSum)
    cy.get('#meritrating').select(produto.meritRating)
    cy.get('#damageinsurance').select(produto.damageInsurance)
    cy.contains('Optional Products').get('input#EuroProtection').check({force:true})
    cy.get("#courtesycar").select(produto.courtesyCar)   
 })

//Comando personalizado para o click no botão Next e redirecionar para aba Select Price Option
Cypress.Commands.add('clicarNextPrice', () => {
    cy.get(BTN_NEXT_PRICE).click()
})