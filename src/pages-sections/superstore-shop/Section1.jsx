import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import Image from "components/BazarImage";

// ======================================================
const Section1 = () => {
  return (
    <>
      <Typography
        textAlign="center"
        variant="h2"
        sx={{
          color: "white",
          letterSpacing: 2,
          wordSpacing: 3,
          position: "absolute",
          top: "58%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Join the ‘MIY’ <br /> revolution.
      </Typography>

      <Box mb={4}>
        <Grid
          sx={{ height: { xs: "100vh", xs: "83vh" } }}
          container
          spacing={4}
        >
          <Grid
            sx={{
              // height: "100%",
              // width: "100%",
              backgroundSize: 'cover',
              backgroundColor: "#828282",
              backgroundImage: "url('/assets/images/primary-hero.svg')",
            }}
            item
            md={6}
            xs={12}
          ></Grid>

          <Grid
            alignItems={"center"}
            justifyContent="center"
            sx={{ backgroundColor: "#90A293", height: "100%", width: "100%" }}
            item
            md={6}
            xs={12}
          >
            <Stack
              direction="column"
              sx={{ height: "100%", width: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <Image
                sx={{ width: "360px" }}
                src="/assets/images/secondary-hero.svg"
              />
              <Stack
                sx={{ width: "360px" }}
                mt={2}
                spacing={3}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Typography
                  sx={{ fontSize: 12, fontWeight: 600, color: "#ffffff" }}
                  textAlign={"start"}
                >
                  Browse our Make It Yourself <br /> knitting kits and new
                  collections
                </Typography>
                <Button
                  sx={{
                    my: 0.5,
                    fontSize: 10,
                    border: "1px solid #FFFFFF",
                    color: "#FFFFFF",
                    borderRadius: 17,
                    maxWidth: "max-content",
                    
                  }}
                  endIcon={<Image src={"/assets/icons/l-arrow-white.svg"} />}
                  variant="outlined"
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Section1;
