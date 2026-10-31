import { test, expect } from '@playwright/test';

test('automates demoqa text box screen', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const name = 'Ronak Oza';
  const email = 'ronak.automation@example.com';
  const currentAddress = '123 Automation Street';
  const permanentAddress = '456 Test Avenue';

  await page.fill('#userName', name);
  await page.fill('#userEmail', email);
  await page.fill('#currentAddress', currentAddress);
  await page.fill('#permanentAddress', permanentAddress);
  await page.click('#submit');

  const output = page.locator('#output');
  await expect(output).toBeVisible();
  await expect(output.locator('#name')).toContainText(name);
  await expect(output.locator('#email')).toContainText(email);
  await expect(output.locator('#currentAddress')).toContainText(currentAddress);
  await expect(output.locator('#permanentAddress')).toContainText(permanentAddress);
});
