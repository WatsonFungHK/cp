import React, { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json();
};

interface User {
  id: string;
  email: string;
  address: {
    address: string;
  };
}

const Testimonials = () => {
  const [data, setData] = useState<Array<User>>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const apiData = await fetchData("https://dummyjson.com/users?limit=6");
        setData(apiData.users);
      } catch (err) {
        // TODO: handle error
        console.log("err: ", err);
      }
    };

    fetchApiData();
  }, []);

  return (
    <Box
      sx={{
        marginBottom: "48px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: "40px",
        }}
      >
        Client Testimonials
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {Array.isArray(data) &&
          data.map((user) => {
            return (
              <SwiperSlide key={user.id}>
                <Stack
                  sx={{
                    width: "100%",
                    height: "150px",
                    backgroundColor: "white",
                    margin: "16px 20px",
                    padding: "16px",
                    boxShadow: "0 0 20px -7px rgba(0,0,0,.2)",
                    borderRadius: "8px",
                    ":hover": {
                      boxShadow: "0 0 20px 2px rgba(0,0,0,.2)",
                    },
                  }}
                >
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="body1">
                    {`"${user.address.address}"`}
                  </Typography>
                </Stack>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
