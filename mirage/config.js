export default function() {
  this.namespace = '/api';

  let portfolios = [
    {
      "type": "portfolio",
      "id": "front-end-instituto-assistir-2018-12",
      "attributes": {
        "title": "Front-end development",
        "client": "Instituto Assistir",
        "category": "front-end",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!",
        "image-url": "https://picsum.photos/300/200?image=6",
        "image-alt": "Consequuntur architecto est inventore",
      }
    },
    {
      "type": "portfolio",
      "id": "ux-campainha-2018-11",
      "attributes": {
        "title": "UX/UI design",
        "client": "Campainha",
        "category": "ux-ui",
        "description": "Debitis repudiandae natus beatae dolorum ipsum, vero laudantium iste in? Porro, fugiat facilis.",
        "image-url": "https://picsum.photos/300/200?image=66",
        "image-alt": "Consequuntur architecto est inventore",
      }
    },
    {
      "type": "portfolio",
      "id": "logo-stampowl-2017-03",
      "attributes": {
        "title": "Design",
        "client": "Stampowl",
        "category": "graphic-design",
        "description": "Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!",
        "image-url": "https://picsum.photos/300/200?image=666",
        "image-alt": "Suscipit repellat facilis",
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

  this.get('/portfolios/:id', (db, request) => {
    return { data: portfolios.find(portfolio => request.params.id === portfolio.id) }
  })
}
