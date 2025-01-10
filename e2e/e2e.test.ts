import { expect, test } from '@nuxt/test-utils/playwright'

test('Have login', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.locator('[id="__nuxt"]')).toContainText('Авторизация');
});

test('Uncorrect login', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await page.getByLabel('Логин').fill('test@test.ru');
  await page.getByLabel('Пароль').fill('123');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByRole('alert')).toContainText('Ошибка при вводе логина или пароля');
});
