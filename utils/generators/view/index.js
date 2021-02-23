/**
 * View Generator
 */

'use strict';

const viewExists = require('./viewExists');

module.exports = {
  description: 'Add a view in the project and the relative page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Example',
      validate: value => {
        if (/.+/.test(value)) {
          return viewExists(value)
            ? 'A View with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // This create the file listed below from the handlebars filse
    const actions = [
      {
        type: 'add',
        path: '../../views/{{lowerCase name}}/index.tsx',
        templateFile: './view/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../views/{{lowerCase name}}/style.tsx',
        templateFile: './view/style.module.css.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../views/{{lowerCase name}}/type.ts',
        templateFile: './view/type.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../pages/{{lowerCase name}}.ts',
        templateFile: './view/page.ts.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
