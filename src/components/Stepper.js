import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { CharactersContext } from "./Characters.context";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
  },
});

export default function ProgressMobileStepper() {
  const context = useContext(CharactersContext);

  console.log("context");
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CharactersContext.Consumer>
      {({ handleNext, handleBack, currentlySelectedIndex, charactersData }) => {
        const itemLength = charactersData.length;

        return (
          <MobileStepper
            variant="progress"
            steps={itemLength}
            position="static"
            activeStep={currentlySelectedIndex}
            className={classes.root}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={currentlySelectedIndex === itemLength - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={currentlySelectedIndex === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        );
      }}
    </CharactersContext.Consumer>
  );
}
