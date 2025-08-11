class Form {
    // SELECTORS
    fieldFirstName = () => cy.get('[data-testid="firstName"] input');
    eleFirstNameSvg = () => cy.get('[data-testid="firstName"] svg path');
    eleFirstNameSpan = () => cy.get('[data-testid="firstName"] span');
    fieldLastName = () => cy.get('[data-testid="lastName"] input');
    eleLastNameSvg = () => cy.get('[data-testid="lastName"] svg path');
    eleLastNameSpan = () => cy.get('[data-testid="lastName"] span');
    fieldEmail = () => cy.get('[data-testid="TextInput"] input');
    eleEmailSvg = () => cy.get('[data-testid="TextInput"] svg path');
    eleEmailSpan = () => cy.get('[data-testid="TextInput"] span');
    fieldCountry = () => cy.get('[data-testid="country"]');
    eleCountrySvg = () => cy.get('[data-testid="country"] svg.sc-fhzFiK.gPRlAc path');
    eleCountrySpan = () => cy.get('[data-testid="country"] span');
    fieldDialCode = () => cy.get('[data-testid="dialCode"] input');
    eleDialCodeSvg = () => cy.get('[data-testid="dialCode"] svg path');
    btnSubmit = () => cy.get('[data-testid="Button"]');
    eleTermsError = () => cy.get('[data-testid="termsError"]');
    eleTermsCheckbox = () => cy.get('[data-testid="Checkbox"] input');
    fieldPhoneNumber = () => cy.get('[data-testid="phoneNumber"] input');
    elePhoneNumberSvg = () => cy.get('[data-testid="phoneNumber"] svg path');
    fieldPassword = () => cy.get('[data-testid="password"] input');
    elePasswordSvg = () => cy.get('[data-testid="password"] svg path');

    // METHODS
    typeInFirstName = (firstName) => {
        cy.step('check if First name field is visible')
        this.fieldFirstName().should('be.visible');
        cy.step('Input symbols into the “First name” field')
        this.fieldFirstName().clear().type(firstName);
        cy.step('press tab to let the field validate the input')
        this.fieldFirstName().realPress('Tab');
    }

    checkFirstNameAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.eleFirstNameSvg().should('have.attr', 'd','M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }

    checkFirstNameRejectedNumbers = () => {
        cy.step('The system rejects the input and displays an error message “Numbers are not allowed in this field” ')
        this.eleFirstNameSpan().should('be.visible').and('contain.text', 'Numbers are not allowed in this field')
    }

    checkFirstNameRejectedSpecials = () => {
        cy.step('The system rejects the input and displays an error message')
        this.eleFirstNameSpan().should('be.visible')
    }

    typeInLastName = (lastName) => {
        cy.step('check if First name field is visible')
        this.fieldLastName().should('be.visible');
        cy.step('Input symbols into the “First name” field')
        this.fieldLastName().clear().type(lastName);
        cy.step('press tab to let the field validate the input')
        this.fieldLastName().realPress('Tab');
    }

    checkLastNameAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.eleLastNameSvg().should('have.attr', 'd').and('include', 'M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }

    checkLastNameRejectedNumbers = () => {
        cy.step('The system rejects the input and displays an error message')
        this.eleLastNameSpan().should('be.visible').and('contain.text', 'Numbers are not allowed in this field')
    }

    checkLastNameRejectedSpecials = () => {
        cy.step('The system rejects the input and displays an error message')
        this.eleLastNameSpan().should('be.visible')
    }

    typeInEmail = (email) => {
        cy.step('check if E-mail field is visible')
        this.fieldEmail().should('be.visible');
        cy.step('input symbols into the “E-mail” field')
        this.fieldEmail().clear().type(email);
        cy.step('press tab to let the field validate the input')
        this.fieldEmail().realPress('Tab');
    }

    checkEmailAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.eleEmailSvg().should('have.attr', 'd').and('include', 'M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }

    checkEmailRejected = () => {
        cy.step('The system rejects the input and displays an error message “Invalid email address”')
        this.eleEmailSpan().should('be.visible').and('contain.text', 'Invalid email address')
    }

    pickCountry = (countryName) => {
        cy.step('check if Country of Residence field is visible');
        this.fieldCountry().should('be.visible');
        cy.step('Select the Country of Residence field');
        this.fieldCountry().click();
        cy.step('Type a Country name into the field');
        this.fieldCountry().type(countryName);
        cy.wait(1000);
        cy.step('press enter to input the Country name into the field');
        this.fieldFirstName().realPress('Enter');
        cy.step('press tab to let the field validate the input');
        this.fieldFirstName().realPress('Tab');
    }

    checkCountryAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.eleCountrySvg().should('have.attr', 'd','M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }

    checkCountryRejected = () => {
        cy.step('The system rejects the input and displays an error message “We are sorry but because of the region of your domicile we are currently unable to onboard you.”')
        this.eleCountrySpan().should('be.visible').and('contain.text', 'We are sorry but because of the region of your domicile we are currently unable to onboard you.')
    }

    typeInDialCode = (dialCode) => {
        cy.step('check if Dial code field is visible')
        this.fieldDialCode().should('be.visible');
        cy.step('Input symbols into the “Dial code” field')
        this.fieldDialCode().clear().type(dialCode);
        cy.step('press tab to let the field validate the input')
        this.fieldDialCode().realPress('Tab');
    }

    checkDialCodeAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.eleDialCodeSvg().should('have.attr', 'd', 'M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }

    pressButtonSubmit = () => {
        cy.step('Press the button to submit the form');
        this.btnSubmit().click();
    }

    checkTermsError = () => {
        this.eleTermsError().should('be.visible');
    }

    tickTermsCheckbox = () => {
        cy.step('Tick the Terms and Conditions checkbox');
        this.eleTermsCheckbox().check({ force: true });
    }

    checkDialCodeNumber = (dialCode) => {
        cy.step('navigate to the Dial code field')
        this.fieldDialCode().should('have.attr', 'value', dialCode);
    }

    typeInPhoneNumber = (phoneNumber) => {
        cy.step('check if Phone number field is visible')
        this.fieldPhoneNumber().should('be.visible');
        cy.step('Input symbols into the “Phone number” field')
        this.fieldPhoneNumber().clear().type(phoneNumber);
        cy.step('press tab to let the field validate the input')
        this.fieldPhoneNumber().realPress('Tab');
    }

    checkPhoneNumberAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.elePhoneNumberSvg().should('have.attr', 'd', 'M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }

    typeInPassword = (password) => {
        cy.step('check if Password field is visible')
        this.fieldPassword().should('be.visible');
        cy.step('Input symbols into the “Password” field')
        this.fieldPassword().clear().type(password);
        cy.step('press tab to let the field validate the input')
        this.fieldPassword().realPress('Tab');
    }

    checkPasswordAccepted = () => {
        cy.step('Green checkmark indicates the valid data is accepted')
        this.elePasswordSvg().should('have.attr', 'd', 'M4.07573 9.65003L0.175729 5.58232C-0.0585762 5.33794 -0.0585762 4.94171 0.175729 4.69731L1.02424 3.81229C1.25854 3.56788 1.63846 3.56788 1.87277 3.81229L4.5 6.55246L10.1272 0.683285C10.3615 0.438905 10.7415 0.438905 10.9758 0.683285L11.8243 1.5683C12.0586 1.81268 12.0586 2.20892 11.8243 2.45332L4.92426 9.65005C4.68994 9.89443 4.31004 9.89443 4.07573 9.65003V9.65003Z');
    }
}

// EXPORT
module.exports = new Form();
