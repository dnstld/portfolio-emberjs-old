export default function(server) {
  server.create('portfolio', {
    "type": "portfolio",
    "id": "ux-ui-front-end-client-2019-01",
    "attributes": {
      "client": "Client Name",
      "title": "UX/UI & Front-end",
      "date": "Jan 2019",
      "tools": ["Ember.js", "JavaScript", "HTML5", "CSS3", "Scketch", "Photoshop"],
      "category": ["ux", "ui", "front-end"],
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!",
      "imageUrl": "./assets/images/portfolio-1.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "ux-client-2019-01",
    "attributes": {
      "client": "Client Name",
      "title": "UX",
      "date": "Dec 2018",
      "tools": ["Scketch", "Illustrator", "InVision", "InVision Craft"],
      "category": ["ux"],
      "description": "Debitis repudiandae natus beatae dolorum ipsum, vero laudantium iste in? Porro, fugiat facilis.",
      "imageUrl": "./assets/images/portfolio-2.jpg",
      "imageAlt": "Consequuntur architecto est inventore",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "ui-client-2019-01",
    "attributes": {
      "client": "Client Name",
      "title": "Design",
      "date": "Nov 2018",
      "tools": ["JavaScript", "HTML5", "CSS3", "Scketch", "Illustrator","Photoshop"],
      "category": ["ui"],
      "description": "Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!",
      "imageUrl": "./assets/images/portfolio-3.jpg",
      "imageAlt": "Suscipit repellat facilis",
    }
  });

  server.create('portfolio', {
    "type": "portfolio",
    "id": "design-client-2019-01",
    "attributes": {
      "client": "Client Name",
      "title": "Design",
      "date": "Oct 2018",
      "tools": ["Illustrator", "Photoshop"],
      "category": ["design"],
      "description": "Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!",
      "imageUrl": "./assets/images/portfolio-4.jpg",
      "imageAlt": "Suscipit repellat facilis",
    }
  });
}