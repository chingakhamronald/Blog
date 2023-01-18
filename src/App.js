import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Typography variant="h3" color={"InfoText"}>
        Come
      </Typography>
    </Box>
  );
};

export default App;
