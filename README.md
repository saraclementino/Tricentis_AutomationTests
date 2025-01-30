# Vehicle Insurance Application - Test Automation #

Esta aplicação simula o processo de cotação de seguros automotivos no portal da **Tricentis**.

🔗 **Acesse a aplicação:** [Vehicle Insurance Application](https://sampleapp.tricentis.com/101/app.php)

Este projeto tem como objetivo **automatizar** os testes no fluxo **Automobile**, cobrindo o preenchimento das seguintes etapas:

* Enter Vehicle Data

* Enter Insurant Data

* Enter Product Data

* Select Price Option 

* Send Quote

![image](https://github.com/user-attachments/assets/e067fe2f-e530-4db0-bfca-e80374078b3e)

## Cenários de testes automatizados 
Os testes simulam a jornada do usuário, validando que todas as etapas do processo funcionem corretamente.

**Funcionalidade**: Preenchimento das abas da Aplicação de Seguro de Veículo

**Cenário**: Preencher e submeter os formulários na Automobile Insurance com **dados válidos**

✔ Cadastro do veículo – Inserção dos dados do veículo, como marca, modelo e potência.  
✔ Informações do segurado – Registro dos dados pessoais do usuário, como nome, data de nascimento e endereço.  
✔ Detalhes do seguro – Definição dos requisitos do seguro, como cobertura e duração do plano.  
✔ Escolha do plano – Seleção da opção de preço conforme as preferências do usuário.  
✔ Envio do orçamento – Envio do e-mail e validação do processo final.

![image](https://github.com/user-attachments/assets/ea62ca1c-7f3f-4029-be99-ee2f7190bd22)


## Estrutura do Projeto 

```javascript
Cypress/
├── e2e/
│   ├── vehicle-InsuranceApplication.feature  // Cenário de teste escrito em Gherkin
│
├── fixtures/
│   ├── images/ // Imagem utilizada no teste
│
├── support/ 
│   ├── pages/  // Implementação do Page Object Model (POM)
│   │   ├── 1-enterVehicleDataPage.js
│   │   ├── 2-enterInsurantDataPage.js
│   │   ├── 3-enterProductDataPage.js
│   │   ├── 4-selectPriceOptionPage.js
│   │   ├── 5-sendQuotePage.js
│   │
│   ├── step-definitions/  // Definição dos passos dos testes BDD (mapeamento do Gherkin para implementação do código em JavaScript)
│   │   ├── validacoes-automobileInsurance.cy.js
│   │
│   ├── commands.js 
│   ├── e2e.js  // Configuração de execução dos testes
│
├── cypress.config.js // Configuração principal do Cypress
├── package-lock.json // Dependências do projeto
├── package.json // Dependências e scripts do Node.js
```

##  Tecnologias e Ferramentas Utilizadas  

- **Cypress**: Framework de testes end-to-end para automação de testes web.  
- **Cucumber**: Integração do Cypress com Gherkin para escrita de testes orientada a comportamento (BDD).  
- **JavaScript**: Linguagem utilizada para a implementação dos testes e interações com os elementos da página.  
- **Gherkin**: Linguagem utilizada para descrever os cenários de teste de forma estruturada e legível.  
- **Node.js**: Ambiente de execução que fornece as dependências necessárias para rodar o Cypress.  
- **Visual Studio Code (VS Code)**: Editor de código utilizado para o desenvolvimento e depuração dos testes.  
- **Git**: Sistema de controle de versão para versionamento e gerenciamento do código-fonte.  
- **GitHub**: Plataforma utilizada para armazenar e compartilhar o repositório do projeto.  
- **Page Object Model (POM)**: Padrão de design adotado para estruturar os scripts de automação, organizando as interações em classes específicas para cada página.













