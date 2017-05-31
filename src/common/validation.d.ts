//

export type Validator = any;
export type ValidatorPair = [string, Validator];

//

export function newValidator(field: string, validator: Validator): ValidatorPair;
export function combineValidatorPairs(...validators: ValidatorPair[]): any;
