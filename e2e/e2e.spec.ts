import { test, expect } from '@playwright/test';

test('Have login', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('[id="__nuxt"]')).toContainText('Авторизация');
});

test('Uncorrect login', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByLabel('Логин').fill('test@test.ru');
  await page.getByLabel('Пароль').fill('123');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByRole('alert')).toContainText('Ошибка при вводе логина или пароля');
});

test('Correct login', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByLabel('Логин').fill('test@test.ru');
  await page.getByLabel('Пароль').fill('test');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByRole('toolbar')).toContainText('test@test.ru');
});