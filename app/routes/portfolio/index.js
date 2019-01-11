import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('portfolio');
    // return $.getJSON('portfolio.json');
    // return fetch('portfolio.json').then(res => {
    //   return res.json();
    // });
  }
});
