import fromPairs from 'lodash/fromPairs';

import vi from './vi/embed';
import en from './en/embed';

const localePairs = [
  ['vi', vi],
  ['en', en],
];

export const languages = localePairs.map((locale) => locale[0]);

export const embedLocales = fromPairs(localePairs);
