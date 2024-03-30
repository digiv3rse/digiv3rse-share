import { test as base, expect } from "@playwright/test";

import { ProfilePage } from "./ProfilePage";

export const test = base.extend<{
  digiProfile: ProfilePage;
  anyProfile: ProfilePage;
}>({
  digiProfile: async ({ page }, use) => {
    const profile = new ProfilePage(page, "digi/digi");
    await use(profile);
  },
  anyProfile: async ({ page }, use) => {
    const profile = new ProfilePage(page, "digi/stani");
    await use(profile);
  },
});

export { expect };
