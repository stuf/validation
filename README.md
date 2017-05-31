# Validation

This project contains an example implementation on how to perform simple form validation
in [Calmm](https://github.com/calmm-js).

The basic gist of the validation is to use [partial lenses](https://github.com/calmm-js/partial.lenses)
to specify validators on the form data.

## Basic example

A crude way of doing validation would be something like this:

```js
import * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';

const data =
  U.atom({ inputField: 'foo' });

const validationResult =
  data.map(L.get(L.pick({
    inputField: ['inputField', {
      mandatory: [L.defaults(''), L.when(x => !x)],
      mustBeFoo: [L.defaults(''), L.when(x => x !== 'foo')]
    }]
  })))

const formIsValid =
  validationResult.map(R.or(R.isEmpty, R.isNil));
```

The base idea is that we can use functions such as `L.when` to query data that we know is invalid.

Because of how partial lenses work, the resulting view—or content for `validationResult`—
will be `undefined` if we the data is valid, otherwise `validationResult` will contain a
structure that tells us what checks fail, and with what kind of data. Based on this, we can build a simple DSL for specifying validation for the form.

> Note: This is however a naïve implementation of validating data, and may not be fit for cases or forms with fields containing complex dependencies upon other form fields, but it should show an approach into performing validation through lenses.
