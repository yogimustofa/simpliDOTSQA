describe('login TMDb', () => {
  context('SimpliDOTS', () => {
    beforeEach(() => {
      cy.wait(10)
      cy.viewport(1200, 720)
    })
  
  it('Success Login', () => {
    cy.visit('https://www.themoviedb.org')

    cy.wait(1000)
    cy.get('#onetrust-accept-btn-handler').click() // accept pp up cookies
    cy.get('.primary > :nth-child(3) > a').click()

    cy.get('#username').type('admintester')
    cy.get('#password').type('admin123')
    cy.get('#login_button').click()
    cy.location('pathname').should('equal', '/u/admintester')

    cy.get('.logo > img').click() //back to home

    //mark as 1 favorite movie // i Choose title movie GHOST BUSTER frozen empire 2024
    cy.get(':nth-child(4) > div.image > .wrapper > .image > .poster').click()
    cy.get('#favourite > .glyphicons_v2').click()

  //mark 2 as favorite movie // i Choose title movie Kungfu panda at category Free to Watch
    //cy.get('.logo > img').click() //back to home
    
    //cy.get(':nth-child(1) > div.image > .wrapper > .image > .poster').click()
   // cy.get('#favourite > .glyphicons_v2').click()
    
   //ganti bahasa dari indo ke inggris
   cy.get('.translate > div').click()
   cy.get('#o3ad6248-56ca-4632-bd36-6aa8b552f349').click()
  })

  })
})