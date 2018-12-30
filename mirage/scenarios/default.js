export default function(server) {
  server.create('portfolio', {
    "type": "portfolio",
    "id": "front-end-instituto-assistir-2018-12",
    "attributes": {
      "title": "UX/UI Design & Front-end development",
      "tools": ["Ember.js", "JavaScript", "Scketch", "Photoshop"],
      "client": "Instituto Assistir",
      "category": "Front-end",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!",
      "imageUrl": "./assets/images/portfolio-1.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "ux-campainha-2018-11",
    "attributes": {
      "title": "UX Design",
      "client": "Campainha",
      "category": "UX/UI Design",
      "description": "Debitis repudiandae natus beatae dolorum ipsum, vero laudantium iste in? Porro, fugiat facilis.",
      "imageUrl": "./assets/images/portfolio-2.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "logo-stampowl-2017-03",
    "attributes": {
      "title": "Design",
      "client": "Stampowl",
      "category": "graphic-design",
      "description": "Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!",
      "imageUrl": "./assets/images/portfolio-3.jpg",
      "imageAlt": "Suscipit repellat facilis",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "front-end-instituto-assistir-2018-14",
    "attributes": {
      "title": "Front-end",
      "client": "Instituto Assistir",
      "category": "front-end",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!",
      "imageUrl": "./assets/images/portfolio-1.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });
}