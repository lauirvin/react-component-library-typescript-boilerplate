<p align="center">
  <a href="https://github.com/lauirvin/react-component-library-typescript-boilerplate">
    <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="150" />
  </a>
</p>
<h1 align="center">
  ReactJS Component Library TypeScript Boilerplate
</h1>

[Powered by Storybook](https://storybook.js.org/)

## 🧰 Prerequisites

1. Install [NodeJS](https://nodejs.org/en/)
2. Install [yarn](https://classic.yarnpkg.com/en/)
3. Install [Prettier ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

## 🚀 Development

1. Locate the repository in terminal/bash
2. Install dependencies - `yarn install` in the repository directory
3. Run `yarn dev` in the repository directory

### Import library locally

1. Run `yarn link` in the repository directory
2. Run `yarn link "name-of-library"` in project that want to use this library (Set name of library in `package.json`)

```
import { SampleComponent } from 'name-of-library'
```

### Storybook

1.  Run `yarn storybook` in repository directory
2.  Open browser and navigate to http://localhost:6006/

### Testing

- Run `yarn test `in the repository directory

### Create new components

- Run `yarn generate "ComponentName" `in the repository directory

## 🎁 Production deployment

### Publishing

- Run `yarn publish` in the repository and follow the CLI instructions

## 👷 Built With

- [ReactJS](https://reactjs.org/) - Frontend Javascript web framework
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript
- [Storybook](https://storybook.js.org/) - UI development tool
- [Jest](https://jestjs.io/) - JavaScript testing framework

## 📚 Author

- **Irvin Ives Lau** - [lauirvin](https://github.com/lauirvin)
- https://www.irviniveslau.com
