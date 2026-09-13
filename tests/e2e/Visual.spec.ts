import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByText('Elaine Huang', { exact: false }).first(),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the design work page', async ({ page }) => {
      await page.goto('/design');

      await expect(
        page.getByRole('heading', { name: 'Design Work' }),
      ).toBeVisible();

      await percySnapshot(page, 'Design Work');
    });

    test('should take screenshot of the development work page', async ({ page }) => {
      await page.goto('/development');

      await expect(
        page.getByRole('heading', { name: 'Development Work' }),
      ).toBeVisible();

      await percySnapshot(page, 'Development Work');
    });

    test('should take screenshot of the resume page', async ({ page }) => {
      await page.goto('/resume');

      await expect(
        page.getByRole('heading', { name: 'Elaine Huang' }),
      ).toBeVisible();

      await percySnapshot(page, 'Resume');
    });

    test('should take screenshot of the contact page', async ({ page }) => {
      await page.goto('/contact');

      await expect(
        page.getByRole('heading', { name: 'Let\'s connect!' }),
      ).toBeVisible();

      await percySnapshot(page, 'Contact');
    });
  });
});
