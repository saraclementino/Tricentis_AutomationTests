#utf-8
#language: pt

Funcionalidade: Preenchimento das abas da Aplicação de Seguro de Veículo
    Cenário: Preencher e submeter os formulários na Automobile Insurance com dados válidos
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

        