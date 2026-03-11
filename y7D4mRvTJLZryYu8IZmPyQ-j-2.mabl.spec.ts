import { test, expect } from '@playwright/test';


test('Test Case 21445: TC-Login-002: Blank username & password validation', async ({ page, context }) => {
  const variables: Map<string, any> = new Map();
  variables.set('web.defaults.credentials.username', process.env.USERNAME);
  variables.set('web.defaults.credentials.password', process.env.PASSWORD);
  variables.set('web.defaults.url', 'https://wmsqa04.ignition.apteancloud.dev/DSD2/clientportal/apps/cpLogin.html?p=QJFsTz5JBfUo3MfwR7Or7GtaJXF75hyd20HOV3RVsQA%3d');
  // Set viewport size to width 1080 and height 1440
  await page.setViewportSize({width: 1080, height: 1440});
  // Visit URL assigned to variable "app.url"
  await page.goto(replaceMablVariables(`{{@web.defaults.url}}`, variables));
  // Click on the "Login" text field
  // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]`).first().click();
  // Insert value of variable "app.defaults.username" into the "Login" text field
  // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]`).first().type(replaceMablVariables(`{{@web.defaults.credentials.username}}`, variables));
  // Click on the "Password" text field
  // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]`).first().click();
  // Enter a password in the "Password" text field
  // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]`).first().type(`dsd123`);
  // Click on the "Sign In" button
  // These selectors are also valid: '.k-button.k-button-md.k-button-solid.k-button-solid-primary.k-rounded-md.i-primary'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/button[1]`).first().click();
  // Assert "innerText" of the <div> element with text "Please enter a valid user name." equals "Please enter a valid user name."
  // These selectors are also valid: '.i-notification-text'. But we can't guarantee they will be unique
  await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]`).first()).toHaveText(`Please enter a valid user name.`);
});



function replaceMablVariables(value: string, variables: Map<string, any>) {
  const regex = /{{@?([^{}]+)}}/g;
  return value.replace(regex, (_match, p1) => {
    const variable = variables.get(p1);
    if (variable) {
      return variable;
    }
    return p1;
  });
}

