import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterPortfolio(param) {
      if (param !== 'all') {
        return this.store.query('portfolio', { category: param });
      } else {
        return this.store.findAll('portfolio');
      }
    }
  }
});
