import React, { useContext } from "react";
import "./App.css";
import Characters from "./components/Characters";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "./themes/darkTheme";
import { CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./components/shared/Loading";
import CharactersProvider, {
  CharactersConsumer,
  CharactersContext,
} from "./components/Characters.context";

const useStyles = makeStyles({
  root: { minHeight: "100vh" },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CharactersProvider>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.root}
          direction="column"
        >
          <Characters />
        </Grid>
      </CharactersProvider>
    </ThemeProvider>
  );
};

export default App;
