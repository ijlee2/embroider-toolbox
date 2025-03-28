'use strict';

const { embroiderOptimized, embroiderSafe } = require('@embroider/test-setup');

module.exports = async function () {
  const { default: latestVersion } = await import('latest-version');

  return {
    packageManager: 'pnpm',
    scenarios: [
      /*
        If your v2 addons need to support `ember-source@3.28`,
        please update your `blueprints-v2-addon` to use
        `@glimmer/component@1.1.2`.

        Otherwise, you can delete this scenario.
      */
      // {
      //   name: 'ember-lts-3.28',
      //   npm: {
      //     devDependencies: {
      //       '@ember/test-helpers': '2.9.4',
      //       '@types/ember__test-helpers': '2.9.1',
      //       '@types/ember-qunit': '6.1.1',
      //       'ember-a11y-testing': '5.2.1',
      //       'ember-cli': '~3.28.0',
      //       'ember-page-title': '8.2.3',
      //       'ember-qunit': '6.0.0',
      //       'ember-resolver': '11.0.1',
      //       'ember-source': '~3.28.0',
      //     },
      //   },
      // },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await latestVersion('ember-source'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await latestVersion('ember-source', {
              version: 'beta',
            }),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await latestVersion('ember-source', {
              version: 'alpha',
            }),
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
