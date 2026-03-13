import { test, expect } from '@playwright/test';


test('Master Table Plants Field validations for New Plants creations', async ({ page, context }) => {
  const variables: Map<string, any> = new Map();
  variables.set('web.defaults.credentials.username', process.env.USERNAME);
  variables.set('web.defaults.credentials.password', process.env.PASSWORD);
  variables.set('web.defaults.url', 'https://dsd1.ignition.apteancloud.dev/clientportal/apps/cpLogin.html?p=QJFsTz5JBfUo3MfwR7Or7GtaJXF75hyd20HOV3RVsQA%3d');
  // Set viewport size to width 1080 and height 1440
  await page.setViewportSize({width: 1080, height: 1440});
  // Visit URL assigned to variable "web.defaults.url"
  await page.goto(replaceMablVariables(`{{@web.defaults.url}}`, variables));
  // Do you need this feature? Create a request in our product portal https://productportal.mabl.com/
  // [EvaluateFlow] Step is not supported for Playwright test export
  // Do you need this feature? Create a request in our product portal https://productportal.mabl.com/
  // [EvaluateFlow] Step is not supported for Playwright test export
  // Click on the "New" button
  // These selectors are also valid: '.k-button.k-button-md.k-button-solid.k-button-solid-primary.k-rounded-md.btn.btn-light.i-primary'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/button[2]`).first().click();
  // Assert that innerText of the <div> element with text "New Plant" equals New Plant
  // These selectors are also valid: '.modal-header'. But we can't guarantee they will be unique
  await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]`).first()).toHaveText(`New Plant`);
  // Wait until the <h5> element that meets the selected criteria is present
  // These selectors are also valid: '.modal-title'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/h5[1]`).waitFor({timeout: 15000});
  // Click on the "OK" button
  // These selectors are also valid: '.k-button.k-button-md.k-button-solid.k-button-solid-primary.k-rounded-md.btn.btn-dark.i-primary'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]`).first().click();
  // IF condition
  // These selectors are also valid: '.modal.show.d-block'. But we can't guarantee they will be unique
  if (await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]`).first().innerText()) {
    // Generate random string for variable "Plant"
    variables.set(`Plant`, `0000${Math.round((Math.pow(36, 2 + 1) - Math.random() * Math.pow(36, 2))).toString(36).slice(1)}`);
    // Click on the "* Plant #:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]`).first().click();
    // Enter {{user.Plant}} into the "* Plant #:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]`).first().type(replaceMablVariables(`{{@user.Plant}}`, variables));
    // Click on the "OK" button
    // These selectors are also valid: '.k-button.k-button-md.k-button-solid.k-button-solid-primary.k-rounded-md.btn.btn-dark.i-primary'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]`).first().click();
    // Wait until the <div> element that meets the selected criteria is present
    // These selectors are also valid: '.toast-message'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[2]/div[1]/div[2]`).waitFor({timeout: 15000});
    // Assert that innerText of the <div> element with text "The following fields are required: Plant Name." equals The following fields are required: Plant Name.
    // These selectors are also valid: '.toast-message'. But we can't guarantee they will be unique
    await expect(page.locator(`//html[1]/body[1]/div[2]/div[1]/div[2]`).first()).toHaveText(`The following fields are required: Plant Name.`);
    // Click on the "* Plant #:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]`).first().click();
    // Enter "" into the "* Plant #:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]`).first().type(``);
    // Generate random string for variable "Plant_Name"
    variables.set(`Plant_Name`, `${Math.round((Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10))).toString(36).slice(1)}`);
    // Click on the "* Name:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]`).first().click();
    // Enter {{user.Plant_Name}} into the "* Name:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]`).first().type(replaceMablVariables(`{{@user.Plant_Name}}`, variables));
    // Click on the "OK" button
    // These selectors are also valid: '.k-button.k-button-md.k-button-solid.k-button-solid-primary.k-rounded-md.btn.btn-dark.i-primary'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]`).first().click();
    // Assert that innerText of the <div> element with text "The following fields are required: Plant #." equals The following fields are required: Plant #.
    // These selectors are also valid: '.toast-message'. But we can't guarantee they will be unique
    await expect(page.locator(`//html[1]/body[1]/div[2]/div[1]/div[2]`).first()).toHaveText(`The following fields are required: Plant #.`);
    // Wait until the <div> element that meets the selected criteria is present
    // These selectors are also valid: '.toast-message'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[2]/div[1]/div[2]`).waitFor({timeout: 15000});
    // Click on the "* Name:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]`).first().click();
    // Enter "" into the "* Name:" text field
    // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
    await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]`).first().type(``);
    // END
  }
  // Enter {{user.Plant}} into the "* Plant #:" text field
  // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]`).first().type(replaceMablVariables(`{{@user.Plant}}`, variables));
  // Enter {{user.Plant_Name}} into the "* Name:" text field
  // These selectors are also valid: '.k-input.k-input-md.k-rounded-md.k-input-solid'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]`).first().type(replaceMablVariables(`{{@user.Plant_Name}}`, variables));
  // Click on the "Cancel" button
  // These selectors are also valid: '.k-button.k-button-md.k-button-solid.k-button-solid-secondary.k-rounded-md.btn.btn-light.i-secondary'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]`).first().click();
  // Click on the <div> element with text "DU"
  // These selectors are also valid: '.user-info-initial-container'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]`).first().click();
  // Click on the <div> element with text "Sign out"
  // These selectors are also valid: '.user-info-line.user-info-line-signout'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[4]`).first().click();
  // Do you need this feature? Create a request in our product portal https://productportal.mabl.com/
  // [EvaluateFlow] Step is not supported for Playwright test export
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

