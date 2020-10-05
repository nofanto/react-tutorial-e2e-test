Feature('Add Person');

Scenario('Add 4 person to the list', async (I) => {

    function addPerson(name, job) {
        I.typeInField('#name', name);
        I.typeInField('#job', job);
        I.pressKey('Enter');
        I.wait(1);
    }

    function deletePerson() {
        I.click('Delete');
        I.wait(1);
    }

    I.amOnPage('/');
    
    I.waitForText('React Tutorial');

    await I.startProfiling();

    addPerson('john doe','janitor');
    addPerson('janet doe', 'cook');
    addPerson('amanda doe', 'cook');
    addPerson('grace doe', 'cook');
    addPerson('jordan doe', 'waiter');
    addPerson('karen doe', 'waiter');
    addPerson('jason doe', 'waiter');

    deletePerson();

    addPerson('gareth doe', 'janitor');
    addPerson('samantha doe', 'cashier');

    deletePerson();

    addPerson('lorry doe', 'cashier');
    addPerson('isabel doe', 'waiter');
    addPerson('debbie doe', 'cashier');

    await I.stopProfiling();
});