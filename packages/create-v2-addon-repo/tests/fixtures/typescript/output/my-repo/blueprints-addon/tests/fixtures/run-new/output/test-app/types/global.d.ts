import type MyOrgUiButtonRegistry from '@my-org-ui/button/template-registry';
import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';
import 'ember-source/types';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends MyOrgUiButtonRegistry {
    // Add any registry entries from other addons here that your addon itself uses (in non-strict mode templates)
    // See https://typed-ember.gitbook.io/glint/using-glint/ember/using-addons
  }
}
