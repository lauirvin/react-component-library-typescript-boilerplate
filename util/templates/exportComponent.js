module.exports = (componentName) => ({
  content: `
  export { default } from "./${componentName}";
  export * from "./${componentName}.types";
`,
  extension: `.tsx`,
});
