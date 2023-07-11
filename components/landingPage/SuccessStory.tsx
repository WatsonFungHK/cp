import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

const SuccessStory = () => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          color: "#7352ff",
          textDecoration: "uppercase",
          marginBottom: "20px",
        }}
      >
        Success Story
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: "40px",
        }}
      >
        Maximise
        <Box
          component={"span"}
          sx={{
            color: "#7352ff",
          }}
        >
          {" "}
          business potential{" "}
        </Box>
        with growth capital investment
      </Typography>
      <Box
        sx={{
          height: "553px",
          border: `30px solid #fff`,
          borderRadius: "50px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "60px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 30px 90px rgba(159,159,159,.15)`,
        }}
      >
        <Box
          component={"img"}
          src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak.jpg"
          loading="lazy"
          sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, (max-width: 991px) 90vw, (max-width: 1439px) 88vw, 1010px"
          srcset="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak-p-500.jpg 500w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak-p-800.jpg 800w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak.jpg 1280w"
          alt=""
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Box
          component={"a"}
          href="#"
          className="play-button w-inline-block w-lightbox"
          aria-label="open lightbox"
          aria-haspopup="dialog"
          sx={{
            width: "100px",
            height: "100px",
            backgroundColor: "#fff",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            position: "absolute",
          }}
        >
          <Box
            component={"img"}
            src="https://uploads-ssl.webflow.com/60ec372343da1a4e89ec1f1d/60efa8325744425294df2789_Play%20Button%20Orange.svg"
            loading="lazy"
            alt=""
            sx={{
              maxWidth: "100%",
              display: "inline-block",
            }}
          />
        </Box>
      </Box>
      <Grid container spacing={"16px"}>
        <Grid item sm={12} md={6}>
          <Stack direction={"row"}>
            <Box
              sx={{
                backgroundColor: "#7352ff",
                color: "white",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                minWidth: "60px",
                minHeight: "60px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginRight: "32px",
              }}
            >
              <Typography>1</Typography>
            </Box>
            <Stack spacing="14px">
              <Typography variant="h5">Increasing product inventory</Typography>
              <Typography variant="body1">
                Using their growth capital from Choco Up to pay for product
                inventory helped increase their sales and improved their profit
                margins.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={6}>
          <Stack direction={"row"}>
            <Box
              sx={{
                backgroundColor: "#7352ff",
                color: "white",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                minWidth: "60px",
                minHeight: "60px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginRight: "32px",
              }}
            >
              <Typography>2</Typography>
            </Box>
            <Stack spacing="14px">
              <Typography variant="h5">
                Building a strong women's brand
              </Typography>
              <Typography variant="body1">
                Creating an activewear brand that catered to Asian women's
                bodies proved to be a great success as they are now part of the
                Love, Bonito family.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuccessStory;
