import React from "react";
import GlobalStyles from '@mui/material/GlobalStyles';
import { RouterProvider } from "react-router";
import { router } from "./core/router";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeOptions } from '@mui/material';
import store from "./core/store";
import { Provider } from 'react-redux'

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00ADB5",
      contrastText: "#eeeeee",
    },
    secondary: {
      main: "#0F4C75",
    },
    background: {
      paper: "#e6ecf0",
    },
    text: {
      primary: "#52616B",
      secondary: "#6d737d",
    },
  },
});


const App = () => {
  
  return (
    <Provider store={store}>
    <ThemeProvider theme={themeOptions}>
      <GlobalStyles styles={{body: {
        backgroundColor: themeOptions.palette?.background?.default
      }}} />

      <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
);
}


export default App;

