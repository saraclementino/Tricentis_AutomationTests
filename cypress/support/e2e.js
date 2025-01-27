// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/1-enterVehicleDataPage'
import './pages/2-enterInsurantDataPage'
import './pages/3-enterProductDataPage'
import './pages/4-selectPriceOptionPage'
import './pages/5-sendQuotePage'

// Tratativa para ignorar este erro específico da aplicação durante a execução do teste
Cypress.on('uncaught:exception', (err, runnable) => {
    // Verifica se o erro é relacionado à mensagem 'e is not defined'
    if (err.message.includes('e is not defined')) {
      return false; // Impede que o Cypress falhe o teste
    }
    // Outros erros não são ignorados e serão tratados normalmente
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')