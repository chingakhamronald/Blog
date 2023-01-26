import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const RowList = ({ children }) => {
  return (
    <Box color={"red"}>
      <Typography>{children}</Typography>
    </Box>
  );
};

export default RowList;
