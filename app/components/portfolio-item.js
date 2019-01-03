import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  client: readOnly('portfolio.attributes.client'),
  clientInitial: computed('client', function() {
    let { client } = this; 
    return client.substring(0, 1);
  }).readOnly(),
});
