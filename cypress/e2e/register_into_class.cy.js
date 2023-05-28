describe('template spec', () => {
  it('logs into webpage and registers in class', () => {

    // perform login
    cy.visit('https://wodbuster.com/account/login.aspx');
    const user = Cypress.env('USERNAME')
    cy.get('#body_body_IoEmail').type(user);
    const pass = Cypress.env('PASSWORD')
    cy.get('#body_body_IoPassword').type(pass);
    cy.get('#body_body_CtlAceptar').click();

    // go to athlete reservations
    const host = Cypress.env('HOST')
    cy.visit(`https://${host}.wodbuster.com/athlete/reservas.aspx`);

    // select X+ calendar days
    const days = Cypress.env('NOTICE_DAYS');
    for (let i = 0; i < days; i++) {
      cy.wait(1000);
      cy.get("#calendar").get(".navdays").get(".next").click();
      cy.wait(1000);
    }
    
    // search for desired class and add to it
    const classTime = Cypress.env("CLASS_TIME");
    const classType = Cypress.env("CLASS_TYPE");
    cy.get("#calendar")
    .find(`[data-magellan-destination=h${classTime}00]`)
    .find("div > div > .rowClase")
    .each(el => {
      cy.wrap(el)
      .find(".entrenamientoHead > .entrenamiento", { timeout: 10000 })
      .contains(classType)
      .parent()
      .parent()
      .find(".actionsjs > button")
      .click();
      return false;
    });
  })
})
