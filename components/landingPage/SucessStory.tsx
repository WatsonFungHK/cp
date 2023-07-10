import React from "react";
import { Box, Stack, Typography } from "@mui/material";

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
    </Box>
  );
};

export default SuccessStory;
