import React from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

  export const nav = {
    light: {
      backgroundColor: '#ffffff'
    },
    dark: {
        backgroundColor: '#000000'
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );