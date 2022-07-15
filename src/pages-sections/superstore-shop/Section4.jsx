import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import Image from "components/BazarImage";
import BazarCard from "components/BazarCard";
import CategorySectionHeader from "components/CategorySectionHeader";
import DottedStar from "components/icons/DottedStar";
import RankBadge from "components/icons/RankBadge";
import ProductCard4 from "components/product-cards/ProductCard4";
import ProductCard5 from "components/product-cards/ProductCard5";
import Link from "next/link";
import useResponsive from "hooks/useResponsive";

// ==========================================================
const Section4 = (props) => {
  const isDesktop = useResponsive("up", "sm");

  return (
    <Box >
      <Box sx={{ background: "#A7B6AA" }} py={2}>
        <Stack direction={"column"} sx={{ py: 8 }} alignItems={"center"}>
          <Container>
            <Typography
              sx={{ color: "white", fontSize: "32px", fontWeight: 500 }}
             
              textAlign={"center"}
            >
              How it works
            </Typography>
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {isDesktop && (
                <>
                  <Stack
                    sx={{ position: "absolute", top: 85, left: 125 }}
                    direction="row"
                    alignItems={"start"}
                  >
                    <Stack sx={{ maxWidth: "240px" }}>
                      <Typography
                        mb={1.5}
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontWeight: 600, fontSize: 18 }}
                      >
                        Heading goes here
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontSize: 13 }}
                      >
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea.
                      </Typography>
                    </Stack>
                    <Image
                      py={1}
                      src={"/assets/icons/pointer-1.svg"}
                      alt={"Pointing Fabric"}
                      style={{ width: "190px" }}
                    />
                  </Stack>
                  <Stack
                    sx={{ position: "absolute", top: 125, right: 165 }}
                    direction="row"
                    alignItems={"start"}
                  >
                    <Image
                      py={1}
                      src={"/assets/icons/pointer-2.svg"}
                      alt={"Pointing Fabric"}
                      style={{ width: "215px" }}
                    />
                    <Stack sx={{ maxWidth: "240px" }}>
                      <Typography
                        mb={1.5}
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontWeight: 600, fontSize: 18 }}
                      >
                        Heading goes here
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontSize: 13 }}
                      >
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea.
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    sx={{ position: "absolute", top: 329, left: 105 }}
                    direction="row"
                    alignItems={"start"}
                  >
                    <Stack sx={{ maxWidth: "240px" }}>
                      <Typography
                        mb={1.5}
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontWeight: 600, fontSize: 18 }}
                      >
                        Heading goes here
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontSize: 13 }}
                      >
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea.
                      </Typography>
                    </Stack>
                    <Image
                      py={1}
                      src={"/assets/icons/pointer-3.svg"}
                      alt={"Pointing Fabric"}
                      style={{ width: "295px" }}
                    />
                  </Stack>
                  <Stack
                    sx={{ position: "absolute", top: 419, right: 138 }}
                    direction="row"
                    alignItems={"start"}
                  >
                    <Image
                      py={1}
                      src={"/assets/icons/pointer-4.svg"}
                      alt={"Pointing Wool"}
                      style={{ width: "230px" }}
                    />
                    <Stack sx={{ maxWidth: "240px" }}>
                      <Typography
                        mb={1.5}
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontWeight: 600, fontSize: 18 }}
                      >
                        Heading goes here
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        variant="subtitle1"
                        sx={{ color: "white", fontSize: 13 }}
                      >
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea.
                      </Typography>
                    </Stack>
                  </Stack>
                </>
              )}

              <Image
                my={6}
                style={{ maxHeight: "500px" }}
                src={"/assets/images/hero.svg"}
                alt={"Person Knitting cloth"}
              />
            </div>
          </Container>
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
      </Box>
    </Box>
  );
};

export default Section4;
