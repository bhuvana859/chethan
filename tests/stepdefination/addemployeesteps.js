const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")



When('user clicks on PIM', async function () {
   
    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click()
});

When('user clicks on Add Employee submenu', async function () {
    
    await page.locator("//a[text()='Add Employee']").click()
});

When('user enter firstname as {string} and lastname as {string}', async function (firstname, lastname) {
    
    await page.getByPlaceholder("First Name").fill(firstname)

    await page.getByPlaceholder("Last Name").fill(lastname)
});

When('user clicks on save Button', async function () {
    
    await page.locator('button[type="submit"]').click()

});

Then('User should get success Message', async function () {

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
  
});