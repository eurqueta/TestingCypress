/// <reference types="Cypress" />

import GeneradorNombres from '../../generador/generadorNombres';

context('Actions', () => {

    beforeEach(() => {
        cy.visit('https://www.zeke.cl')
        })
    

    it('Funciona busqueda', () => {
        // https://on.cypress.io/type
        cy.get('.search-field')
            .click()
            .type('Inteligencia{enter}')

        cy.url().should('include', '?s=Inteligencia');
       
        cy.get('.inner').should('contain','Inteligencia');
    })


    it('Debe validar formulario', () => {
        cy.get('a:contains("Cotiza con Nosotros")')
            .click()
       
        cy.get('section#simplecontactformrevisited-2 input:first')
            .focus()
            .type('{enter}')
            .should('have.class','invalid')
    })

    it('Funciona busqueda texto aleatorio', () => {
        // https://on.cypress.io/type

        let gen = new GeneradorNombres();

        let busqueda = gen.generarNombre();

        cy.get('.search-field')
            .click()
            .type(busqueda+'{enter}')

        cy.url().should('include', `?s=${busqueda.replace(' ','+')}`);
       
        cy.get('.404').should('contain','No hay Entrada para mostrar');

        cy.screenshot()
    })

});