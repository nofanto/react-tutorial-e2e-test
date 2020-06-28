Feature('Add Person');

Scenario('Add john doe the janitor to the list', async (I) => {
    I.amOnPage('/');
    await I.startProfiling();
    
    I.see('React Tutorial');

    I.dontSee('john doe');
    I.dontSee('janitor');

    I.fillField('name', 'john doe');
    I.fillField('job', 'janitor');

    I.click('Submit');

    I.see('john doe', 'table');
    I.see('janitor', 'table');


    await I.stopProfiling();
});
