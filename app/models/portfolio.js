import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  client: DS.attr('string'),
  category: DS.attr('string'),
  description: DS.attr('string'),
  imageURL: DS.attr('string'),
  imageALT: DS.attr('string'),
});
