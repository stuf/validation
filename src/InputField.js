import React from 'karet';
import * as L from 'partial.lenses';
import * as U from 'karet.util';
import * as P from 'prop-types';

//

import { Msg } from './common/strings';

//

const InputField =
  ({ label, inputId, value, validation, isValid = U.or(U.isNil, U.isEmpty)(validation) }) =>
    <div className={U.cns('form-group',
                          U.ifte(isValid,
                                'has-success',
                                'has-danger'))}>
      <div className="card">
        <div className="card-block">
          <label htmlFor={inputId}>{label}</label>
          <input type="text"
                id={inputId}
                className={U.cns('form-control',
                                 U.ifte(isValid,
                                        'form-control-success',
                                        'form-control-danger'))}
                placeholder="Enter some text pls"
                {...U.bind({ value })} />
          {U.seq(validation,
              U.keys,
              U.map(key =>
                <div key={key} className="form-control-feedback">
                  <strong>{L.get([key, L.valueOr(`No text defined for validation \`${key}\``)], Msg)}</strong>
                </div>))}
        </div>
      </div>
    </div>;

InputField.propTypes = {
  label: P.string,
  inputId: P.string,
  value: P.any,
  validation: P.any,
  isValid: P.any,
};

//

export default InputField;
