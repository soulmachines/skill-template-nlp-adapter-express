# NLP Adapter Template

This ExpressJS application is a template for Skill Developers to use as a starting point for writing an NLP Adapter Skill.

See the [Soul Machines Skills Documentation](https://docs.soulmachines.com/skills-api) for more information.

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

## Serve for use with Studio

```
npx localtunnel --port 3000 --subdomain your-unique-id
```
