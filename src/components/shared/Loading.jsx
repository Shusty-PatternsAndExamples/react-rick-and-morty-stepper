import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

const Loading = (props) => {
  return (
    <>
      <CircularProgress />
      <Typography variant="h6">{props.children}</Typography>
    </>
  );
};

export default Loading;
