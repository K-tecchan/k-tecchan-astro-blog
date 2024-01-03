import { test, expect } from "@playwright/test";

test("TOPページ", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot();
});

test("ブログTOPページ", async ({ page }) => {
  await page.goto("/blog/1");
  await expect(page).toHaveScreenshot();
});

test("記事ページ", async ({ page }) => {
  await page.goto("/blog/typescript-remove-undefined");
  await expect(page).toHaveScreenshot();
});
