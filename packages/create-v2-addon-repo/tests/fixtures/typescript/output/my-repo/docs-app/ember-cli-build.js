'use strict';

const sideWatch = require('@embroider/broccoli-side-watch');
const { Webpack } = require('@embroider/webpack');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

function isProduction() {
  return EmberApp.env() === 'production';
}

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: [],
    },

    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },

    trees: {
      app: sideWatch('app', {
        watching: [],
      }),
    },

    // Add options here
  });

  const options = {
    packagerOptions: {
      cssLoaderOptions: {
        modules: {
          localIdentName: isProduction()
            ? '[sha512:hash:base64:5]'
            : '[path][name]__[local]',
          mode: (resourcePath) => {
            // We want to enable the local mode only for our own host app.
            // All other addons should be loaded in the global mode.
            const hostAppLocation =
              'docs-app/node_modules/.embroider/rewritten-app';

            return resourcePath.includes(hostAppLocation) ? 'local' : 'global';
          },
        },
        sourceMap: !isProduction(),
      },
      publicAssetURL: '/',
      webpackConfig: {
        module: {
          rules: [
            {
              test: /(node_modules\/\.embroider\/rewritten-app\/)(.*\.css)$/i,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: !isProduction(),
                    postcssOptions: {
                      config: './postcss.config.js',
                    },
                  },
                },
              ],
            },
            /*
              Uncomment this rule to load asset files, e.g. fonts, icons, etc.
              See https://webpack.js.org/guides/asset-modules/ for more information.
            */
            // {
            //   test: /(node_modules\/\.embroider\/rewritten-app\/)(.*\.(ttf|woff))$/,
            //   type: 'asset/resource',
            // },
          ],
        },
      },
    },
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    splitAtRoutes: [],
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticComponents: true,
    staticEmberSource: true,
    staticHelpers: true,
    staticModifiers: true,
  };

  return require('@embroider/compat').compatBuild(app, Webpack, options);
};
