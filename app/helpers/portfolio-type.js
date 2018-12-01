import { helper } from '@ember/component/helper';

const designTypes = [
  'graphic-design',
  'ux-ui',
];

export function portfolioType([portfolioType]) {
  return (designTypes.includes(portfolioType)) ? 'Design' : 'Front-end';
}

export default helper(portfolioType);
