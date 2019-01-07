export default function(server) {
  server.create('portfolio', {
    "type": "portfolio",
    "id": "ux-ui-front-end-instituto-assistir-2018-12",
    "attributes": {
      "client": "Instituto Assistir",
      "title": "UX/UI & Front-end",
      "date": "May 2018",
      "tools": ["Ember.js", "JavaScript", "Scketch", "Photoshop"],
      "category": ["ux", "ui", "Front-end"],
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!",
      "imageUrl": "./assets/images/portfolio-1.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "ux-campainha-2018-11",
    "attributes": {
      "client": "Campainha",
      "title": "UX",
      "date": "May 2018",
      "tools": ["Scketch", "Photoshop", "Illustrator", "InVision", "InVision Craft"],
      "category": ["ux"],
      "description": "Debitis repudiandae natus beatae dolorum ipsum, vero laudantium iste in? Porro, fugiat facilis.",
      "imageUrl": "./assets/images/portfolio-2.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "design-logo-stampowl-2017-03",
    "attributes": {
      "client": "Stampowl",
      "title": "Design",
      "date": "May 2018",
      "tools": ["Illustrator"],
      "category": ["design"],
      "description": "Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!",
      "imageUrl": "./assets/images/portfolio-3.jpg",
      "imageAlt": "Suscipit repellat facilis",
    }
  });
}