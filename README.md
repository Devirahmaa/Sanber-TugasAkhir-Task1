# UI Testing for Kasir Demo

This project automates UI testing for the Kasir Demo application using WebdriverIO, Page Object Model (POM), and Cucumber.

## Overview

- **Application URL**: [Kasir Demo](https://kasirdemo.belajarqa.com) (Alternative: [Kasir Demo Vercel](https://kasirdemo.vercel.app))
- **Testing Tools**: WebdriverIO, Page Object Model, Cucumber

## Prerequisites

- **Node.js**: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Devirahmaa/Sanber-TugasAkhir-Task1.git
    cd Sanber-TugasAkhir-Task1
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

Update `wdio.conf.js` with your test settings. Example snippet:

```javascript
exports.config = {
    runner: 'local',
    path: '/',
    specs: ['./test/features/**/*.feature'],
    capabilities: [{ browserName: 'chrome' }],
    services: ['selenium-standalone'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./test/steps/**/*.js'],
        timeout: 60000
    }
}

## Running Tests
Start the tests with:
npx wdio run wdio.conf.js

## Contributing
Fork the repository.
Create a new branch.
Commit your changes and push.
Submit a pull request.

## License
MIT License. See the LICENSE file for details.
This version is streamlined while still covering the key setup and usage details for your project.



