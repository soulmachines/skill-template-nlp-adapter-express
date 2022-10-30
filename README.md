# Skill Template - NLP Adapter <br/>[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue)](./LICENSE) [![Node version](https://img.shields.io/badge/npm-v16.14.2-blue)]() [![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)]()

This ExpressJS application is a template for Skill Developers to use as a starting point for writing an NLP Adapter Skill.

See the [Soul Machines Skills Documentation](https://docs.soulmachines.com/skills-api) for more information.

## Pre-requisites:

- [NodeJS v16+](https://nodejs.org/en/)

### Node version

We recommend installing [nvm](https://github.com/nvm-sh/nvm) to manage your NodeJS versions.

This project is configured to use nvm, and the correct version will be installed by running the following command:
```
nvm use
```

## Installation

Install all dependencies using npm.

```
npm install
```

## Local Development

Serve the app using npm.

```
npm start
```

Test the app's endpoints using Postman:

- POST Init: [http://localhost:3000/init]()
- POST Session: [http://localhost:3000/session]()
- POST Execute: [http://localhost:3000/execute]()

## Debugging with VS Code

Using VS Code's debugging tools, you can run the following command to attach a debug process to an already-running app:

```
npm run start:debug
```

- Open "Run and Debug" tab in left sidebar
- Run "Node: Nodemon"
- Select the process for `app.ts`

Add breakpoints by clicking to the left of a line number in the code editor.

## Serve for use with Studio

Localtunnel may be used to generate a public web address for your locally-running Skill, allowing DDNA Studio to connect to your Skill from a live Digital Person.

Generate a URL with a personalized subdomain using the following command, and then use this URL to configure the endpoints in your Skill Definition.

```
npx localtunnel --port 3000 --subdomain your-unique-id
```

## Licensing
This repository is licensed under the Apache License, Version 2.0. See
[LICENSE](./LICENSE) for the full license text.

## Issues
For any issues, please reach out to one of our Customer Success team members.