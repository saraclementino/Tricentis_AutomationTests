# Vehicle Insurance Application - Test Automation #

Esta aplicação simula o processo de cotação de seguros automotivos no portal da **Tricentis**.

🔗 **Acesse a aplicação:** [Vehicle Insurance Application](https://sampleapp.tricentis.com/101/app.php)

Este projeto tem como objetivo **automatizar** os testes no fluxo **Automobile**, cobrindo o preenchimento das seguintes etapas:

* Insira os dados do veículo 

* Insira os dados do segurado

* Insira os dados do produto 

* Selecione a opção de preço 

* Enviar orçamento

![image](https://github.com/user-attachments/assets/e067fe2f-e530-4db0-bfca-e80374078b3e)

# Cenários de testes automatizados #
Os testes simulam a jornada do usuário, validando que todas as etapas do processo funcionem corretamente.

**Funcionalidade**: Preenchimento das abas da Aplicação de Seguro de Veículo

**Cenário**: Preencher e submeter os formulários na Automobile Insurance com **dados válidos**

        Dado que acesso o portal da Tricentis
        Quando clico na opção Automobile
        E preencho o formulario da aba Enter Vehicle Data
        E clico em Next para prosseguir para a aba Enter Insurant Data
        E preencho o formulario da aba Enter Insurant Data
        E clico em Next para prosseguir para a aba Enter Product Data
        E preencho o formulario da aba Enter Product Data
        E clico em Next para prosseguir para a aba Select Price Option
        E seleciono a opção do preço por ano do seguro
        E clico em Next para prosseguir para a aba Send Quote
        E preencho o formulario da aba Send Quote
        Então clico em send para enviar email do orçamento

Foram validados: 

✔ Cadastro do veículo – **Preenchimento** dos dados do veículo, como marca, modelo e potência.  
✔ Informações do segurado – **Preenchimento** dos dados pessoais do usuário, como nome, data de nascimento e endereço.  
✔ Detalhes do seguro – **Preenchimento** dos requisitos do seguro, como cobertura e duração do plano.  
✔ Escolha do plano – **Preenchimento** da opção de preço conforme as preferências do usuário.  
✔ Confirmação do envio do e-mail – **Preenchimento** do formulário e submissão do processo final.  
![image](https://github.com/user-attachments/assets/866a46ba-429e-46a1-bec4-f79d6a907975)








