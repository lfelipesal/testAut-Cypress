![cypress](https://user-images.githubusercontent.com/93229568/198861552-f82a922c-8e8b-4463-a779-03618b68e63d.png)

#  Teste Automatizado de interface

Fui desafiado para criar um caso de teste automatizado no site da [Araujo](https://www.araujo.com.br/), foi pedido para efetuar um pedido de compra,
mas sem finalizar a venda. Para isso foi realizado todo o fluxo de pedido, seja ele entrando no site, fechando as abas iniciais, 
selecionando um produto, finalizar pedido e parando o teste quando pedir os dados pessoais.

## 🔨 Caso de teste criado

- `Entrar no site com sucesso`
- `Pesquisar por um produto`
- `Selecionar o primeiro produto`
- `Adicionar ele no carrinho`
- `Finalizar pedido`

<details>
  <summary><b>Vídeo do teste sendo realizado</b></summary>
    

https://user-images.githubusercontent.com/93229568/198861979-b5555991-cd87-44d7-9390-3565beae2b89.mp4


</details>


## ✔️ Técnicas e tecnologias utilizadas

- `JavaScript`: Linguagem utilizada.
- `Cypress`: Framework de automação utilizado.
- `machowesome`: Framework de documentação utilizado

## 📁 Acesso ao relatório e código do teste

O relatório do teste gerado pela ferramenta machowesome no formato de HTML ou JSon pode ser 
acessado clicando [aqui](https://github.com/lfelipesal/testAut-Cypress/tree/main/mochawesome-report).

<details>
  <summary><b>Pré-visualização do HTML gerado</b></summary>
    

![image](https://user-images.githubusercontent.com/93229568/198862266-3d406d19-97a0-4bcd-b499-bdeacca78802.png)


</details>

Para vizualizar o código que foi feito clique [aqui](https://github.com/lfelipesal/testAut-Cypress/blob/main/cypress/e2e/araujo.cy.js).

## 🛠️ Abrir e rodar o teste

Para executar o projeto é necessario a instalação do Cypress na maquina local
([Passos para instalação](
https://softdesign.com.br/blog/cypress_passo_a_passo_para_comecar_a_usar/#:~:text=Com%20o%20projeto%20criado%2C%20iremos,%E2%80%9D%3A%E2%80%9Dcypress%20open%E2%80%9D))
, depois de instalado e os arquivos de teste baixados, basta abrir o arquivo na sua IDE de preferência, executar o 
comando `npx crypess run` e aguardar a execução do teste. Ao finalizar, o terminal informa se houve sucesso ou não no 
caso de teste.

## 📚 Mais informações sobre a realização do teste

Para o acesso ao site foi necessário criar um header com o acesso de linguagem, pois sem ele o teste retorna um erro `403: Forbidden`
