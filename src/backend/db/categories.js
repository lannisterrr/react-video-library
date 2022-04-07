import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Neuroscience',
    description: 'Study of the mind by looking at the brain',
  },
  {
    _id: uuid(),
    categoryName: 'Developmental',
    description:
      'Branch of psychology which focuses on how people grow and learn',
  },
  {
    _id: uuid(),
    categoryName: 'Coginitive',
    description: 'Computational Approach to understand human behaviour',
  },
  {
    _id: uuid(),
    categoryName: 'Social',
    description: 'Branch of psychology which focuses on how people interact',
  },

  {
    _id: uuid(),
    categoryName: 'Clinical',
    description:
      'Branch of psychology which examines mental health and mental illnesses.',
  },
];
