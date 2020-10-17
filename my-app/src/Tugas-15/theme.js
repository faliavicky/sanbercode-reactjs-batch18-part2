import React from 'react';
import {ThemeContext, themes} from './nav-theme';
import ThemedButton from './but-theme';

function Toolbar(props) {
    return (
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }
  
  class Themes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: themes.light,
      };
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      };
    }
  
    render() {
      return (
        <page>
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          <section>
            <ThemedButton />
          </section>
        </page>
      );
    }
  }
  
  export default Themes;