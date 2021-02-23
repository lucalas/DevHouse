/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('./componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
  ],
  actions: data => {
    // This create the file listed below from the handlebars filse
    const actions = [
      {
        type: 'add',
        path: '../../components/{{properCase name}}/index.tsx',
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../components/{{properCase name}}/style.tsx',
        templateFile: './component/style.module.css.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
