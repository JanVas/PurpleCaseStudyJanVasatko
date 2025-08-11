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

    it('TC 4.8 - Text field “Last name” rejects invalid symbols – numbers', ()=> {
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

    it('TC 4.13 - “Country of Residence“ field rejects unsupported countries', () => {
        Form.pickCountry('Czech Republic');
        Form.checkCountryRejected();
        Form.pickCountry('Cuba');
        Form.checkCountryRejected();
        Form.pickCountry('Indonesia');
        Form.checkCountryRejected();
    })

    it('TC 4.14 - “Dial code” field accepts valid dial code', () => {
        Form.typeInDialCode('+420');
        Form.checkDialCodeAccepted();
        Form.typeInDialCode('+355');
        Form.checkDialCodeAccepted();
        Form.typeInDialCode('+590');
        Form.checkDialCodeAccepted();
    })

    it('TC 4.16 - “Phone number” field accepts valid phone number', () => {
        Form.typeInPhoneNumber('777123123');
        Form.checkPhoneNumberAccepted();
        Form.typeInPhoneNumber('123456789');
        Form.checkPhoneNumberAccepted();
        Form.typeInPhoneNumber('605757757');
        Form.checkPhoneNumberAccepted();
    })

    it('TC 4.18 - “Password” field accepts valid password', () => {
        Form.typeInPassword('Passw0rd!');
        Form.checkPasswordAccepted();
    })

    it('TC 4.20 - Form cannot be submitted without ticking the “I agree with Terms and Conditions” checkbox', () => {
        Form.pressButtonSubmit();
        Form.checkTermsError();
    })

    it('TC 4.21 - The “Dial code” field changes correctly according to the picked “Country of Residence”', () => {
        Form.pickCountry('Albania');
        Form.checkDialCodeNumber('+355');
        Form.pickCountry('Mali');
        Form.checkDialCodeNumber('+223');
        Form.pickCountry('Turkey');
        Form.checkDialCodeNumber('+90');


    })

    it.only('TC 4.2 - Form can be submitted with valid data', () => {
        Form.typeInFirstName('John');
        Form.checkFirstNameAccepted();
        Form.typeInLastName('Cena');
        Form.checkLastNameAccepted();
        Form.typeInEmail('johncena@gmail.com');
        Form.checkEmailAccepted();
        Form.pickCountry('Albania');
        Form.checkCountryAccepted();
        Form.typeInDialCode('+355');
        Form.checkDialCodeAccepted();
        Form.typeInPhoneNumber('777123123');
        Form.checkPhoneNumberAccepted();
        Form.typeInPassword('Passw0rd!');
        Form.checkPasswordAccepted();
        Form.tickTermsCheckbox();
        Form.pressButtonSubmit();
        // add step - validate that the form was successfully submitted - missing documentation, present Bug 2.7 doesn't allow to check submitted Form
    })


})