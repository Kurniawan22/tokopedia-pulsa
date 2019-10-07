Feature('Test modal rakyat');

Scenario('test something', (I) => {
    I.amOnPage('https://www.tokopedia.com/pulsa/');
    I.wait(5);
    I.fillField('.unf-input-group.css-ozlcme.eqk3cat2 input[name=client_number]','085271694132');
    I.wait(5);
    I.click('._3vGjK ._1ZAC-:nth-child(3)');
    I.wait(5);
    I.click('._2orE7 ._2Mp9y');
    I.wait(10);
    I.fillField('.unf-user-input.mb-16 input[name=email]','one_hmjti@yahoo.com');
    I.wait(5);
    I.click('#login-step-one-form button');
    I.wait(5);
    I.fillField('.unf-user-input__group input[name=password]','');
    I.wait(5);
    I.click('#login-submit');
    I.wait(10);
    I.click('.checkout-footer .checkout-footer-pay .checkout-footer-button');
    I.wait(5);
    I.click('#home .text-center a');
    I.wait(5);
    I.click('#VirtualAccount .payment-list:nth-child(2)');
    I.wait(10);
    I.click('.btn-floating a');
    I.wait(15);
});
