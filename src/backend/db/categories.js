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
    isActive: false,
  },
  {
    _id: uuid(),
    categoryName: 'Developmental',
    description:
      'Branch of psychology which focuses on how people grow and learn',
    isActive: false,
  },
  {
    _id: uuid(),
    categoryName: 'Cognitive',
    description: 'Computational Approach to understand human behaviour',
    isActive: false,
  },
  {
    _id: uuid(),
    categoryName: 'Social',
    description: 'Branch of psychology which focuses on how people interact',
    isActive: false,
  },

  {
    _id: uuid(),
    categoryName: 'Clinical',
    description:
      'Branch of psychology which examines mental health and mental illnesses.',
    isActive: false,
  },
];
