import { UseCustomOptionField } from '../../types';
export declare const OTHER_OPTION = "__other_option__";
export declare const OTHER_OPTION_RESPONSE = "other_option_response";
export declare const buildCustomFieldId: (id: string) => string;
declare const _default: (id: string, type: 'CHECKBOX' | 'RADIO') => UseCustomOptionField;
export default _default;
