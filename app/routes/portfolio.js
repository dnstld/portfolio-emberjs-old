import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 'front-end',
        title: 'Front-end development',
        category: 'Front-end',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto est inventore, exercitationem cumque mollitia vitae ipsum, suscipit repellat facilis sint laboriosam, fugiat deleniti accusantium!',
        imageURL: 'https://picsum.photos/300/200?image=6',
        imageALT: 'Consequuntur architecto est inventore',
      },
      {
        id: 'ux-ui',
        title: 'UX/UI design',
        category: 'UX/UI design',
        description: 'Debitis repudiandae natus beatae dolorum ipsum, vero laudantium iste in? Porro, fugiat facilis.',
        imageURL: 'https://picsum.photos/300/200?image=66',
        imageALT: 'Consequuntur architecto est inventore',
      },
      {
        id: 'graphic-design',
        title: 'Design',
        category: 'Graphic Design',
        description: 'Consequuntur architecto est inventore, exercitationem cumque fugiat deleniti accusantium mollitia vitae ipsum, suscipit repellat facilis sint laboriosam!',
        imageURL: 'https://picsum.photos/300/200?image=666',
        imageALT: 'Suscipit repellat facilis',
      },
    ];
  }
});
