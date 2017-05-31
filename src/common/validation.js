/// <reference path="validation.d.ts" />

import * as L from 'partial.lenses';
import * as R from 'ramda';

//

export const whenMatch = R.compose(L.when, R.test);
export const whenNotMatch = R.compose(L.when, R.complement, R.test);

export const mustNotMatch = regex => [L.defaults(''), whenMatch(regex)];
export const mustMatch = regex => [L.defaults(''), whenNotMatch(regex)];

export const required = L.when(R.isEmpty);
export const mustEqual = R.compose(L.when, R.equals);
export const mustNotEqual = R.compose(L.when, R.complement, R.equals);

//

export const ifCond = 0;

export const requiredIfCond = 1;

//

export const newValidator = (name, schema) => [name, [name, L.pick(schema)]];
export const newValidatorFromP = ([name, schema]) => newValidator(name, schema);

//

export const combineValidatorPairs = (...validatorPairs) => R.fromPairs(validatorPairs);

export const fromTemplate = template =>
  R.compose(R.fromPairs,
            R.map(newValidatorFromP),
            R.toPairs)(template);
