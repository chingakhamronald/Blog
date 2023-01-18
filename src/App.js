import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const data = ["Eat", "Sleep", "Code"];

const App = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const timeout = setInterval(() => {
      const idx = Math.floor(Math.random() * data.length);
      setTitle(data[idx]);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [title]);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Typography variant="h3" color={"InfoText"}>
        I Like to {title}!
      </Typography>
    </Box>
  );
};

export default App;
