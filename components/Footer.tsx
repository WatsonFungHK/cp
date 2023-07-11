import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#061849",
        padding: "0 40px 20px",
        color: "white",
      }}
    >
      <Grid
        sx={{
          padding: "48px 0",
        }}
        container
      >
        <Grid item sm={12} md={4}>
          <Stack spacing={2} mb={"32px"}>
            <img
              src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c292b6a746029e98b36d_ChocoUp.svg"
              width="160"
            />
            <Typography variant="body1">
              Asia's largest revenue based financing platform
            </Typography>
            <Stack spacing={1} direction="row">
              <a href="https://www.facebook.com/getchocoup/">
                <img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c3297ff49ba2a18b2c30_Facebook_icon_(black)%201.svg" />
              </a>
              <a href="https://www.instagram.com/getchocoup/">
                <img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c329e7294df521c70262_Linkedin_circle%201.svg" />
              </a>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" mb={1} color="#95fcfd">
                Company
              </Typography>
              <Stack spacing={0.5}>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" mb={1} color="#95fcfd">
                Resources
              </Typography>
              <Stack spacing={0.5}>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" mb={1} color="#95fcfd">
                Success stories
              </Typography>
              <Stack spacing={0.5}>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" mb={1} color="#95fcfd">
                Support
              </Typography>
              <Stack spacing={0.5}>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" mb={1} color="#95fcfd">
                Legal
              </Typography>
              <Stack spacing={0.5}>
                <Typography>Something</Typography>
                <Typography>Something</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography textAlign={"center"}>
        © Copyright 2023 Choco Up. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
