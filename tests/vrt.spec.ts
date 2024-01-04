import { test, expect } from "@playwright/test";

test("TOPページ", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("ブログTOPページ", async ({ page }) => {
  await page.goto("/blog/1");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("記事ページ", async ({ page }) => {
  await page.goto("/blog/typescript-remove-undefined");
  await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixels: 1000 });
});
