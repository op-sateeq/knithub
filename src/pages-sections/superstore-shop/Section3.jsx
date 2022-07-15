import { Box, Grid, Typography, Stack } from "@mui/material";
import Image from "components/BazarImage";
import BazarCard from "components/BazarCard";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import Category from "components/icons/Category";
import ProductCard6 from "components/product-cards/ProductCard6";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import { useEffect, useState } from "react"; // =====================================================
import useResponsive from "hooks/useResponsive";

// =====================================================
const Section3 = () => {
  const isDesktop = useResponsive("up", "sm");
  const width = useWindowSize();
  return (
    <Box  py={8} sx={{ background: "#522422" }}>
      <Grid px={10} container>
        <Typography textAlign={isDesktop ? "start" : "center"} variant="h4" color={"#ffffff"}>
          We’ve been featured in
        </Typography>
        <Box
          py={2}
          sx={{ borderBottom: "1px dashed #ffffff", width: "100%" }}
        />

        <Stack
        pt={4}
        style={{width: '100%'}}
          rowGap={4}
          direction={width > 1200 ? "row" : "column"}
          justifyContent={"space-between"}
        >
          <Image
            style={{ height: "36px" }}
            src="/assets/images/media-1.svg"
          />

          <Image
            style={{ height: "36px" }}
            src="/assets/images/media-2.svg"
          />

          <Image
            style={{ height: "36px" }}
            src="/assets/images/media-3.svg"
          />

          <Image
            style={{ height: "36px" }}
            src="/assets/images/media-4.svg"
          />

          <Image
            style={{ height: "36px" }}
            src="/assets/images/media-5.svg"
          />

          <Image
            style={{ height: "36px" }}
            src="/assets/images/media-6.svg"
          />
        </Stack>
      </Grid>
    </Box>
  );
};

export default Section3;
