/// <reference types="jest" />
import React from 'react';
export declare const getContextWrapper: (props?: {}) => ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;
export declare const mockGetField: jest.Mock<any, any>;
export declare const MockGoogleFormComponent: ({ children, onSubmit }: {
    children?: React.ReactNode;
    onSubmit: (data: object) => void;
}) => JSX.Element;
export declare const submitForm: () => Promise<void>;
