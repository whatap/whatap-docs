import { UseFormReturn, UseFormRegisterReturn, RegisterOptions, FieldError } from 'react-hook-form';
import { Column, Field, Line, Option, BaseField, TextField, GridField, DropdownField, LinearField } from './form';
export declare type GetField = (id: string) => Field;
export declare type UseGoogleFormReturn = UseFormReturn & {
    getField: GetField;
    submitToGoogleForms: (form: FormData) => Promise<boolean>;
};
export declare type RegisterReturn = {
    register: (options?: RegisterOptions) => UseFormRegisterReturn;
};
export declare type OptionId = Option & {
    id: string;
};
export declare type OptionRegister = OptionId & {
    registerOption: (options?: RegisterOptions) => UseFormRegisterReturn;
};
export declare type CustomOptionRegister = OptionRegister & {
    registerCustomInput: (options?: RegisterOptions) => UseFormRegisterReturn;
} & Error;
export declare type UseCustomOptionReturn = {
    options: Array<OptionRegister>;
    customOption?: CustomOptionRegister;
    isCustomOptionSelected?: boolean;
};
export declare type Options = {
    options: Array<OptionId>;
};
export declare type UseOptionReturn = {
    options: Array<OptionRegister>;
};
export declare type LineRenderer = Line & {
    renderColumns: (render: RenderColumnFunction) => JSX.Element[];
};
export declare type ColumnRenderer = Column & {
    registerColumn: (options?: RegisterOptions) => UseFormRegisterReturn;
} & {
    id: string;
};
export declare type RenderLineFunction = (line: LineRenderer) => JSX.Element;
export declare type RenderColumnFunction = (column: ColumnRenderer) => JSX.Element;
export declare type UseGridReturn = {
    renderGrid: (render: RenderLineFunction) => JSX.Element[];
};
export declare type Error = {
    error?: FieldError;
};
export declare type GridErrors = {
    [fieldId: string]: FieldError;
};
export declare type Errors = {
    errors?: GridErrors;
};
export declare type UseCustomOptionField = BaseField & UseCustomOptionReturn & Error;
export declare type UseTextFieldReturn = TextField & RegisterReturn & Error;
export declare type UseGridFieldReturn = GridField & UseGridReturn & Errors;
export declare type UseDropdownReturn = Options & DropdownField & RegisterReturn & Error;
export declare type UseLinearInputReturn = UseOptionReturn & LinearField & Error;
