const BTN_NEXT_PRODUCT = '#nextenterproductdata'

//Comando personalizado para o preenchimento da aba Dados do Segurado
Cypress.Commands.add('preencherDadosDoSegurado', () => {
    const segurado = Cypress.env('insurantData')
 
    cy.get('#firstname').type(segurado.firstName)   
    cy.get('#lastname').type(segurado.lastName)
    cy.get('#birthdate').type(segurado.birthDate)  
    cy.contains('Gender').get('input#genderfemale').check({force:true})
    cy.get('#streetaddress').type(segurado.streetAddress)
    cy.get('#country').select(segurado.country)
    cy.get('#zipcode').type(segurado.zipCode)
    cy.get('#city').type(segurado.city)
    cy.get('#occupation').select(segurado.occupation)
    cy.contains('Hobbies').get('input#speeding').check({force:true})
    cy.get('#website').type(segurado.website)
    cy.get('input#picturecontainer').selectFile('cypress/fixtures/images/175991.jpg', {force:true})
    
    // validando se a imagem foi anexada corretamente
    cy.get('input#picturecontainer').then((input) => {
      const files = input[0].files;
      expect(files[0].name).to.equal('175991.jpg'); // Verifica o nome do arquivo
      expect(files.length).to.equal(1); // Confirma que há apenas um arquivo anexado
    });
 })

//Comando personalizado para o click no botão Next e redirecionar para aba Product Data
Cypress.Commands.add('clicarNextProduct', () => {
    cy.get(BTN_NEXT_PRODUCT).click()
 })