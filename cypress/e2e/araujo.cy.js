describe('Teste de selecionar um item no site da araujo sem finalizar compra', () => {
  //Entrando no site
  beforeEach(() =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit('https://www.araujo.com.br/',{
      headers: {
        "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7"
        }}, {})
  })
  it('Teste de pedido sem confirmar dados', () => {


  // Procuro o Botão para fechar o modal e clico
    cy.get('div > .fa').click();  

    //procurando por um item e apertar ENTER
    var item = 'miojo';
    cy.contains('.header__search.header-searchbar', 'Buscar').type(item +'{enter}');

  //Selecionando o primeiro item para comprar

    //Depois da pesquisa pego o primeiro item do resultado
    cy.get(':nth-child(1) > :nth-child(1) > .item').click();

    // Clico para comprar e assim adiciona esse item no meu carrinho
    cy.contains('a', 'Comprar').click();


  //Finalizando pedido sem confirma os dados

    // Espero o modal do carrinho aparecer
    cy.wait(5000);

    // Iniciando a finalização da compra
    cy.contains('a', 'Finalizar Compra').click();

    // Confirmando o fechamento da compra
    cy.get('.CROModal__btn-finalizar').click();

    // Fechando o pedido de compra
    cy.contains('a','Fechar pedido').click();
  })
})