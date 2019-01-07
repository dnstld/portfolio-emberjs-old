import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | portfolio-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.before(function () {
    this.portfolio = {
      "client": "fake-client",
      "title": "fake-title",
      "date": "fake-date",
      "tools": ["fake-tool-1", "fake-tool-2"],
      "category": ["fake-category-1", "fake-category-2"],
      "description": "fake-description",
      "image-url": "fake-image-url",
      "image-alt": "fake-image-alt",
    }
  });

  skip('should display portfolio details', async function(assert) {
    await render(hbs`{{portfolio-item portfolio=portfolio}}`);

    assert.dom('[data-test-portfolio-client]').hasText('fake-client');
    assert.dom('[data-test-portfolio-title]').hasText('fake-title');
    assert.dom('[data-test-portfolio-date]').hasText('fake-date');
    assert.dom('[data-test-portfolio-tools]').hasText('fake-tool-1');
    assert.dom('[data-test-portfolio-category]').hasText('fake-category-1');
    assert.dom('[data-test-portfolio-description]').hasText('fake-description');
    assert.dom('[data-test-portfolio-image]').hasAttribute('src', 'fake-image-url', 'The image has src URL');
    assert.dom('[data-test-portfolio-image]').hasAttribute('alt', 'fake-image-alt', 'The image has alt attr');
  });
});
