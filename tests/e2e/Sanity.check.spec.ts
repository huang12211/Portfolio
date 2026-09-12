import { expect, test } from '@playwright/test';

// Checkly is a tool used to monitor deployed environments, such as production or preview environments.
// It runs end-to-end tests with the `.check.spec.ts` extension after each deployment to ensure that the environment is up and running.
// With Checkly, you can monitor your production environment and run `*.check.spec.ts` tests regularly at a frequency of your choice.
// If the tests fail, Checkly will notify you via email, Slack, or other channels of your choice.
// On the other hand, E2E tests ending with `*.spec.ts` are only run before deployment.
// You can run them locally or on CI to ensure that the application is ready for deployment.

// BaseURL needs to be explicitly defined in the test file.
// Otherwise, Checkly runtime will throw an exception: `CHECKLY_INVALID_URL: Only URL's that start with http(s)`
// You can't use `goto` function directly with a relative path like with other *.spec.ts tests.
// Check the example at https://feedback.checklyhq.com/changelog/new-changelog-436

test.describe('Sanity', () => {
  test.describe('Static pages', () => {
    test('should display the homepage', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await expect(page).toHaveTitle(/Elaine Huang's Portfolio/);

      await expect(
        page.getByText('Elaine Huang', { exact: false }).first(),
      ).toBeVisible();
    });

    test('should navigate to the design work page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'Design Work' }).click();
      await expect(page).toHaveURL(/design$/);

      await expect(
        page.getByRole('heading', { name: 'Design Work' }),
      ).toBeVisible();

      await expect(
        page.locator('main').getByRole('link'),
      ).toHaveCount(4);
    });

    test('should navigate to the dev work page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'Dev Work' }).click();
      await expect(page).toHaveURL(/development$/);

      await expect(
        page.getByRole('heading', { name: 'Development Work' }),
      ).toBeVisible();
    });

    test('should navigate to the resume page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'Resume' }).click();
      await expect(page).toHaveURL(/resume$/);

      await expect(
        page.getByRole('heading', { name: 'Elaine Huang' }),
      ).toBeVisible();
    });

    test('should navigate to the contact page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'Contact', exact: true }).click();
      await expect(page).toHaveURL(/contact$/);

      await expect(
        page.getByRole('heading', { name: 'Let\'s connect!' }),
      ).toBeVisible();

      await expect(
        page.getByText('huang12211@gmail.com'),
      ).toBeVisible();
    });
  });
});
