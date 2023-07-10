import React from "react";
import { Box, Stack, Typography, Grid, Hidden, Button } from "@mui/material";

const AboutTheFold = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        marginTop: "80px",
      }}
      direction="row"
      alignItems={"center"}
    >
      <Box
        sx={{
          "> *": {
            marginBottom: "16px",
          },
        }}
      >
        <Typography variant="h4">Choco Up</Typography>
        <Typography variant="body1">
          Helping e-commerce brands grow by providing easy access to working
          capital that's flexible and non-dilutive.
        </Typography>
        <Typography variant="body1">
          Say hello to revenue-based financing.
        </Typography>
        <Button variant="contained">Get Funded</Button>
      </Box>
      <Hidden smDown>
        <img
          src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b57f2810c50b8ed23301_Group%202389.svg"
          width="50%"
        />
      </Hidden>
    </Stack>
  );
};

export default AboutTheFold;
