import { Box, Stack, Grid, Typography, Button, Divider } from "@mui/material";
import Image from "components/BazarImage";
import useResponsive from "hooks/useResponsive";

// =============================================================
const Section2 = () => {
  const isDesktop = useResponsive("up", "sm");
  return (
    <Box mb={4} py={8}>
      <Grid container spacing={4}>
        <Grid
          alignItems={"center"}
          justifyContent={"center"}
          item
          md={6}
          xs={12}
        >
          <Stack
            sx={{ height: "100%" }}
            px={7}
            py={5}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <Typography variant="h3" style={{ fontSize: "40px" }}>
              Knit. Create. Live better.
            </Typography>
            <Typography
              sx={{ my: 3.5 }}
              variant="h6"
              style={{ fontSize: "15px", fontWeight: 500 }}
            >
              We provide expert-led online knitting courses, online crochet
              workshops, and macramé courses, perfect for beginners or novices
              alike. Knithub 24 is a knitwear design studio and knitting school
              in London that dedicates itself to helping people learn how to
              knit or crochet. It's our passion! Find out more about what we do
              and the online craft classes we offer.
            </Typography>

            <Button
              sx={{
                my: 0.5,
                fontSize: 10,
                border: "1px solid #E4F0F0",
                background: "#E4F0F0",
                color: "#000000",
                borderRadius: 17,
                maxWidth: "max-content",
              }}
              endIcon={<Image src={"/assets/icons/l-arrow-black.svg"} />}
              variant="outlined"
            >
              OUR STORY
            </Button>
          </Stack>
        </Grid>

        <Grid
          alignItems={"center"}
          justifyContent="center"
          sx={{ height: "100%", width: "100%", padding: "30px" }}
          item
          md={6}
          xs={12}
        >
          <Typography px={6} mb={4} variant="h6" style={{ fontSize: "18px" }}>
            OUR COMMITMENTS
          </Typography>

          <Box px={6} direction={"column"}>
            <Stack spacing={3} direction={"row"} alignItems="center">
              <Image src={"/assets/icons/vegan.svg"} />
              <Typography
                variant="h3"
                style={{ fontSize: isDesktop ? "40px" : "30px" }}
              >
                100% Vegan Yarn
              </Typography>
            </Stack>
            <hr
              style={{
                color: "#828282",
                height: "0.1px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Box>
          <Box px={6} direction={"column"}>
            <Stack spacing={3} direction={"row"} alignItems="center">
              <Image src={"/assets/icons/fashion-forward.svg"} />
              <Typography
                variant="h3"
                style={{ fontSize: isDesktop ? "40px" : "30px" }}
              >
                Fashion Forward
              </Typography>
            </Stack>
            <hr
              style={{
                color: "#828282",
                height: "0.1px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Box>
          <Box px={6} direction={"column"}>
            <Stack spacing={3} direction={"row"} alignItems="center">
              <Image mr={2} src={"/assets/icons/gender-neutral.svg"} />
              <Typography
                variant="h3"
                style={{ fontSize: isDesktop ? "40px" : "30px" }}
              >
                Gender Neutral
              </Typography>
            </Stack>
            <hr
              style={{
                color: "#828282",
                height: "0.1px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Box>
          <Box px={6} direction={"column"}>
            <Stack spacing={3} direction={"row"} alignItems="center">
              <Image src={"/assets/icons/certified.svg"} />
              <Typography
                variant="h3"
                style={{ fontSize: isDesktop ? "40px" : "30px" }}
              >
                Certified Sustainable
              </Typography>
            </Stack>
            <hr
              style={{
                color: "#828282",
                height: "0.1px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
