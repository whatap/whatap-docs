import * as React from 'react';
import { UseGoogleFormReturn } from '../types';
export declare const useGoogleFormContext: () => UseGoogleFormReturn | null;
export declare const GoogleFormProvider: ({ children, ...other }: {
    children: React.ReactNode;
}) => JSX.Element;
