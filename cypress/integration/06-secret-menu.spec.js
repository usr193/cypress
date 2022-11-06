/// <reference types="cypress" />

const restaurants = [
  'Chick-fil-A',
  'McDonalds',
  'In-N-Out',
  'KFC',
  'Jack In The Box',
  'Jamba Juice',
  'Starbucks',
  'Dairy Queen',
  'Burger King',
  'Chipotle',
  'Taco Bell',
  'Five Guys',
  'Sonic',
  'Subway',
  'Panera Bread',
];

const properties = [
  'name',
  'whereToOrder',
  'description',
  'secret',
  'ingredients',
  'popularity',
  'price',
  'howToOrder',
];

const ratings = [1, 2, 3, 4, 5, 6, 7];

describe('Secret Menu Items', () => {
  beforeEach(() => {
    cy.visit('/secret-menu');
  });

  it('should exist have the title on the page', () => {
    cy.get('h1').should('contain', 'Secret Menu Items');
  });

  // for(const property of properties){
  //   it(`should have a column for ${property}`, () => {
  //     cy.get(`#${property}-column`);
  //   });
  //   it(`should hide the ${property} column if unchecked`, () => {
  //     cy.get(`#show-${property}`).click();
  //     cy.get(`#${property}-column`).should('be.hidden');
  //   });
  // }

  // for(const restaurant of restaurants) {
  //   it(`should only show items from ${restaurant}`, () => {
  //     cy.get('#restaurant-visibility-filter').select(restaurant);
  //     cy.get('.whereToOrder').should('contain', restaurant).and('have.length.at.least', 1);
  //   });
  // }

  describe('Rating filter', () => {
    beforeEach(() => {
      cy.get('#minimum-rating-visibility').as('rating-filter');
    });
      for(const rating of ratings){
        it(`should only display items with a rating of ${rating} or higher`, () => {
          cy.get('@rating-filter').invoke('val', rating).trigger('change');
          cy.get('td.popularity').each(($el) => {
            expect(+$el.text()).to.be.gte(rating);
          });
        });
      }
  })
});
