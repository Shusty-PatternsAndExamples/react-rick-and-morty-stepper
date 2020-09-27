import React, { Component, useContext } from "react";
import CharacterInfo from "./CharacterInfo";
import Loading from "./shared/Loading";

import { Card, CardContent, CardActions, Grid } from "@material-ui/core";
import Stepper from "./Stepper";
import CharactersProvider, {
  CharactersConsumer,
  CharactersContext,
} from "./Characters.context";

const Characters = () => {
  const { isLoading } = useContext(CharactersContext);
  const c = useContext(CharactersContext);
  console.log(c);
  console.log("isLoading: " + isLoading);
  return isLoading ? (
    <Loading>Fake loading...</Loading>
  ) : (
    <Card variant="outlined">
      <CardContent>
        <CharacterInfo></CharacterInfo>
      </CardContent>
      <CardActions>
        <Grid container justify="center">
          <Stepper></Stepper>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Characters;
