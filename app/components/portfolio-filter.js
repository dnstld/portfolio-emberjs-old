import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.filter('').then(results => this.set('results', results));
  },

  actions: {
    handleFilterPortfolio(selected) {
      let filterAction = this.filter;

      filterAction(selected).then(filterResults => this.set('results', filterResults));
    },
  }
});
