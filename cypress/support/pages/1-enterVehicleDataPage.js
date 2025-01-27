const BTN_NEXT_INSURANT = '#nextenterinsurantdata'

//Comando personalizado para o preenchimento da aba Dados do Veículo
Cypress.Commands.add('preencherDadosDoVeiculo', () => {
    const veiculo = Cypress.env('vehicleData')
    
   cy.get('#make').select(veiculo.marca)    
   cy.get('input#engineperformance').type(veiculo.desempenhoMotor)
   cy.get('#dateofmanufacture').type(veiculo.dataFabricacao)
   cy.get('#numberofseats').select(veiculo.numeroAssentos)  
   cy.get('#fuel').select(veiculo.tipoCombustivel)
   cy.get('#listprice').type(veiculo.precoTabela)
   cy.get('#licenseplatenumber').type(veiculo.numeroPlaca)
   cy.get('#annualmileage').type(veiculo.quilometragemAnual)
})

//Comando personalizado para o click no botão Next e redirecionar para aba Insurant Data
Cypress.Commands.add('clicarNextInsurant', () => {
    cy.get(BTN_NEXT_INSURANT).click()   
 })  