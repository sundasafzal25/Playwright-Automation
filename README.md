# 🎭 Playwright Automation 

[![Playwright CI/CD](https://github.com/sundasafzal25/Playwright-Automation/actions/workflows/main.yml/badge.svg)](https://github.com/sundasafzal25/Playwright-Automation/actions/workflows/main.yml)

A professional test automation framework built with **Playwright** and **JavaScript**. This project demonstrates end-to-end testing of the Sauce Demo e-commerce application using the **Page Object Model (POM)**.

## 🚀 Key Features
* **Architecture:** Structured using Page Object Model (POM) for modularity.
* **CI/CD:** Integrated with **GitHub Actions** for automated testing on every push.
* **Reporting:** Dual support for **Playwright HTML** and **Allure Reports**.
* **Clean Code:** Adheres to modern JavaScript practices and folder organization.

## 📁 Project Structure
* **.github/workflows/**: CI/CD Pipeline configuration.
* **pages/**: Contains all Page Object classes.
* **tests/e2e/**: Contains functional test scripts.
* **playwright.config.js**: Central configuration for browsers and environments.

## 🛠️ Commands Reference

Copy and paste these commands into your terminal to set up or run the project:

### 1. Initial Setup
```bash
# Clone the repository
git clone [https://github.com/sundasafzal25/Playwright-Automation.git](https://github.com/sundasafzal25/Playwright-Automation.git)

# Install all required packages
npm install

# Install Playwright browsers (Chromium, Firefox, etc.)
npx playwright install
# Run all tests in headless mode (Standard)
npx playwright test

# Run tests and open the browser window (Headed)
npx playwright test --headed

# Run a specific test file
npx playwright test SauceDemo.spec.js

# View the standard Playwright HTML report
npx playwright show-report

# Generate and open the Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
