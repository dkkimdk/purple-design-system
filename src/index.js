import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, TertiaryButton, SignUpModal } from './components'
import { ThemeProvider }  from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme} from "./utils";

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    
    return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
        > Dark Theme </button>   
        <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
        > Default Theme </button>    
        <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
        >
        <SignUpModal></SignUpModal>

        </div>
        <GlobalStyle/>
    </ThemeProvider>
    )
};


ReactDOM.render(<App />, document.querySelector("#root"));