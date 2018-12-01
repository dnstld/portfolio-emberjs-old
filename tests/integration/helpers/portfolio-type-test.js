import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | portfolio-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly for a Design type', async function(assert) {
    this.set('inputValue', 'graphic-design');

    await render(hbs`{{portfolio-type inputValue}}`);

    assert.equal(
      this.element.textContent.trim(), 
      'Design'
    );
  });

  test('it renders correctly for a Front-end type', async function(assert) {
    this.set('inputValue', 'front-end');

    await render(hbs`{{portfolio-type inputValue}}`);

    assert.equal(
      this.element.textContent.trim(), 
      'Front-end'
    );
  });
});
