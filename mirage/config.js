export default function() {
  this.namespace = '/api';

  let portfolios = [
    {
      type: 'portfolio',
      id: 'front-end',
      attributes: {
        title: 'Front-end development',
        category: 'front-end',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!',
        imageurl: 'https://picsum.photos/300/200?image=6',
        imagealt: 'Consequuntur architecto est inventore',
      }
    },
    {
      type: 'portfolio',
      id: 'ux-ui',
      attributes: {
        title: 'UX/UI design',
        category: 'ux-ui',
        description: 'Debitis repudiandae natus beatae dolorum ipsum, vero laudantium iste in? Porro, fugiat facilis.',
        imageurl: 'https://picsum.photos/300/200?image=66',
        imagealt: 'Consequuntur architecto est inventore',
      }
    },
    {
      type: 'portfolio',
      id: 'graphic-design',
      attributes: {
        title: 'Design',
        category: 'graphic-design',
        description: 'Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!',
        imageurl: 'https://picsum.photos/300/200?image=666',
        imagealt: 'Suscipit repellat facilis',
      }
    },
  ];

  this.get('/portfolios', (db, request) => {
    if (request.queryParams.category !== '') {
      let filteredPortfolio = portfolios.filter(i => {
        return i.attributes.category.indexOf(request.queryParams.category) !== -1;
      });
      return { data: filteredPortfolio };
    } else {
      return { data: portfolios };
    }
  });
}
