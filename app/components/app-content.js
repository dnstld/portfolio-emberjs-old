import Component from '@ember/component';
import { not } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  row: false,
  column: not('row').readOnly(),
});
