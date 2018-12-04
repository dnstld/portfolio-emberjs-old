import { module, test, skip } from 'qunit';
import { 
  visit,
  currentURL,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {
  findAll,
  click,
} from 'ember-native-dom-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | portfolio list', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show portfolio as the home page', async function(assert) {
    await visit('/');

    assert.equal(
      currentURL(),
      '/portfolio',
      'should redirect automatically'
    );
  });

  test('should link to about page', async function(assert) {
    await visit('/');
    await click('[data-test-link-to-about]');

    assert.equal(
      currentURL(),
      '/about',
      'should navigate to about'
    );
  });

  test('should link to contact page', async function(assert) {
    await visit('/');
    await click('[data-test-link-to-contact]');

    assert.equal(
      currentURL(),
      '/contact',
      'should navigate to contact'
    );
  });

  test('should list all works', async function(assert) {
    await visit('/');

    assert.ok(
      findAll(
        '[data-test-portfolio-item]',
        'should display 3 portfolio'
      )
    );
  });

  skip('should filter the list of works by type', async function() {
  });

  skip('should show details for a selected work', async function() {
  });
});
