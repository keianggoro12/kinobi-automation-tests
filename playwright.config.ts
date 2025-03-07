import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default defineConfig({
  testDir: './tests', // Directory for test files
  fullyParallel: false, // Run tests sequentially in each file (more stable)
  forbidOnly: !!process.env.CI, // Prevents accidental `test.only` commits in CI
  retries: process.env.CI ? 2 : 0, // Retry failed tests in CI/CD
  workers: 1, // Number of parallel workers
  reporter: 'html', // Generate test report in HTML format
  maxFailures: 1, // Stop execution after the first failed test

  use: {
    trace: "on-first-retry", // Collect trace only when retrying failed tests
    screenshot: "on", // Capture screenshots on test failure
    headless: false, // Run tests in headed mode to see browser actions
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36", // Set a valid User-Agent
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Use Desktop Chrome settings
    },

    // Uncomment below if you want to test on other browsers
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});