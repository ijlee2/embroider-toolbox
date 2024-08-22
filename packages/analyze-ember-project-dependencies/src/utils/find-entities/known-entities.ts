import type { PackageName, ProjectDataEntities } from '../../types/index.js';

/*
  Feel free to add packages below.
*/
const KNOWN_ENTITIES = new Map<PackageName, Partial<ProjectDataEntities>>([
  [
    '@ember/render-modifiers',
    {
      modifiers: ['did-insert', 'did-update', 'will-destroy'],
    },
  ],
  [
    'ember-a11y-refocus',
    {
      components: ['navigation-narrator'],
    },
  ],
  [
    'ember-can',
    {
      helpers: ['can', 'cannot'],
      services: ['abilities', 'can'],
    },
  ],
  [
    'ember-cli-string-helpers',
    {
      helpers: [
        'camelize',
        'capitalize',
        'classify',
        'dasherize',
        'html-safe',
        'humanize',
        'lowercase',
        'titleize',
        'trim',
        'truncate',
        'underscore',
        'uppercase',
        'w',
      ],
    },
  ],
  [
    'ember-composable-helpers',
    {
      helpers: [
        'append',
        'call',
        'chunk',
        'compact',
        'compute',
        'dec',
        'drop',
        'entries',
        'filter',
        'filter-by',
        'find-by',
        'flatten',
        'from-entries',
        'group-by',
        'has-next',
        'has-previous',
        'inc',
        'includes',
        'intersect',
        'invoke',
        'join',
        'keys',
        'map',
        'map-by',
        'next',
        'noop',
        'object-at',
        'optional',
        'pick',
        'pipe',
        'pipe-action',
        'previous',
        'queue',
        'range',
        'reduce',
        'reject-by',
        'repeat',
        'reverse',
        'shuffle',
        'slice',
        'sort-by',
        'take',
        'toggle',
        'toggle-action',
        'union',
        'values',
        'without',
      ],
    },
  ],
  [
    'ember-concurrency',
    {
      helpers: ['cancel-all', 'perform', 'task'],
    },
  ],
  [
    'ember-container-query',
    {
      components: ['container-query'],
      helpers: ['aspect-ratio', 'height', 'width'],
      modifiers: ['container-query'],
    },
  ],
  [
    'ember-css-modules',
    {
      helpers: ['local-class'],
    },
  ],
  [
    'ember-element-helper',
    {
      helpers: ['element'],
    },
  ],
  [
    'ember-engines',
    {
      components: ['link-to-external'],
    },
  ],
  [
    'ember-event-helpers',
    {
      helpers: [
        'prevent-default',
        'stop-immediate-propagation',
        'stop-propagation',
      ],
    },
  ],
  [
    'ember-file-upload',
    {
      components: ['file-dropzone'],
      helpers: ['file-queue'],
      services: ['file-queue'],
    },
  ],
  [
    'ember-flatpickr',
    {
      components: ['ember-flatpickr'],
    },
  ],
  [
    'ember-focus-trap',
    {
      modifiers: ['focus-trap'],
    },
  ],
  [
    'ember-href-to',
    {
      helpers: ['href-to'],
    },
  ],
  [
    'ember-in-viewport',
    {
      modifiers: ['in-viewport'],
      services: ['in-viewport'],
    },
  ],
  [
    'ember-intl',
    {
      helpers: [
        'format-date',
        'format-list',
        'format-message',
        'format-number',
        'format-relative',
        'format-time',
        't',
      ],
      services: ['intl'],
    },
  ],
  [
    'ember-lazy-mount',
    {
      components: ['lazy-mount'],
      services: ['engine-loader'],
    },
  ],
  [
    'ember-link',
    {
      components: ['link'],
      helpers: ['link'],
      services: ['link-manager'],
    },
  ],
  [
    'ember-math-helpers',
    {
      helpers: [
        'abs',
        'acosh',
        'acos',
        'add',
        'asinh',
        'asin',
        'atan2',
        'atanh',
        'atan',
        'cbrt',
        'ceil',
        'clz32',
        'cosh',
        'cos',
        'div',
        'expm1',
        'exp',
        'floor',
        'fround',
        'gcd',
        'hypot',
        'imul',
        'lcm',
        'log-e',
        'log10',
        'log1p',
        'log2',
        'max',
        'min',
        'mod',
        'mult',
        'pow',
        'random',
        'round',
        'sign',
        'sin',
        'sqrt',
        'sub',
        'sum',
        'tanh',
        'tan',
        'trunc',
      ],
    },
  ],
  [
    'ember-modal-dialog',
    {
      components: ['modal-dialog'],
    },
  ],
  [
    'ember-on-helper',
    {
      helpers: ['on', 'on-document', 'on-window'],
    },
  ],
  [
    'ember-page-title',
    {
      helpers: ['page-title'],
      services: ['page-title'],
    },
  ],
  [
    'ember-power-select',
    {
      components: ['power-select', 'power-select-multiple'],
      helpers: [
        'ember-power-select-is-equal',
        'ember-power-select-is-group',
        'ember-power-select-is-selected-present',
      ],
    },
  ],
  [
    'ember-render-helpers',
    {
      helpers: [
        'did-insert-helper',
        'did-update-helper',
        'will-destroy-helper',
      ],
    },
  ],
  [
    'ember-responsive',
    {
      helpers: ['media'],
      services: ['media'],
    },
  ],
  [
    'ember-set-helper',
    {
      helpers: ['set'],
    },
  ],
  [
    'ember-source',
    {
      components: ['input', 'link-to', 'textarea'],
      helpers: [
        'action',
        'array',
        'component',
        'concat',
        'debugger',
        'each',
        'each-in',
        'else',
        'fn',
        'get',
        'has-block',
        'has-block-params',
        'hash',
        'helper',
        'if',
        'in-element',
        'input',
        'let',
        'log',
        'modifier',
        'mount',
        'mut',
        'outlet',
        'unbound',
        'unique-id',
        'unless',
        'yield',
      ],
      modifiers: ['action', 'on'],
      services: ['router', 'store'],
    },
  ],
  [
    'ember-stargate',
    {
      components: ['portal', 'portal-target'],
      services: ['-portal'],
    },
  ],
  [
    'ember-style-modifier',
    {
      modifiers: ['style'],
    },
  ],
  [
    'ember-svg-jar',
    {
      helpers: ['svg-jar'],
    },
  ],
  [
    'ember-truth-helpers',
    {
      helpers: [
        'and',
        'eq',
        'gt',
        'gte',
        'is-array',
        'is-empty',
        'is-equal',
        'lt',
        'lte',
        'not',
        'not-eq',
        'or',
        'xor',
      ],
    },
  ],
  [
    'embroider-css-modules',
    {
      helpers: ['local'],
    },
  ],
]);

export { KNOWN_ENTITIES };
