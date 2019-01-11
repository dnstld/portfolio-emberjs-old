export default function() {
  this.namespace = '/api';

  this.get('/portfolios', ({ portfolios }, { queryParams }) => {
    if (!queryParams.category) {
      return portfolios.all();
    } else {
      let foundPortfolio = portfolios.all();

      foundPortfolio.models = foundPortfolio.models.filter(item => {
        return item.attributes.category.includes(queryParams.category);
      });

      return foundPortfolio;
    }
  });

  this.get('/portfolios/:id', ({ portfolios }, { params }) => {
    return portfolios.findBy(params);
  });
}
