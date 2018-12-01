import { module, test } from 'qunit';
import { 
  visit,
  currentURL,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {
  findAll,
  find,
  click,
} from 'ember-native-dom-helpers';

module('Acceptance | portfolio list', function(hooks) {
  setupApplicationTest(hooks);

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
        'should display 3 portfolios'
      )
    );
  });

  test('should filter the list of works by type', async function(assert) {
  });

  test('should show details for a selected work', async function(assert) {
  });

  test('', async function(assert) {
  });
});
