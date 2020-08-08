import React, { useState, useContext } from 'react';
import { Theme, Toolbar } from '@react/ui';
import { themes, ThemeContext } from './theme-context';

/* eslint-disable-next-line */
export interface ContextContainerProps {}

/* eslint-disable-next-line */
const ContextInner: React.FC<{}> = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={() => toggleTheme()}>button</button>
      <p>
        {theme.background} / {theme.foreground}
      </p>
      <Toolbar theme={Theme.dark} />
    </>
  );
};

export const ContextContainer = (props: ContextContainerProps) => {
  const [state, setState] = useState({ theme: themes.light });
  const toggleTheme = () => {
    setState((_state) => {
      return {
        theme: _state.theme === themes.dark ? themes.light : themes.dark,
      };
    });
  };
  return (
    <ThemeContext.Provider
      value={{ theme: state.theme, toggleTheme: toggleTheme }}
    >
      <ContextInner />
    </ThemeContext.Provider>
  );
};

export default ContextContainer;
