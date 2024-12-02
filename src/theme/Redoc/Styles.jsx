import React from 'react';
import '../../global';

export function ServerStyles(_props: {
  specProps: SpecProps;
  lightThemeOptions: RedocRawOptions;
  darkThemeOptions: RedocRawOptions;
}) {
  return (
    <div
      className="redocusaurus-styles"
      dangerouslySetInnerHTML={{ __html: '' }}
    ></div>
  );
}