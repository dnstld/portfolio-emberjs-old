import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | portfolio-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.before(function () {
    this.portfolio = {
      title: 'fake-title',
      category: 'fake-category',
      description: 'fake-description',
      imageURL: 'fake-imageURL',
      imageALT: 'fake-imageALT',
    }
  });

  test('should display portfolio details', async function(assert) {
    await render(hbs`{{portfolio-item portfolio=portfolio}}`);

    assert.dom('[data-test-portfolio-title]').hasText('fake-title');
    assert.dom('[data-test-portfolio-category]').hasText('Type: Front-end - fake-category');
    assert.dom('[data-test-portfolio-description]').hasText('fake-description');
    assert.dom('[data-test-portfolio-image]').hasAttribute('src', 'fake-imageURL', 'The image has src URL');
    assert.dom('[data-test-portfolio-image]').hasAttribute('alt', 'fake-imageALT', 'The image has alt attr');
  });
});
