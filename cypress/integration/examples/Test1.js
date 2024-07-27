//cypress  - Testcases file calles specfile  
/**
 * we have to follow JS test automation framworks in writiing our tests 
 * like jasmin and mocha => recommended from cyrpess to use mocha 
 * for assertion we're using chai
 */

 describe ('My First Test Suit', function(){
    it('My First Test Case' , function(){
        cy.viewport(1100, 660)
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Parent child 
        cy.get('.products').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
         // Search with certain product thin add it to the cart 

        cy.get('pro') 


    })

 })