import { GoogleForm } from '../types';
export declare const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d";
export declare const formatQuestionName: (id: string) => string;
export declare const submitToGoogleForms: (form: GoogleForm, formData: object) => Promise<boolean>;
