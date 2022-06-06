import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box
      sx={{
        textAlign: "center",
        borderTop: "1px solid #f1f1f1f1",
        padding: "5px",
      }}
    >
      <Typography variant="body2">Create by @trddoan</Typography>
    </Box>
  );
}

export default Footer;
