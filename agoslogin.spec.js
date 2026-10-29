//AGOS Weight and Balance System Workflow.


import { test,expect } from '@playwright/test';

 test('AGOS W&B System Workflow ', async ({ page }) => {
   
    await page.goto('https://d2pixnftayl5sy.cloudfront.net/login');
    await page.waitForTimeout(2000);
    await page.locator('[type="email"]').fill('nishita.pawar@neebal.com');
    await page.locator('[type="password"]').fill('Nishita123');
    await page.waitForTimeout(1000);

    //Sign In
    await page.locator('[type="submit"]').scrollIntoViewIfNeeded();
    await expect(page.locator('[type="submit"]')).toBeEnabled();
    await page.locator('[type="submit"]').nth(0).click();
    await page.waitForTimeout(1000);

   //Navigate to InProgress Tab
    //await page.getByRole('button', { name: 'In Progress' }).click();
    //await page.waitForTimeout(2000);

    //Navigate to Closed Tab
    //await page.getByRole('button', { name: ' Closed ' }).click();
    //await page.waitForTimeout(2000);


    //Create Flight button
    /*await page.getByRole('button', { name: 'Create Flight' }).click();

    //Select Airline
    await page.getByRole('option', {id: 'a4e700684be3-2'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Select an airline').click();
    await page.getByText('Alerce Airlines', { exact: true }).click();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');

    //Select Registration No.
    await expect(page.locator('[formcontrolname="registrationNo"]')).toBeEnabled(); 
    await expect(page.locator('[formcontrolname="registrationNo"]')).toBeVisible(); 
    await page.keyboard.press('Enter'); 
    await page.keyboard.press('ArrowDown'); 
    await page.waitForTimeout(1000);
     await page.keyboard.press('ArrowDown'); 
     await page.waitForTimeout(1000);
     await page.keyboard.press('ArrowDown'); 
     await page.waitForTimeout(1000);
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(1000);
     const options = await page.locator('.ng-option').allTextContents();
     console.log(options);

     //Enter Flight Number
     await page.keyboard.press('Tab'); 
     await page.getByPlaceholder('Flight Number').fill('76590');
     await page.waitForTimeout(1000);
     await page.keyboard.press('Tab'); 

     //Select Departure Station
     await expect(page.locator('[formcontrolname="dept"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="dept"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.waitForTimeout(1000);
     await page.keyboard.press('ArrowDown'); 
     await page.waitForTimeout(1000);
     await page.keyboard.press('ArrowDown'); 
     await page.waitForTimeout(1000);
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(1000);
     await page.locator('[formcontrolname="dept"]').click();
     await page.getByText('ABC', { exact: true }).nth(1).click();
     await page.keyboard.press('Tab');

        //Select Arrival Station
     await expect(page.locator('[formcontrolname="arr"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="arr"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('Enter'); 
     await page.locator('[formcontrolname="arr"]').click();
     await page.getByText('789', { exact: true }).nth(1).click();
     await page.keyboard.press('Tab');

     //Enter STD Date
     await page.locator('[formcontrolname="stdDate"]').fill('18-Sep-2026');

     //Enter STD Time
     const stdTime = page.locator('[formcontrolname="stdTime"] input');
     await stdTime.fill('11:00');

     //Enter STA Date
     await page.locator('[formcontrolname="staDate"]').fill('18-Sep-2026');

     //Enter STA Time
      const staTime = page.locator('[formcontrolname="staTime"] input');
      await staTime.fill('11:01');
      await page.waitForTimeout(1000);

      //Click on "+" to add Flight Leg
      //await page.getByTitle('Add Leg').click();
      //await page.waitForTimeout(1000);

      //Click on "-" to remove Flight Leg
      //await page.getByTitle('Remove Leg').click();
      //await page.waitForTimeout(1000);

      //Click Create Flight button
      await page.locator('[type="submit"]').scrollIntoViewIfNeeded();
      await expect(page.locator('[type="submit"]')).toBeEnabled();
      await page.locator('[type="submit"]').click();
      await page.waitForTimeout(1000);

      //Click on Cancel Button for Creating Flight
      //await page.locator('[class="btn btn-outline-secondary"]').click();
      //await page.waitForTimeout(1000);

      //Click on Create Button for Confirmation
      await page.locator('[class="btn popup-btn popup-btn-primary ng-star-inserted"]').nth(0).click();
      await page.waitForTimeout(1000);*/

      //Click on Cancel Button for Confirmation
      //await page.locator('[class="btn p-1 px-3 mx-3 u-border-gray u-radius"]').click();
      //await page.waitForTimeout(1000);

      //Searching Flight
     //await page.locator('[class="form-control u-small search-input"]').fill('KF54321');
     //await page.waitForTimeout(1000);

     //Assigning CLC
     /*await page.locator('[class="btn btn-outline-primary btn-sm assign-button"]').nth(0).click();
     await page.waitForTimeout(1000);
     await page.getByPlaceholder('Assign User').click();
     await page.keyboard.press('ArrowDown'); 
     await page.getByText('Trushank Kadu', { exact: true }).click();
     await page.waitForTimeout(1000);*/

     //Assigning LM
     /*await page.locator('[class="btn btn-outline-primary btn-sm assign-button"]').nth(0).click();
     await page.waitForTimeout(1000);
     await page.getByPlaceholder('Select Load Masters').click();
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('Escape'); 
     await page.getByRole('button', { name: 'Assign' }).click();
     await page.waitForTimeout(1000);*/
     
     //Plan Now or Start Planning Button
     //await page.locator('[class="action-btn action-btn-green"]').nth(0).click();
     //await page.waitForTimeout(1000);
     //await page.locator('[class="action-btn action-btn-red"]').nth(0).click();
     //await page.waitForTimeout(1000);

     //Click on Create Payload button
     //await page.getByRole('button', { name: ' Create Payload ' }).click();
     //await page.waitForTimeout(2000);

     //Select ULD Type in Create Payload window.
     /*await expect(page.locator('[formcontrolname="uldType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="uldType"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="uldType"]').click();
     await page.getByText('AAP', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

     //By Inputing the ULD Type in the ULD Type field.
     /*await expect(page.locator('[formcontrolname="uldType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="uldType"]')).toBeVisible(); 
     await page.locator('[formcontrolname="uldType"]').click();
      const ULD = page.locator('[formcontrolname="uldType"] input');
      await ULD.fill('PMC');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('PMC', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/

      //Enter ULD Serial Number in Create Payload window.
      //await page.locator('[formcontrolname="uldSerialNumber"]').fill('90826TY');
      //await page.waitForTimeout(1000);

      //Select Contour Code in Create Payload window.
     /*await expect(page.locator('[formcontrolname="contCode"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="contCode"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="contCode"]').click();
     await page.getByText('Q4', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

     //By Inputing the Cont Code in the Contour Code field.
     /*await expect(page.locator('[formcontrolname="contCode"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="contCode"]')).toBeVisible(); 
     await page.locator('[formcontrolname="contCode"]').click();
      const ccode = page.locator('[formcontrolname="contCode"] input');
      await ccode.fill('Q4');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('Q4', { exact: true }).nth(1).click();
      await page.waitForTimeout(1000);*/

      //Select Destination in Create Payload window.
     /*await expect(page.locator('[formcontrolname="destination"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="destination"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="destination"]').click();
     await page.getByText('ASP', { exact: true }).nth(1).click();
     await page.waitForTimeout(1000);*/

     //By Inputing the Destination in the Destination field.
     /*await expect(page.locator('[formcontrolname="destination"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="destination"]')).toBeVisible(); 
     await page.locator('[formcontrolname="destination"]').click();
      const code = page.locator('[formcontrolname="destination"] input');
      await code.fill('BKK');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('BKK', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/

      //Select Load Type in Create Payload window.
     /*await expect(page.locator('[formcontrolname="loadType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="loadType"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="loadType"]').click();
     await page.getByText('C', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

     //By Inputing the Load Type in the Load Type field.
     /*await expect(page.locator('[formcontrolname="loadType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="loadType"]')).toBeVisible(); 
     await page.locator('[formcontrolname="loadType"]').click();
      const load = page.locator('[formcontrolname="loadType"] input');
      await load.fill('C');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('C', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/

      //Enter Gross Weight in Create Payload window.
      //await page.locator('[formcontrolname="grossWeight"]').fill('1200');
      //await page.waitForTimeout(1000);

      //Select Special Load Type in Create Payload window.
     /*await expect(page.locator('[formcontrolname="specialLoadType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="specialLoadType"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="specialLoadType"]').click();
     await page.getByText('CAO', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

     //By Inputing the Special Load Type in the Special Load Type field.
     /*await expect(page.locator('[formcontrolname="specialLoadType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="specialLoadType"]')).toBeVisible(); 
     await page.locator('[formcontrolname="specialLoadType"]').click();
      const spl = page.locator('[formcontrolname="specialLoadType"] input');
      await spl.getByRole('option', { name: 'CAO' });
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('CAO', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/

      //Select Overhang checkbox in Create Payload screen
      //await page.locator('#toggleOverhang').check();
      //await page.waitForTimeout(1000);

      //Select Indent checkbox in Create Payload screen
      //await page.locator('#toggleIntend').check();
      //await page.waitForTimeout(1000);

      //Select AFT Option
     /*await expect(page.locator('[formcontrolname="direction"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="direction"]')).toBeVisible(); 
     await page.locator('[formcontrolname="direction"]').click(); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="direction"]').selectOption('AFT'); 
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(1000);*/

      //Select Center Option
     /*await expect(page.locator('[formcontrolname="direction"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="direction"]')).toBeVisible(); 
     await page.locator('[formcontrolname="direction"]').click(); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="direction"]').selectOption('Center'); 
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(1000);*/

      //Select Forward Option
     /*await expect(page.locator('[formcontrolname="direction"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="direction"]')).toBeVisible(); 
     await page.locator('[formcontrolname="direction"]').click(); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
      await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="direction"]').selectOption('Forward'); 
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(1000);*/

      //Select Walkway Option
     /*await expect(page.locator('[formcontrolname="direction"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="direction"]')).toBeVisible(); 
     await page.locator('[formcontrolname="direction"]').click(); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="direction"]').selectOption('Walkway'); 
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(1000);*/

     //Enter Length in cm.
      //await page.locator('[formcontrolname="length"]').fill('1200');
      //await page.waitForTimeout(1000);

     //Select Link Radiobutton in Associated/Link Cargos field
     //await page.getByRole('radio', { name: 'Link' }).check();
     //await page.waitForTimeout(2000);

     //Click on Select Payload field.
     //await page.locator('[formcontrolname="linkCargos"]').click();
     //await page.waitForTimeout(2000);

     //Check the checkboxes of Linked/Associated
     //await page.getByRole('option', { name: 'PMC54321XY' }).click();
     //await page.waitForTimeout(2000);

     //Select Associated Radiobutton in Associated/Link Cargos field
     //await page.getByRole('radio', { name: 'Associated' }).check();
     //await page.waitForTimeout(2000);

     //Select None Radiobutton in Associated/Link Cargos field
     //await page.getByRole('radio', { name: 'None' }).check();
     //await page.waitForTimeout(2000);

      //Select Pallet Stack checkbox in Create Payload screen
      //await page.locator('#pallet-stack-check').check();
      //await page.waitForTimeout(1000);

      //Enter pallet stacks in the field
      //await page.locator('[formcontrolname="palletStackData"]').fill('PMC43256AZ');
      //await page.waitForTimeout(1000);

      //Click on to Save Button
      //await page.getByRole('button', { name: ' Save ' }).click();
      //await page.waitForTimeout(2000);

      //Click on Clear All button in Manage Payload screen.
      //await page.getByRole('button', { name: ' Clear All ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Cancel button for Confirmation pop-up for clearing the payload
      //await page.getByRole('button', { name: ' Cancel ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Delete button for Confirmation pop-up for clearing the payload
      //await page.getByRole('button', { name: ' Delete ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Previous button in Manage Payload screen.
      //await page.getByRole('button', { name: ' Previous ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Next button in Manage Payload screen.
      //await page.getByRole('button', { name: ' Next ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Planning Load icon.
      //await page.getByText('Planning Load').click();
      //await page.waitForTimeout(1000);

      //Click on Assign Load Sequence
      //await page.getByRole('button', { name: ' Assign Load Sequence ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Cargo for assigning sequence
      //await page.locator('div.corner.center.mt-2').nth(1).click();
      //await page.waitForTimeout(1000);
      //await page.locator('div.corner.center.mt-2').nth(2).click();
      //await page.waitForTimeout(1000);

      //Click on Download button.
      //await page.getByRole('button', { name: ' Download ' }).click();
      //await page.waitForTimeout(5000);

     //Click on Planning Area button.
      //await page.getByRole('button', { name: ' Planning Area ' }).click();
      //await page.waitForTimeout(2000);

      //Click on Manage Fuel icon.
      //await page.getByText('Manage Fuel').click();
      //await page.waitForTimeout(1000);

      //Click on Review icon
      //await page.getByText('Review').click();
      //await page.waitForTimeout(1000);

     //Click on to Cancel Button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(2000);

     //Click on to Template Button
     //await page.getByRole('button', { name: ' Template ' }).click();
     //await page.waitForTimeout(2000);

     //Click on KG or LBS Radio button

     //Select KG Radiobutton
     //await page.getByRole('radio', { name: 'KG' }).check();
     //await page.waitForTimeout(2000);

     //Select LBS Radiobutton
     //await page.getByRole('radio', { name: 'LBS' }).check();
     //await page.waitForTimeout(2000);

     //Click on Upload button
     //await page.getByRole('button', { name: ' Upload ' }).click();
     //await page.waitForTimeout(2000);

     //Confirm Template

     //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(2000);

     //Click on Confirm button
     //await page.getByRole('button', { name: ' Confirm ' }).click();
     //await page.waitForTimeout(2000);

     //Click on Edit icon for editing the payload
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').click();
      //await page.waitForTimeout(1000);

      //Click on Delete icon for deleting the payload
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn ng-star-inserted"]').click();
      //await page.waitForTimeout(1000);

      //Click on Cancel button from Confirmation pop-up for deleting the payload
      //await page.getByRole('button', { name: ' Cancel ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Delete button from Confirmation pop-up for deleting the payload
      //await page.getByRole('button', { name: ' Delete ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Chevron Down icon
      //await page.locator('[class="bi bi-chevron-down"]').click();
      //await page.waitForTimeout(1000);

      //Add and Remove Observer

      //Add Observer
      //await page.getByTitle('Add Observer').click();
      //await page.waitForTimeout(1000);

      //Remove Observer
      //await page.getByTitle('Remove Observer').click();
      //await page.waitForTimeout(1000);

      //Add and Remove Courier

      //Add Courier
      //await page.getByTitle('Add Courier').click();
      //await page.waitForTimeout(1000);

      //Remove Courier
      //await page.getByTitle('Remove Courier').click();
      //await page.waitForTimeout(1000);

      //  Drag and drop the cargo in the position
      /*const cargo = page.locator('.card-header').first();
       const target = page.locator('.cdk-drop-list deck-cell main.ng-star-inserted').first();
      await cargo.waitFor({ state: 'visible' });
      await target.waitFor({ state: 'visible' });
      // Drags the mouse from a point
      // await page.mouse.move();
      // await page.mouse.down();
// Drops the mouse to another point
await page.mouse.move();
await page.mouse.up();(target);
  
     //await expect(page.locator('text=PMC12345XY')).toBeVisible();
     //await expect(targetBay.locator('[data-zone-id="71207"]')).toContainText('Q4');

  
     //Linked Flights
     //await page.locator('[class="btn-icon-fl"]').nth(0).click();
     //await page.waitForTimeout(1000);

     //Add Flight Leg button
     //await page.locator('[class="btn btn-primary btn-sm ml-4 ms-3"]').nth(0).click();
     //await page.waitForTimeout(1000);

     //Click Cancel button of Add Flight Leg window
      //await page.locator('[class="btn btn-outline-secondary"]').click();
      //await page.waitForTimeout(1000);

     //Close Window of Linked Flights
     //await page.getByText('Close', { exact: true }).click();
     //await page.waitForTimeout(1000);

     //Clone Flight in the Linked Flight Window
     //await page.getByTitle('Clone Flight', { exact: true }).nth(0).click();
     //await page.waitForTimeout(1000);     

      //Click Cancel button of Clone Flight window in Linked Flight Window
      //await page.locator('[class="btn btn-outline-secondary"]').click();
      //await page.waitForTimeout(1000);

      //Edit Flight in the Linked Flight Window 
     //await page.getByTitle('Edit Flight', { exact: true }).nth(0).click();
     //await page.waitForTimeout(1000);     

      //Click Cancel button of Edit Flight window in Linked Flight Window
      //await page.getByRole('button', { name: 'Cancel' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Delete Flight from Linked Flight Window
     //await page.getByTitle('Delete Flight', { exact: true }).nth(0).click();
     //await page.waitForTimeout(1000);  

     //Cancel button for from Confirmation pop-up in Linked Flight Window
     //await page.locator('[class="btn p-1 px-3 mx-3 u-border-gray u-radius"]').nth(0).click();
     //await page.waitForTimeout(1000);  

     //Delete button from Confirmation pop-up in Linked Flight Window
      //await page.locator('[type="submit"]').click();
      //await page.waitForTimeout(1000);

      //Clone Flight icon
     //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
     //await page.waitForTimeout(1000);

     //Cancel button of Clone Flight
      //await page.locator('[class="btn btn-outline-secondary"]').click();
      //await page.waitForTimeout(1000);

      //Edit Flight icon
     //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(1).click();
     //await page.waitForTimeout(1000);     

      //Click Cancel button of Edit Flight window.
      //await page.getByRole('button', { name: 'Cancel' }).nth(0).click();
      //await page.waitForTimeout(1000);

     //Delete Flight icon
     //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn ng-star-inserted"]').click();
     //await page.waitForTimeout(1000);  

     //Cancel button from Confirmation pop-up of Delete Flight
      //await page.locator('[class="btn p-1 px-3 mx-3 u-border-gray u-radius"]').click();
      //await page.waitForTimeout(1000);

     //Delete button from Confirmation pop-up of Delete Flight
      //await page.locator('[class="btn p-1 px-3 mx-3 u-border-gray u-radius btn-delete ng-star-inserted"]').click();
      //await page.waitForTimeout(1000);

      //Edit Flight Number in Edit Flight Screen
      /*await page.locator('[formcontrolname="flightNumber"]').click(); 
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');
      await page.locator('[formcontrolname="flightNumber"]').fill('KF09090'); 
      await page.waitForTimeout(1000);

     //Edit Registration No.
     await page.keyboard.press('Tab'); 
     await expect(page.locator('[formcontrolname="registrationNumber"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="registrationNumber"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('Enter'); 
     await page.waitForTimeout(5000);

      //Edit Schedule Departure Date, Scheduled Departure Time

      //Edit Schedule Departure Date field
      await page.locator('[formcontrolname="scheduledDepartureDate"]').click(); 
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');
      await page.locator('[formcontrolname="scheduledDepartureDate"]').fill('29-Jun-2026'); 
     await page.waitForTimeout(1000);

      //Edit Schedule Departure Time field
      const stdTime = page.locator('[formcontrolname="scheduledDepartureTime"] input');
      await stdTime.fill('11:00');
      await page.waitForTimeout(1000);

      // Estimated Departure Date and Estimated Departure Time

     //Edit Estimated Departure Date field
      await page.locator('[formcontrolname="estimatedDepartureDate"]').click(); 
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');
      await page.locator('[formcontrolname="estimatedDepartureDate"]').fill('29-Jun-2026'); 
     await page.waitForTimeout(1000);

     //Edit Estimated Departure Time field
      const etdTime = page.locator('[formcontrolname="estimatedDepartureTime"] input');
      await etdTime.fill('11:00');
      await page.waitForTimeout(1000);

      //Edit Scheduled Arrival Date and Scheduled Arrival Time

     //Edit Scheduled Arrival field
     await page.locator('[formcontrolname="scheduledArrivalDate"]').click(); 
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');
      await page.locator('[formcontrolname="scheduledArrivalDate"]').fill('29-Jun-2026'); 
     await page.waitForTimeout(1000);

     //Edit Estimated Arrival Time field
      const staTime = page.locator('[formcontrolname="scheduledArrivalTime"] input');
      await staTime.fill('11:01');
      await page.waitForTimeout(1000);*/

      //Edit Destination by selecting another one
     /*await expect(page.locator('[formcontrolname="arr"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="arr"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowUp');
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="arr"]').click();
     await page.getByText('BRU', { exact: true }).nth(0).click();
     await page.waitForTimeout(2000);*/

     //Edit Assigned CLC To field
     /*await expect(page.locator('[formcontrolname="assignedTo"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="assignedTo"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowUp');
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="assignedTo"]').click();
     await page.getByText('Rahul Sharma', { exact: true }).nth(0).click();
     await page.waitForTimeout(2000);*/

     //Edit Assigned LM To field
     /*await expect(page.locator('[formcontrolname="assignedLMto"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="assignedLMto"]')).toBeVisible(); 
     await page.locator('[formcontrolname="assignedLMto"]').click();         
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.getByText('Jai Sharma', { exact: true }).nth(0).click();
     await page.locator('[formcontrolname="assignedLMto"]').click();         
     await page.waitForTimeout(1000);*/


     //Edit Flight Status
     /*await expect(page.locator('[bindlabel="status"]')).toBeEnabled(); 
     await expect(page.locator('[bindlabel="status"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowUp'); 
     await page.keyboard.press('ArrowUp'); 
     await page.locator('[bindlabel="status"]').click();
     await page.getByText('CANCELLED', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

     //Enter Remarks field
     //await page.getByPlaceholder('Add comment here...').fill('Details Updated');
     //await page.waitForTimeout(1000);

     //Save Changes Button
     //await page.locator('[class="btn btn-primary btn-sm ng-star-inserted"]').click();
     //await page.waitForTimeout(1000);

     //Cancel button from Confirmation pop-up in Edit Flight
      //await page.locator('[class="btn p-1 px-3 mx-3 u-border-gray u-radius"]').click();
      //await page.waitForTimeout(1000);

      //Save button from Confirmation pop-up in Edit Flight
      //await page.locator('[class="btn p-1 px-3 mx-3 u-border-gray u-radius btn-primary ng-star-inserted"]').click();
      //await page.waitForTimeout(1000);

      //Navigating to Audit History Tab
      //await page.getByRole('button', { name: 'Audit History' }).click();
      //await page.waitForTimeout(2000);

      //Click Cancel button of Audit History window.
      //await page.getByRole('button', { name: 'Cancel' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Filter function

      //Click on Filter Button
     /*await page.getByRole('button', { name: 'Filters Filter Icon' }).nth(0).click();

     //Check the Created By Me checkbox
     await page.locator('[formcontrolname="createdByMe"]').check();       
     await page.waitForTimeout(1000);

     //Check the Assigned To Me checkbox
     //await page.locator('[formcontrolname="assignedToMe"]').check();       
     //await page.waitForTimeout(1000);

     //Status selection
     await expect(page.locator('[formcontrolname="status"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="status"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="status"]').click();
     await page.getByText('Closed', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);

     //From Date 
     await page.locator('[formcontrolname="fromDate"]').fill('29-Jun-2026');

     //To Date 
     await page.locator('[formcontrolname="toDate"]').fill('29-Jun-2026');
     await page.waitForTimeout(1000);

     //Origin Selection
     await expect(page.locator('[formcontrolname="origin"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="origin"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="origin"]').click();
     await page.getByText('789', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);

     //Destination Selection
     await expect(page.locator('[formcontrolname="destination"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="destination"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="destination"]').click();
     await page.getByText('321', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);

     //Route or Flight Number Selection
     await expect(page.locator('[formcontrolname="routeOrFlightNo"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="routeOrFlightNo"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="routeOrFlightNo"]').click();
     await page.getByText('KF1992', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);

   //Registration Number Selection
     await expect(page.locator('[formcontrolname="registrationNo"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="registrationNo"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="registrationNo"]').click();
     await page.getByText('F-AGOS7', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);

     //Click on Apply Filters button
    //await page.getByRole('button', { name: ' Apply Filters ' }).nth(0).click();
    //await page.waitForTimeout(1000);

    //Click on Clear All button
    await page.getByRole('button', { name: ' Clear All ' }).nth(0).click();
    await page.waitForTimeout(1000);*/

    //Downloading Excel File
     //await page.locator('[class="btn btn-outline-secondary btn-sm"]').click();
     //await page.waitForTimeout(1000);

     //Pagination

    /*await page.getByRole('button', { name: ' 2 ' }).nth(0).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: ' Previous ' }).nth(0).click();
    await page.waitForTimeout(1000);
     
    await page.getByRole('button', { name: ' 3 ' }).nth(0).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: ' Next ' }).nth(0).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: ' 4 ' }).nth(0).click();
    await page.waitForTimeout(1000);*/

    //Manage Fuel
    
    //Enter Block Fuel
     //await page.locator('[formcontrolname="blockFuel"]').fill('50000');
     //await page.waitForTimeout(1000);

     //Enter Taxi Fuel
     //await page.locator('[formcontrolname="taxiFuel"]').fill('2000');
     //await page.waitForTimeout(1000);

     //Enter Trip Fuel
     //await page.locator('[formcontrolname="tripFuel"]').fill('48000');
     //await page.waitForTimeout(1000);

     //Select Fuel Density in kg/l
     /*await expect(page.locator('[formcontrolname="fuelDensity"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="fuelDensity"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="fuelDensity"]').click();
     await page.getByText('0.820', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');*/


     //By Inputing the Fuel Density in the Fuel Density in kg/l field.
     /*await expect(page.locator('[formcontrolname="fuelDensity"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="fuelDensity"]')).toBeVisible(); 
     await page.locator('[formcontrolname="fuelDensity"]').click();
      const load = page.locator('[formcontrolname="fuelDensity"] input');
      await load.fill('0.820');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('C', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/

     //Enter Proposed OFM.
     //await page.locator('[formcontrolname="proposedOfmFuel"]').fill('2000');
     //await page.waitForTimeout(1000);

     //Select Ballast Fuel Tank
     /*await expect(page.locator('[formcontrolname="ballastFuelTank"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="ballastFuelTank"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="ballastFuelTank"]').click();
     await page.getByText('Main Tank', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

    //By Inputing the Ballast Fuel in the Ballast Fuel Tank field.
     /*await expect(page.locator('[formcontrolname="ballastFuelTank"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="ballastFuelTank"]')).toBeVisible(); 
     await page.locator('[formcontrolname="ballastFuelTank"]').click();
      const load = page.locator('[formcontrolname="ballastFuelTank"] input');
      await load.fill('Main Tank');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('C', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/
   

     //Enter Ballast Fuel
     //await page.locator('[formcontrolname="ballastFuel"]').fill('2000');
     //await page.waitForTimeout(1000);

      //Enter Fuel Deviation Comments
     //await page.locator('[formcontrolname="fuelDeviationComment"]').fill('Remarks');
     //await page.waitForTimeout(1000);

     //Select Non Standard Fueling checkbox in Manage Fuel screen
      //await page.locator('#nonStandardFueling').check();
      //await page.waitForTimeout(1000);

      //Select Fuel Tank
    /*await expect(page.locator('[formcontrolname="fuelTank"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="fuelTank"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="fuelTank"]').click();
     await page.getByText('Main Tank', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);*/

    //By Inputing the Fuel Tank in the Fuel Tank field.
     /*await expect(page.locator('[formcontrolname="fuelTank"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="fuelTank"]')).toBeVisible(); 
     await page.locator('[formcontrolname="fuelTank"]').click();
      const load = page.locator('[formcontrolname="fuelTank"] input');
      await load.fill('Main Tank');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('C', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);*/

      //Select Fuel Density
     /* await expect(page.locator('[formcontrolname="fuelTank"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="fuelTank"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrollername="fuelDensity"]').click();
     await page.getByText('0.800', { exact: true }).nth(1).click();
     await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');*/


     //By Inputing the Fuel Density in the Fuel Density field.
     /*await expect(page.locator('[formcontrolname="fuelDensity"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="fuelDensity"]')).toBeVisible(); 
     await page.locator('[formcontrolname="fuelDensity"]').click();
      const load = page.locator('[formcontrolname="fuelDensity"] input');
      await load.fill('0.820');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('C', { exact: true }).nth(1).click();
      await page.waitForTimeout(1000);*/

      //Enter Fuel Weight
      //await page.locator('[formcontrolname="fuelWeight"]').fill('2000');
      //await page.waitForTimeout(1000);

      //Click on Reset button in Manage Fuel screen.
      //await page.getByRole('button', { name: ' Reset ' }).nth(0).click();
      //await page.waitForTimeout(1000);

     //Click on Ok button.
     //await page.getByRole('button', { name: ' Ok ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).nth(0).click();
      //await page.waitForTimeout(1000);
      

     //Click on Next button in Manage Fuel screen.
      //await page.getByRole('button', { name: ' Next ' }).nth(0).click();
      //await page.waitForTimeout(1000);

     //Click on Ok button.
     //await page.getByRole('button', { name: ' Ok ' }).nth(0).click();
      //await page.waitForTimeout(1000);

     //Click on Next button in Manage Fuel screen.
      //await page.getByRole('button', { name: ' Next ' }).nth(0).click();
      //await page.waitForTimeout(1000);

     //Click on Ok button.
     //await page.getByRole('button', { name: ' Ok ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Submit button
     //await page.getByRole('button', { name: ' Submit ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Review Stage
      //Access Load Plan Section
      //await page.locator('[class="bi bi-chevron-down"]').nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Edit icon
      //await page.getByTitle('Edit').nth(8).click();
      //await page.waitForTimeout(1000);

      //Fill in Weight in (KG) and Index
       /*await page.locator('[type="number"]').nth(0).fill('12346');
       await page.waitForTimeout(1000);
       await page.keyboard.press('Tab'); 
       await page.locator('[type="number"]').nth(1).fill('12346');
       await page.waitForTimeout(1000);*/

       //Enter name in the text field.
       //await page.locator('textarea.form-control').fill('This is my remarks');       await page.waitForTimeout(1000);
       //await page.waitForTimeout(1000);

      //Select Intentional Radiobutton in Lateral Imbalance.
     //await page.getByRole('radio', { name: 'Intentional' }).check();
     //await page.waitForTimeout(2000);

     //Select Yes Radiobutton in Temp Sensitive Cargo.
     //await page.getByRole('radio', { name: 'Yes' }).check();
     //await page.waitForTimeout(2000);

      //Click on Save button
      //await page.getByRole('button', { name: ' Save ' }).click();
      //await page.waitForTimeout(1000);

       //Click on Cancel button.
      //await page.getByRole('button', { name: ' Cancel ' }).click();
      //await page.waitForTimeout(1000);



      //Reports Section
      //await page.locator('[class="bi bi-chevron-down"]').nth(1).click();
      //await page.waitForTimeout(1000);

      //View Reports.(LDS)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close').nth(0).click();

      //Download Reports(LDS)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(1).click();
      //await page.waitForTimeout(1000);

      //View Reports (LDS-G)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(3).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close close-report no-print').click();

      //Download Reports(LDS-G)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(4).click();
      //await page.waitForTimeout(1000);

      //View Reports (LIRF-G)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(6).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close close-report no-print').nth(1).click();

      //Download Reports(LIRF-G)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(7).click();
      //await page.waitForTimeout(8000);

      //Messages Section
      //await page.locator('[class="bi bi-chevron-down"]').nth(2).click();
      //await page.waitForTimeout(1000);

      //View Messages.(LDM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close').nth(0).click();

      //Download Messages(LDM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(1).click();
      //await page.waitForTimeout(1000);

     //View Messages.(ACARS)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(3).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close').nth(0).click();

      //Download Messages(ACARS)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(4).click();
      //await page.waitForTimeout(1000);

     //View Messages.(P-CPM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(6).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close').nth(0).click();

      //Download Messages(P-CPM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(7).click();
      //await page.waitForTimeout(1000);

     //View Messages.(UCM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(9).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close').nth(0).click();
      //await page.getByRole('button', { name: ' Pallet Stack ' }).nth(0).click();
      //await page.waitForTimeout(1000);
      /*await expect(page.locator('[formcontrolname="uldType"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="uldType"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="uldType"]').click();
     await page.getByText('PMC', { exact: true }).nth(0).click();
     await page.waitForTimeout(1000);
     await page.locator('[formcontrolname="uldSerial"]').fill('90826TY');
     await page.waitForTimeout(1000);
     await expect(page.locator('[formcontrolname="dest"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="dest"]')).toBeVisible(); 
     await page.keyboard.press('Enter'); 
     await page.keyboard.press('ArrowDown'); 
     await page.locator('[formcontrolname="dest"]').click();
     await page.getByText('BKK', { exact: true }).nth(1).click();
     await page.waitForTimeout(1000);
     await page.keyboard.press('Tab');
     await page.keyboard.press('Enter');
     //await page.keyboard.press('Tab');
     //await page.keyboard.press('Enter');
      //await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);*/

     //Click on Back button
      //await page.getByRole('button', { name: ' Back ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Send button
      //await page.getByRole('button', { name: ' Send ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Cancel button
      //await page.getByRole('button', { name: ' Cancel ' }).click();
      //await page.waitForTimeout(1000);

      //Click on Print button
      //await page.getByRole('button', { name: ' Print ' }).click();
      //await page.waitForTimeout(1000);

      //Click on Save button
      //await page.getByRole('button', { name: ' Save ' }).click();
      //await page.waitForTimeout(1000);

      //Download Messages(UCM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(10).click();
      //await page.waitForTimeout(1000);

      //View Messages.(CPM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(12).click();
      //await page.waitForTimeout(1000);
      //await page.locator('.btn-close').nth(0).click();

     //Download Messages(CPM)
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(13).click();
      //await page.waitForTimeout(1000);

      //Click Close Flight button
      //await page.getByRole('button', { name: ' Close Flight ' }).nth(0).click();
      //await page.waitForTimeout(1000);

      //Confirmation pop-up (Click Close Flight option)
      //await page.getByRole('button', { name: ' Close Flight ' }).nth(1).click();
      //await page.waitForTimeout(1000);

      //Confirmation pop-up (Click Cancel option)
      //await page.getByRole('button', { name: ' Cancel ' }).nth(1).click();
      //await page.waitForTimeout(1000);

      //Master Management

     //Select Masters options in Master Management.
      await page.locator('[class="bi bi-chevron-down ms-1"]').nth(0).click();
      await page.waitForTimeout(1000);
      //Select User Management
      //await page.keyboard.press('ArrowDown'); 
      //Select Aircraft Management
      //await page.keyboard.press('ArrowDown'); 
      //Select Airline Management
      await page.keyboard.press('ArrowDown'); 
      //Select Airport Management
      //await page.keyboard.press('ArrowDown'); 
      //Select ULD Management
      //await page.keyboard.press('ArrowDown'); 
      //Select Contour Management
      //await page.keyboard.press('ArrowDown'); 
      //Select Stagewise TAT Management
      //await page.keyboard.press('ArrowDown'); 
      await page.keyboard.press('Enter'); 
      await page.waitForTimeout(1000);

      //User Management

      //Create User button
      await page.getByRole('button', { name: 'Create User' }).click();
      await page.waitForTimeout(1000);

      //Select Role (CLC Team)
    await page.getByRole('option', {id: 'a78b786d9d3e-0'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("- select -").nth(0).click();   
    await page.locator('[aria-posinset="1"]').hover();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);

    //Select Role (Loadmaster)
    /*await page.getByRole('option', {id: 'a78b786d9d3e-1'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("- select -").nth(0).click();   
    await page.locator('[aria-posinset="2"]').hover();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);


    //Select Role (Super Admin)
    await page.getByRole('option', {id: 'a78b786d9d3e-2'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("- select -").nth(0).click();   
    await page.locator('[aria-posinset="3"]').hover();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);*/

    //Enter First Name
    await page.locator('[formcontrolname="firstName"]').fill('Ramesh');
    await page.waitForTimeout(1000);

    //Enter Last Name
    await page.locator('[formcontrolname="lastName"]').fill('Verma');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');

    //Select Designation (Loadmaster-In House)
    /*await page.getByRole('option', {id: 'abd73ca52d11-0'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("- select -").nth(0).click();   
    await page.locator('[aria-posinset="1"]').hover();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);*/

    //Select Designation (Loadmaster-External)
    await page.getByRole('option', {id: 'abd73ca52d11-1'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("- select -").nth(1).click();   
    //await page.locator('[aria-posinset="2"]').hover();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);

    //Select Designation (Station Master)
    /*await page.getByRole('option', {id: 'abd73ca52d11-2'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("- select -").nth(0).click();   
    await page.locator('[aria-posinset="3"]').hover();
    await page.keyboard.press('Enter'); 
    await page.waitForTimeout(1000);*/

    //Enter Email
    await page.locator('[formcontrolname="email"]').fill('test@123.com');
    await page.waitForTimeout(1000);

    //Enter Mobile Number
    await page.locator('[formcontrolname="mobileNumber"]').fill('9870650432');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    //Select All Assigned Airport 
    await page.locator('[type="checkbox"]').nth(0).check();
    await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    //Select All Airlines
   await page.locator('[type="checkbox"]').nth(-1).check();   
    await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');


    //Click Create button for creating user
    await page.locator('[type="submit"]').scrollIntoViewIfNeeded();
    await expect(page.locator('[type="submit"]')).toBeEnabled();
    await page.locator('[type="submit"]').nth(0).click();
    await page.waitForTimeout(1000);

    //Click on Confirmation Create button
    await page.locator('[type="submit"]').nth(1).click();
    await page.waitForTimeout(1000);

      //Click on Edit icon for editing the user (Update User)
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(2).click();
      await page.waitForTimeout(5000);
      await page.getByRole('radio', { name: 'Inactive' }).click();
      await page.waitForTimeout(2000);
      await page.locator('[type="submit"]').nth(0).click();
      await page.waitForTimeout(1000);
      await page.locator('[type="submit"]').nth(1).click();
      await page.waitForTimeout(1000);*/

      //Delete the user.
      await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(3).click();
      await page.waitForTimeout(2000);

      //cancel button
      await page.locator('[type="button"]').nth(0).click();
      await page.waitForTimeout(1000);

      //Delete button
      //await page.locator('[type="submit"]').nth(0).click();
      //await page.waitForTimeout(1000);

      //Aircraft Management

      //Create Aircraft button
      //await page.getByRole('button', { name: 'Create Aircraft' }).click();
      //await page.waitForTimeout(1000);
      //await page.keyboard.press('Enter');

      //Aircraft Registration Details.

      //Select Airline.
      /*await page.getByRole('option', {id: 'a893820db250-1'});
      await page.waitForTimeout(1000);
      await page.getByPlaceholder('Select Airline').click();
      await page.getByText('Airways Test', { exact: true }).click();
      await page.waitForTimeout(1000);

      //Select Manufacturer
      await page.getByRole('option', {id: 'a206ed4dfcfd-0'});
      await page.waitForTimeout(1000);
      await page.getByPlaceholder('Select Manufacturer').click();
      await page.getByText('Boeing', { exact: true }).click();
      await page.waitForTimeout(1000);

      //Select Model Name
      await page.getByRole('option', {id: 'a765322c37b1-2'});
      await page.waitForTimeout(1000);
      await page.getByPlaceholder('Select Model').click();
      await page.getByText('777F', { exact: true }).click();
      await page.waitForTimeout(1000);

      //Enter Registration Number
      await page.locator('[formcontrolname="registrationNumber"]').fill('AT-94');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');

      //Enter Aircraft Registration (ACARS)
      await page.locator('[formcontrolname="registrationAcars"]').fill('AT94');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');

      //Select Slider
      await page.locator('[class="slider"]').check();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Length
      await page.getByPlaceholder('Length (inch)').fill('12300');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Middle(Inch)
      await page.getByPlaceholder('Middle (inch)').fill('1234');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');


      //Enter Width
      await page.getByPlaceholder('Width (inch)').fill('256');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      
     await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

      /*console.log("After scroll")
      var field = await page.getByPlaceholder('MLW (KG)');
      console.log("Will print field")
      field.fill("260815")
      console.log(field);

      return;*/

      //Enter MLW(LBs)  
      /*await page.getByPlaceholder('MLW (LBs)').fill('260815'); 
      await page.keyboard.press('Tab');

      //Enter MTOW(LBs)
      await page.getByPlaceholder('MTOW (LBs)').fill("347451");
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Max ZFW (LBs)
      await page.getByPlaceholder('ZFW (LBs)').fill("248115");
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');


      //Enter Max Taxi Weight (LBs)
      await page.getByPlaceholder('Max Taxi Weight (LBs)').fill("348500");
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');


      //Enter Taxi Weight Offset (LBs)
      await page.getByPlaceholder('Taxi Weight Offset (LBs)').fill('0');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter MAC
      await page.getByPlaceholder('MAC').nth(0).fill('278.5');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');


      //Enter LEMAC
      await page.getByPlaceholder('LEMAC').fill('1174.5');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');


      //Enter Index Datum F/A
      await page.getByPlaceholder('Index Datum F/A').fill('1258');
      await page.keyboard.press('Tab');


      //Enter Datum Constant
      await page.getByPlaceholder('Datum Constant').fill('50');
      await page.keyboard.press('Tab');


      //Enter Moment Constant
      await page.getByPlaceholder('Moment Constant').fill('300000');
      await page.keyboard.press('Tab');


     //Enter Allowed Traffic Load (LBs)
      await page.getByPlaceholder('Allowed Traffic Load (LBs)').fill('200000');
      await page.keyboard.press('Tab');


     //Enter Basic Empty Weight (LBs)
      await page.getByPlaceholder('Basic Empty Weight (LBs)').fill('141370');
      await page.keyboard.press('Tab');


     //Enter Basic Empty Index
      await page.getByPlaceholder('Basic Empty Index').fill('41.2');
      await page.keyboard.press('Tab');


     //Enter Decimal precision for Calculations (Max 5 Decimals)
      await page.locator('[formcontrolname="decimalPrecision"]').fill('2');
      await page.keyboard.press('Tab');


      //Enter Remarks
      await page.locator('[formcontrolname="remarks"]').fill('Details successfully filled');

      //Click on Next button
     await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     await page.waitForTimeout(1000);*/

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();

      //Edit Aircraft
      //await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
      //await page.waitForTimeout(1000);

      //Seating Config Section
     //await page.getByRole('button', { name: ' Seating Config ' }).click();
      //await page.waitForTimeout(1000);

      //Enter Max Seating Capacity and Save
      //await page.locator('[formcontrolname="maxSeatingCapacity"]').fill('10');
      //await page.locator('[class="btn btn-sm btn-success z-index-1"]').nth(0).click();
      //await page.waitForTimeout(1000);

      //Click on Add Seating Area Config button
      /*await page.getByRole('button', { name: ' Add Seating Area Config ' }).click();
      await page.waitForTimeout(1000);

      //Select Seating Type
      await page.locator('[formcontrolname="crewType"]').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      //await page.keyboard.press('ArrowDown');

      //Enter Seating Area B.A.
      await page.locator('[formcontrolname="seatAreaBA"]').fill('354');
      await page.waitForTimeout(1000);

      //Enter Personnel Weight (LBs)
      await page.locator('[formcontrolname="weight"]').fill('80');
      await page.waitForTimeout(1000);

      //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);*/

       //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();
     //await page.waitForTimeout(1000);

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
      //await page.waitForTimeout(1000);

      //Aircraft Deck Section
     /*await page.getByRole('button', { name: ' Aircraft Deck ' }).click();
     await page.waitForTimeout(1000);

     //Click Add Deck button
     await page.getByRole('button', { name: ' Add Deck ' }).click();
     await page.waitForTimeout(1000);

     //Select Deck Type
      await page.locator('[formcontrolname="deckType"]').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');

      //Enter FWD B.A.
      await page.locator('[formcontrolname="fwdBA"]').fill('409');
      await page.waitForTimeout(1000);

      //Enter AFT B.A.
      await page.locator('[formcontrolname="aftBA"]').fill('2062');
      await page.waitForTimeout(1000);

     //Enter Width.
      await page.locator('[formcontrolname="width"]').fill('156.6');
      await page.waitForTimeout(1000);

      //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
      //await page.waitForTimeout(1000);*/

       //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();
     //await page.waitForTimeout(1000);

      //Door Config Section
     //await page.getByRole('button', { name: ' Door Config ' }).click();
     //await page.waitForTimeout(1000);

     //Click Add Door Positions
     /*await page.getByRole('button', { name: ' Add Door Positions ' }).click();
     await page.waitForTimeout(1000);

      //Select Deck Type
      await page.locator('[formcontrolname="deckType"]').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');

      //Click on Left/Right Radio button
      await page.getByRole('radio', { name: 'Right' }).click();
      await page.waitForTimeout(1000);

      //Enter Door FWD B.A.
      await page.locator('[formcontrolname="fwdBA"]').fill('506');
      await page.waitForTimeout(1000);

      //Enter Door AFT B.A.
      await page.locator('[formcontrolname="aftBA"]').fill('608');
      await page.waitForTimeout(1000);
      
      //Enter Applicable Position FWD B.A.
      await page.locator('[formcontrolname="applicablePositionFwdBa"]').fill('409');
      await page.waitForTimeout(1000);

      //Enter Applicable Position AFT B.A.
      await page.locator('[formcontrolname="applicablePositionAftBa"]').fill('998');
      await page.waitForTimeout(1000);

      //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);*/

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(1000);

       //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
    //await page.getByRole('button', { name: 'Back' }).click();
    //await page.waitForTimeout(1000);

    //Deck Compartment Section
     //await page.getByRole('button', { name: ' Deck Compartment ' }).click();
     //await page.waitForTimeout(1000);

      //Click Add Compartment
     //await page.getByRole('button', { name: ' Add Compartment ' }).click();
     //await page.waitForTimeout(1000);

      //Select Deck Type
      /*await page.getByRole('combobox').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Enter FWD B.A.
      await page.locator('[formcontrolname="fwdBA"]').fill('409');
      await page.waitForTimeout(1000);

      //Enter AFT B.A.
      await page.locator('[formcontrolname="aftBA"]').fill('899.7');
      await page.waitForTimeout(1000);

      //Enter Weight lbs/inch
      await page.locator('[formcontrolname="weightPerInch"]').fill('53.1');
      await page.waitForTimeout(1000);

      //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);*/

      //Click on Cancel button
     // await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(1000);

      //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();
      //await page.waitForTimeout(1000);

     //Combined Limit Section
     //await page.getByRole('button', { name: ' Combined Limit ' }).click();
     //await page.waitForTimeout(1000);

      //Click Add Limit
     //await page.getByRole('button', { name: ' Add Limit ' }).click();
     //await page.waitForTimeout(1000);

      //Enter FWD B.A.
      /*await page.locator('[formcontrolname="fwdBA"]').fill('396');
      await page.waitForTimeout(1000);

      //Enter AFT B.A.
      await page.locator('[formcontrolname="aftBA"]').fill('409');
      await page.waitForTimeout(1000);

      //Enter Combined Limits
      await page.locator('[formcontrolname="combined_limit"]').fill('65.31');
      await page.waitForTimeout(1000);

      //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);*/

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(1000);

      //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();
      //await page.waitForTimeout(1000);

      //Aircraft Zone Section
     //await page.getByRole('button', { name: ' Aircraft Zone ' }).click();
     //await page.waitForTimeout(1000);

      //Click Add Zone
     //await page.getByRole('button', { name: ' Add Zone ' }).click();
     //await page.waitForTimeout(1000);

     //Enter Zone Code
     /*await page.locator('[formcontrolname="zoneCode"]').fill('R');
      await page.waitForTimeout(1000);

      //Enter FWD B.A.
      await page.locator('[formcontrolname="fwdBA"]').fill('2047');
      await page.waitForTimeout(1000);

      //Enter AFT B.A.
      await page.locator('[formcontrolname="aftBA"]').fill('2143');
      await page.waitForTimeout(1000);

     //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);*/

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(1000);

      //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();
      //await page.waitForTimeout(1000);

      //Position Template Section
     //await page.getByRole('button', { name: ' Position Template ' }).click();
     //await page.waitForTimeout(1000);

      //Click Add Template
     //await page.getByRole('button', { name: ' Add Template ' }).click();
     //await page.waitForTimeout(1000);

     //Select Deck Type
      /*await page.getByRole('combobox').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Enter Template Name
      await page.locator('[formcontrolname="templateName"]').fill('Default');
      await page.waitForTimeout(1000);

      //Check/Uncheck Default Template
      //await page.locator('[formcontrolname="isDefault"]').click();
      //await page.waitForTimeout(1000);

     //Click on Add button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');*/

      //Click on Cancel button
     //await page.getByRole('button', { name: ' Cancel ' }).click();
     //await page.waitForTimeout(1000);

     //Click on Next button
     //await page.locator('[class="btn btn-primary mt-3 float-end"]').click();
     //await page.waitForTimeout(1000);

      //Click on Back button
      //await page.getByRole('button', { name: 'Back' }).click();
      //await page.waitForTimeout(1000);

      //Position Envelope Section
     //await page.getByRole('button', { name: ' Position Envelope ' }).click();
     //await page.waitForTimeout(1000);

      //Click Add Position
     //await page.getByRole('button', { name: ' Add Position ' }).click();
     //await page.waitForTimeout(1000);

     //Select Deck Type
      /*await page.locator('[formcontrolname="deckId"]').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');

     //Select Template
      await page.locator('[formcontrolname="templateId"]').click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Enter Position Display Name
      await page.locator('[formcontrolname="displayName"]').fill('23R');
      await page.waitForTimeout(1000);

      //Enter Location Code
      await page.locator('[formcontrolname="locationCode"]').fill('23');
      await page.waitForTimeout(1000);

      //Select Location side (Left, Right, Center)
      //await page.locator('#locationSideLeft').click();
      //await page.waitForTimeout(1000);

      //Right Side
      await page.locator('#locationSideRight').click();
      await page.waitForTimeout(1000);

      //Center
      //await page.locator('#locationSideCenter').click();
      //await page.waitForTimeout(1000);

      //Centerload Allowed
      //await page.locator('#centerLoadAllowed').click();
      //await page.waitForTimeout(1000);

      //Door Position
      //await page.locator('#doorPosition').click();
      //await page.waitForTimeout(1000);

      //Enter FWD B.A. Inches
      //await page.locator('[formcontrolname="startLocation"]').fill('814.1');
      //await page.waitForTimeout(1000);

      //Enter AFTB.A. Inches
      //await page.locator('[formcontrolname="endLocation"]').fill('874.5');
      //await page.waitForTimeout(1000);

      //Enter Width
      //await page.locator('[formcontrolname="width"]').fill('78.3');
      //await page.waitForTimeout(1000);
     //await page.keyboard.press('Tab');

      //Select Contour Type (LD)
      //await page.keyboard.press('Enter');
      //await page.getByRole('option', {id: 'a4fc0b6d92b4-6'});
      //await page.getByText('LD', { exact: true }).click();

      //Select LD1
      //await page.getByRole('option', {id: 'a9f4434cb0fb-7'});
      //await page.getByText('LD1', { exact: true }).click();

      //Select LD3
      //await page.getByRole('option', {id: 'a9f4434cb0fb-9'});
      await page.getByText('LD3', { exact: true }).click();

      //Select LD3-45
      await page.getByRole('option', {id: 'a9f4434cb0fb-10'});
      await page.getByText('LD3-45', { exact: true }).click();

      //Select LD3-45W
      await page.getByRole('option', {id: 'a9f4434cb0fb-11'});
      await page.getByText('LD3-45W', { exact: true }).click();

      //Select LD8
      await page.getByRole('option', {id: 'a9f4434cb0fb-13'});
      await page.getByText('LD8', { exact: true }).click();

      //Select LDW
      //await page.getByRole('option', {id: 'a4fc0b6d92b4-15'});
      //await page.getByText('LDW', { exact: true }).click();

      //Select PLD
      await page.getByRole('option', {id: 'a0c09548d478-17'});
      await page.getByText('PLD', { exact: true }).click();

      //Select Q5
      //await page.getByRole('option', {id: 'a0c7ec047cb0-20'});
      //await page.getByText('Q5', { exact: true }).click();

      //Select PWG
      await page.getByRole('option', {id: 'a0c7ec047cb0-18'});
      await page.getByText('PWG', { exact: true }).click();

      //Select Q6
      //await page.getByRole('option', {id: 'af16d6a31bdf-21'});
      //await page.getByText('Q6', { exact: true }).click();

      //Select Q4
      //await page.getByRole('option', {id: 'a0c09548d478-19'});
      //await page.getByText('Q4', { exact: true }).click();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab'); 

      //Select ULD Type (AAD)
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);
      //await page.getByRole('option', {id: 'a37974392245-2'});
      //await page.getByText('AAD', { exact: true }).click();

      //Select AAP
      //await page.getByRole('option', {id: 'a37974392245-3'});
      //await page.getByText('AAP', { exact: true }).click();

      //Select AKC
      await page.getByRole('option', {id: 'a7cbc691cd39-7'});
      await page.getByText('AKC', { exact: true }).click();

      //Select AKE
      await page.getByRole('option', {id: 'a7cbc691cd39-8'});
      await page.getByText('AKE', { exact: true }).click();

       //Select AMA
      //await page.getByRole('option', {id: 'a203f20b95d7-12'});
      //await page.getByText('AMA', { exact: true }).click();

      //Select AMJ
      //await page.getByRole('option', {id: 'a27c48a9d9d5-13'});
      //await page.getByText('AMJ', { exact: true }).click();

      //Select AMF
      //await page.getByRole('option', {id: 'a37974392245-14'});
      //await page.getByText('AMF', { exact: true }).click();

      //Select AMP
      //await page.getByRole('option', {id: 'a27c48a9d9d5-16'});
      //await page.getByText('AMP', { exact: true }).click();

      //Select HMJ
      //await page.getByRole('option', {id: 'a37974392245-22'});
      //await page.getByText('HMJ', { exact: true }).click();

      //Select P1P
      //await page.getByRole('option', {id: 'a37974392245-23'});
      //await page.getByText('P1P', { exact: true }).click();

      //Select P6P
      //await page.getByRole('option', {id: 'a37974392245-25'});
      //await page.getByText('P6P', { exact: true }).click();

      //Select PAG
      //await page.getByRole('option', {id: 'a37974392245-29'});
      //await page.getByText('PAG', { exact: true }).click();

     //Select PAJ
      //await page.getByRole('option', {id: 'a37974392245-30'});
      //await page.getByText('PAJ', { exact: true }).click();

      //Select PKC
      await page.getByRole('option', {id: 'a7cbc691cd39-36'});
      await page.getByText('PKC', { exact: true }).click();

      //Select PLA
      await page.getByRole('option', {id: 'a7cbc691cd39-37'});
      await page.getByText('PLA', { exact: true }).click();

     //Select PMC
      //await page.getByRole('option', {id: 'a37974392245-39'});
      //await page.getByText('PMC', { exact: true }).click();

     //Select PMP
      //await page.getByRole('option', {id: 'a37974392245-40'});
      //await page.getByText('PMP', { exact: true }).click();

     //Select PMW
      //await page.getByRole('option', {id: 'a37974392245-41'});
      //await page.getByText('PMW', { exact: true }).click();

     //Select PZA
      //await page.getByRole('option', {id: 'a37974392245-45'});
      //await page.getByText('PZA', { exact: true }).click();

      //Select RKN
      /*await page.getByRole('option', {id: 'a7cbc691cd39-48'});
      await page.getByText('RKN', { exact: true }).click();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      //Select Payload Type (AVI)
      await page.keyboard.press('Enter');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);

      //Select CAO
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select COL
     await page.keyboard.press('ArrowDown');
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select CRT
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select EAT
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select ELI
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select ELM
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select FIL
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select HEG
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select HUM
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select ICE
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      
      //Select LHO
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select MAG
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select PEF
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      //await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select PEM
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select PEP
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select PER
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select PES
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select PIL
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RBI
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

     //Select RBM
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

     //Select RCL
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RCM
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RCX
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select REX
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RFG
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RFL
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RFS
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RFW
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
    

      //Select RIS
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
     
      //Select RLI
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      //Select RLM
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RMD
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RNG
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select ROP
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select ROX
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RPB
     await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RPG
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RRW
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RRY
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RSB
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RSC
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RXB
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RXC
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RXD
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select RXE
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
     
     //Select RXG
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');


     //Select RXS
         await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

     //Select VAL
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      //Enter Max Center Ohg
      await page.locator('[formcontrolname="maxCenterOhg"]').fill('40');

      //Enter Max Walkway Ohg
      await page.locator('[formcontrolname="maxWalkwayOhg"]').fill('0');

      //Enter Max Forward Ohg
      await page.locator('[formcontrolname="maxForwardOhg"]').fill('40');

      //Enter Max Aft Ohg
      await page.locator('[formcontrolname="maxAftOhg"]').fill('40');

      //Enter Max Center Ind
      await page.locator('[formcontrolname="maxCenterInd"]').fill('40');

      //Enter Max Walkway Ind
      await page.locator('[formcontrolname="maxWalkwayInd"]').fill('40');

      //Enter Max Forward Ind
      await page.locator('[formcontrolname="maxForwardInd"]').fill('40');

      //Enter Max Aft Ind
      await page.locator('[formcontrolname="maxAftInd"]').fill('40');

      //Click on Save Position
      await page.locator('[type="submit"]').nth(0).click();
      await page.waitForTimeout(1000);*/

      //Position Weight Limit
      //await page.getByRole('button', { name: ' Position Weight Limits ' }).click();
      //await page.waitForTimeout(1000);

      //Click on Add button.
     //await page.getByRole('button', { name: ' Add ' }).click();
     //await page.waitForTimeout(1000);

     //Enter ULD Size Code
     //await page.locator('[formcontrolname="uldSizeCode"]').fill('M');
     //await page.waitForTimeout(1000);
     //await page.keyboard.press('Tab');

     //Enter Max Weight
     //await page.locator('[formcontrolname="maxWeight"]').fill('6032');
     //await page.waitForTimeout(1000);
     //await page.keyboard.press('Tab');

     //Enter Max Weight with tiedown
     //await page.locator('[formcontrolname="maxWeightWithTieDown"]').fill('7425');
     //await page.waitForTimeout(1000);
     //await page.keyboard.press('Tab');

      //Airline Management

      //Create Airline button
      /*await page.getByRole('button', { name: 'Create Airline' }).click();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      //Upload logo
      await page.getByRole('button', { name: 'Choose file' }).click();
      await page.waitForTimeout(1000);
      const filePath = '/home/neebal/Pictures/Screenshot.png';
      await page.locator('input[type="file"]').setInputFiles(filePath);

      //Enter Airline Name
      await page.locator('[formcontrolname="airlineName"]').fill('Shruti Airline');
      await page.waitForTimeout(1000);

      //Enter Airline Code
      await page.locator('[formcontrolname="airlineCode"]').fill('SA');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');


      //Select Operational Base Airport
      await page.locator('[type="checkbox"]').nth(5).check();   
      await page.locator('[type="checkbox"]').nth(6).check();   
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');


     //By Inputing the Country in the Country field.
     await expect(page.locator('[formcontrolname="countries"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="countries"]')).toBeVisible(); 
     await page.locator('[formcontrolname="countries"]').click();
      const country = page.locator('[formcontrolname="countries"] input');
      await country.fill('India');
      await page.keyboard.press('ArrowDown'); 
      await page.getByText('India', { exact: true }).nth(0).click();
      await page.waitForTimeout(1000);

      //Enter Fuel Deviation % 
      await page.locator('[formcontrolname="fuelDeviationPercent"]').fill('50');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Deviation Records 
      await page.locator('[formcontrolname="deviationRecord"]').fill('7');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');


      //Enter Name 
      await page.locator('[formcontrolname="name"]').fill('Tanuja');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Email 
      await page.locator('[formcontrolname="email"]').fill('test@123.com');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Mobile Number 
      await page.locator('[formcontrolname="mobile"]').fill('9876543210');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Role 
     await page.locator('[formcontrolname="role"]').fill('LM');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
       //Click on Add More button (+)
      //await page.keyboard.press('Enter');

      //Click Create Airline button for creating airline
    await page.locator('[type="submit"]').scrollIntoViewIfNeeded();
    await expect(page.locator('[type="submit"]')).toBeEnabled();
    await page.locator('[type="submit"]').nth(0).click();
    await page.waitForTimeout(1000);

    //Click on Confirmation Create button (Airline Creation)
    await page.locator('[type="submit"]').nth(1).click();
    await page.waitForTimeout(1000);*/

      //Click on Edit icon for editing the airline (Update Airline)
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
      await page.waitForTimeout(5000);
      await page.getByRole('radio', { name: 'Inactive' }).click();
      await page.waitForTimeout(2000);
      await page.locator('[type="submit"]').nth(0).click();
      await page.waitForTimeout(1000);
      await page.locator('[type="submit"]').nth(1).click();
      await page.waitForTimeout(1000);*/

      //View Airline
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(1).click();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: ' Close ' }).click();
      await page.waitForTimeout(1000);*/

      //Airport Management

      //Create Airport button
      /*await page.getByRole('button', { name: 'Create Airport' }).click();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      //Enter ICAO Code
      await page.locator('[formcontrolname="icaoCode"]').fill('SIMP');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter IATA Code
      await page.locator('[formcontrolname="iataCode"]').fill('NYC');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Airport Name
      await page.locator('[title="Airport Name"]').fill('NY Airport');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

     //By Inputing the Country in the Country field.
     await expect(page.locator('[formcontrolname="countryId"]')).toBeEnabled(); 
     await expect(page.locator('[formcontrolname="countryId"]')).toBeVisible(); 
     await page.locator('[formcontrolname="countryId"]').click();
      const countryc = page.locator('[formcontrolname="countryId"] input');
      await countryc.fill('India');
      await page.keyboard.press('ArrowDown'); 
      await page.keyboard.press('Enter');      
      await page.keyboard.press('Tab');
      await page.waitForTimeout(1000);

      //Select or Enter City  
      await page.locator('[formcontrolname="citySelection"]').click();
      const city = page.locator('[formcontrolname="citySelection"] input');
      await city.fill('Mumbai');
      await page.keyboard.press('Enter');   
      await page.waitForTimeout(2000);  
      await page.keyboard.press('Tab'); 

      //Enter Time Zone
      await page.getByPlaceholder('HH:MM').fill('12:00');
     await page.waitForTimeout(1000);

     //Enter Contact Person Name
      await page.locator('[formcontrolname="contactPersonName"]').fill('Jack Fernandes');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Contact Person Email
      await page.locator('[formcontrolname="contactPersonEmail"]').fill('test@123.com');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Contact Person Mobile
      await page.locator('[formcontrolname="contactPersonMobile"]').fill('8908768541');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Click on Save button to save the airport details
      await page.getByRole('button', { name: 'Save' }).click();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      //Click on Confirmation Save button (Airport Creation)
     await page.locator('[type="submit"]').nth(0).click();
     await page.waitForTimeout(1000);*/

    //Click on Edit icon for editing the airport (Update Airport)
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
      await page.waitForTimeout(5000);
      await page.getByRole('radio', { name: 'Inactive' }).click();
      await page.waitForTimeout(2000);
      await page.locator('[form="airportForm"]').nth(0).click();
      await page.waitForTimeout(1000);
      await page.locator('[type="submit"]').nth(0).click();
      await page.waitForTimeout(1000);*/

      //View Airport
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn me-1"]').nth(0).click();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: ' Close ' }).click();
      await page.waitForTimeout(1000);*/

      //ULD Management

      //Create ULD Type button
      /*await page.getByRole('button', { name: 'Create ULD Type' }).click();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      //Enter ULD Type
      await page.locator('[formcontrolname="uldType"]').fill('KIP');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Length
      await page.locator('[formcontrolname="length"]').fill('123');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Width
      await page.locator('[formcontrolname="width"]').fill('123');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Height
      await page.locator('[formcontrolname="height"]').fill('123');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Tare Weight
      await page.locator('[formcontrolname="minWeight"]').fill('1234');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Max Gross Weight Limit
      await page.locator('[formcontrolname="maxWeight"]').fill('5432');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

     //Click on Create ULD button to save the ULD Type details
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      //Click on Confirmation Create button (ULD Type Creation)
     await page.locator('[type="submit"]').nth(0).click();
     await page.waitForTimeout(1000);*/

      //Click on Edit icon for editing the ULD Type (Update ULD Type)
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(1).click();
      await page.waitForTimeout(5000);
      await page.getByRole('radio', { name: 'Inactive' }).click();
      await page.waitForTimeout(2000);
      await page.locator('[type="button"]').nth(0).click();
      await page.waitForTimeout(1000);
      await page.locator('[type="submit"]').nth(0).click();
      await page.waitForTimeout(1000);*/

      //View ULD Type
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(0).click();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: ' Cancel ' }).click();
      await page.waitForTimeout(1000);*/

     //Contour Management

      //Create Contour button
     /* await page.getByRole('button', { name: 'Create Contour' }).click();
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      ////Enter Contour Code
      await page.getByTitle('Contour Code').fill('UII');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Length
      await page.locator('[formcontrolname="length"]').fill('123');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Width
      await page.locator('[formcontrolname="width"]').fill('123');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Height
      await page.locator('[formcontrolname="height"]').fill('123');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Weight Limitation (Min)
      await page.locator('[formcontrolname="weightMin"]').fill('1234');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');

      //Enter Weight Limitation (Max)
      await page.locator('[formcontrolname="weightMax"]').fill('5432');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

     //Click on Save button to save the Contour Code details
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');

      //Click on Confirmation Create button (Contour Code Creation)
     await page.locator('[type="submit"]').nth(1).click();
     await page.waitForTimeout(1000);*/

      //Click on Edit icon for editing the Contour Code (Update Contour Code)
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn"]').nth(1).click();
      await page.waitForTimeout(5000);
      await page.getByRole('radio', { name: 'Inactive' }).click();
      await page.waitForTimeout(2000);
      await page.locator('[type="submit"]').nth(0).click();
      await page.waitForTimeout(1000);
      await page.locator('[type="submit"]').nth(1).click();
      await page.waitForTimeout(1000);*/

      //View Contour Code
      /*await page.locator('[class="btn btn-outline-secondary btn-sm table-action-btn me-1"]').nth(0).click();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: ' Close ' }).click();
      await page.waitForTimeout(1000);*/

      //StageWise TAT Management

      //Select Airline
    /*await page.getByRole('option', {id: 'a8222eb1cdb0-0'});
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Select Airline').click();
    await page.getByText('Shiner Airline', { exact: true }).click();
    await page.waitForTimeout(1000);

    //Enter Hour and Minutes for Arrival Of UWS Sheet before departure.
    await page.getByTitle('Hour').nth(0).click();
    const hour = page.getByTitle('Hour').nth(0);
    await hour.fill('4');
    await page.waitForTimeout(1000);
    await page.getByTitle('Minute').nth(0).click();
    const minute = page.getByTitle('Minute').nth(0);
    await minute.fill('10');
    await page.waitForTimeout(1000);

    //Enter Hour and Minutes for Creation Of LIR before departure.
    await page.getByTitle('Hour').nth(1).click();
    const hour1 = page.getByTitle('Hour').nth(1);
    await hour1.fill('3');
    await page.waitForTimeout(1000);
    await page.getByTitle('Minute').nth(1).click();
    const minute1 = page.getByTitle('Minute').nth(1);
    await minute1.fill('30');
    await page.waitForTimeout(1000);

     //Enter Hour and Minutes for Creation Of Loadsheet before departure.
    await page.getByTitle('Hour').nth(2).click();
    const hours = page.getByTitle('Hour').nth(2);
    await hours.fill('1');
    await page.waitForTimeout(1000);
    await page.getByTitle('Minute').nth(2).click();
    const minutes = page.getByTitle('Minute').nth(2);
    await minutes.fill('15');
    await page.waitForTimeout(1000);

    //Enter Hour and Minutes for Creation Of PFM before departure.
    await page.getByTitle('Hour').nth(3).click();
    const hour3 = page.getByTitle('Hour').nth(3);
    await hour3.fill('5');
    await page.waitForTimeout(1000);
    await page.getByTitle('Minute').nth(3).click();
    const minute3 = page.getByTitle('Minute').nth(3);
    await minute3.fill('10');
    await page.waitForTimeout(1000);

    //Enter Hour and Minutes for Flight Closure.
    await page.getByTitle('Hour').nth(4).click();
    const hour4 = page.getByTitle('Hour').nth(4);
    await hour4.fill('2');
    await page.waitForTimeout(1000);
    await page.getByTitle('Minute').nth(4).click();
    const minute4 = page.getByTitle('Minute').nth(4);
    await minute4.fill('20');
    await page.waitForTimeout(1000);*/

    //Click on Save TAT Data button.
    //await page.getByRole('button', { name: 'Save TAT Data' }).click();
    //await page.waitForTimeout(2000);










});


 