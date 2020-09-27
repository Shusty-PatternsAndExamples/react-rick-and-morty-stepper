import React from "react";
import { Avatar, Grid, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CharactersConsumer } from "./Characters.context";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const CharacterInfo = () => {
  const classes = useStyles();

  return (
    <CharactersConsumer>
      {({ currentlySelectedIndex, charactersData }) => {
        const characterData = charactersData[currentlySelectedIndex];
        return (
          <Grid container direction="column" alignItems="center">
            <Typography variant="h2" color="textPrimary" gutterBottom>
              {characterData.name}
            </Typography>
            <Box>
              <Avatar
                alt={`{Picture ${characterData.name}`}
                src={characterData.image}
                className={classes.large}
                margin={10}
              />
            </Box>
            <Box m={2}>
              <Typography
                color="textSecondary"
                variant="body2"
                display="inline"
              >
                Species:
              </Typography>
              <Typography color="textPrimary" variant="body2" display="inline">
                {characterData.species}
              </Typography>
            </Box>
          </Grid>
        );
      }}
    </CharactersConsumer>
  );
};

export default CharacterInfo;
