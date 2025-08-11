import Form from '../models/form.js';

describe('Automated tests', ()=>{
    // BEFORE EACH
    beforeEach(() => {
        cy.step('Open website')
        cy.visit('https://my-qbgzo-qacs2.vgabriel.personal.purple-lab.dev/register/')
    })

    it('TC 4.4 - Text field “First name” accepts valid symbols – letters', ()=> {
        Form.typeInFirstName('John');
        Form.checkFirstNameAccepted();
    })

    it('TC 4.5 - Text field “First name” rejects invalid symbols – numbers', ()=> {
        Form.typeInFirstName('John0');
        Form.checkFirstNameRejectedNumbers();
        Form.typeInFirstName('John1');
        Form.checkFirstNameRejectedNumbers();
        Form.typeInFirstName('John2');
        Form.checkFirstNameRejectedNumbers();
    })

    it('TC 4.6 - Text field “First name” rejects invalid symbols – special characters', ()=> {
        Form.typeInFirstName('John!');
        Form.checkFirstNameRejectedSpecials();
        Form.typeInFirstName('John@');
        Form.checkFirstNameRejectedSpecials();
        Form.typeInFirstName('John(');
        Form.checkFirstNameRejectedSpecials();
        Form.typeInFirstName('John€');
        Form.checkFirstNameRejectedSpecials();
    })

    it('TC 4.7 - Text field “Last name” accepts valid symbols – letters', ()=> {
        Form.typeInLastName('Cena');
        Form.checkLastNameAccepted();
    })

    it('TC 4.8 - Text field “First name” rejects invalid symbols – numbers', ()=> {
        Form.typeInLastName('Cena0');
        Form.checkLastNameRejectedNumbers();
        Form.typeInLastName('Cena1');
        Form.checkLastNameRejectedNumbers();
        Form.typeInLastName('Cena2');
        Form.checkLastNameRejectedNumbers();
    })

    it('TC 4.9 - Text field “Last name” rejects invalid symbols – special characters', ()=> {
        Form.typeInLastName('John!');
        Form.checkLastNameRejectedSpecials();
        Form.typeInLastName('John@');
        Form.checkLastNameRejectedSpecials();
        Form.typeInLastName('John(');
        Form.checkLastNameRejectedSpecials();
        Form.typeInLastName('John€');
        Form.checkLastNameRejectedSpecials();
    })

    it('TC 4.10 - "E-mail” field accepts valid e-mail', () => {
        Form.typeInEmail('johncena@gmail.com');
        Form.checkEmailAccepted();
        Form.typeInEmail('john+cena@gmail.com');
        Form.checkEmailAccepted();
    })

    it('TC 4.11 - "E-mail” field rejects invalid e-mail', () => {
        Form.typeInEmail('emailaddress');
        Form.checkEmailRejected();
        Form.typeInEmail('emailaddress@');
        Form.checkEmailRejected();
        Form.typeInEmail('@provider.domain');
        Form.checkEmailRejected();
        Form.typeInEmail('emailaddress@.domain');
        Form.checkEmailRejected();
        Form.typeInEmail('emailaddress@provider.');
        Form.checkEmailRejected();
    })

    it('TC 4.12 - “Country of Residence“ field accepts supported countries', () => {
        Form.pickCountry('Albania');
        Form.checkCountryAccepted();
        Form.pickCountry('Benin');
        Form.checkCountryAccepted();
        Form.pickCountry('Montenegro');
        Form.checkCountryAccepted();
    })

    it.only('TC 4.13 - “Country of Residence“ field rejects unsupported countries', () => {
        Form.pickCountry('Czech Republic');
        Form.checkCountryRejected();
        Form.pickCountry('Cuba');
        Form.checkCountryRejected();
        Form.pickCountry('Indonesia');
        Form.checkCountryRejected();
    })


})