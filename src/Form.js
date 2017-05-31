import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'partial.lenses';

//

import InputField from './InputField';

import * as V from './common/validation';
import { poopJson } from './common/helpers';

//

const validatorTemplate =
  V.fromTemplate({
    inputField: {
      required: V.required,
      mustEqualAbc: V.mustMatch(/^abc$/),
    },
    anotherInput: {
      required: V.required,
    },
  });

const validation = L.pick(validatorTemplate);

//

const notEmptyOrNil = U.complement(U.or(U.isNil, U.isEmpty));

//

const Form = () => {
  const formData = U.atom({ inputField: 'default', anotherInput: 'test' });
  const formValidation = formData.map(L.get(validation));
  const isInvalid = notEmptyOrNil(formValidation);

  return (
    <div>
      <form>
        <InputField label="Input field"
                    inputId="inputField"
                    value={U.view('inputField', formData)}
                    validation={U.view('inputField', formValidation)} />

        <InputField label="Input field"
                    inputId="inputField"
                    value={U.view('anotherInput', formData)}
                    validation={U.view('anotherInput', formValidation)} />

        <div className="form-group">
          <button {...{ disabled: isInvalid,
                        className: U.cns('btn',
                                         U.ifte(isInvalid,
                                                'btn-secondary',
                                                'btn-success')) }}>
            Submit
          </button>
        </div>

        <hr />

        <div className="card-group">
          <div className="card">
            <div className="card-header">
              Data
            </div>
            <div className="card-block">
              <pre><code>{formData.map(poopJson)}</code></pre>
            </div>
          </div>

          <div className={U.cns('card',
                                'card-inverse',
                                U.ifte(isInvalid, 'card-danger', 'card-success'))}>
            <div className="card-header">
              Validation result
            </div>
            <div className="card-block validation-result">
              {U.ifte(isInvalid,
                      <pre><code>{formValidation.map(poopJson)}</code></pre>,
                      <p>Form is valid ♡</p>)}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
