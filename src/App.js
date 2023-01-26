import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const apiData = useCallback(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => err);
  }, [setData]);

  useEffect(() => {
    const clearTime = setTimeout(() => {
      apiData();
    }, 1000);
    return () => clearTimeout(clearTime);
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <List>
        {data.map((e, idx) => {
          return (
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={`${e?.thumbnailUrl}`} />
              </ListItemAvatar>
              <ListItem key={idx}>
                <ListItemText primary={e?.title} />
              </ListItem>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default App;
