require('colors');
const { exec } = require('child_process');
const fs = require('fs');
const templates = require('./templates');
const exportComponentTemplate = require('./templates/exportComponent');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log(`Creating Component Templates with name: ${componentName}`);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content);
});

const componentIndexFile = exportComponentTemplate(componentName);
fs.writeFileSync(`${componentDirectory}/index${componentIndexFile.extension}`, componentIndexFile.content);

const componentList = fs.readdirSync('./src/components').filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));

const exportComponents = `
${componentList.map((component) => `import ${component} from './components/${component}';`).join('\n')}

export {${componentList.join(', ')}}
`;

fs.writeFile('./src/index.ts', exportComponents, (err) => {
  if (err) {
    console.log(err);
  } else {
    exec('yarn lint', () => console.log(`Successfully created component under: ${componentDirectory.green}`));
  }
});
