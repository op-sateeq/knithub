import { KeyboardArrowDown, PersonOutline } from "@mui/icons-material";
import {
  Badge,
  Box,
  Dialog,
  Drawer,
  styled,
  Button,
  Stack,
} from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import BazarButton from "components/BazarButton";
import Image from "components/BazarImage";
import CategoryMenu from "components/categories/CategoryMenu";
import { FlexBox } from "components/flex-box";
import Category from "components/icons/Category";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";
import MiniCart from "components/mini-cart/MiniCart";
import MobileMenu from "components/navbar/MobileMenu";
import GrocerySearchBox from "components/search-box/GrocerySearchBox";
import { useAppContext } from "contexts/AppContext";
import Link from "next/link";
import Login from "pages-sections/sessions/Login";
import { useState } from "react";
import { layoutConstant } from "utils/constants";
import SearchBox from "../search-box/SearchBox"; // styled component

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
})); // ==============================================================

// ==============================================================
const Header = ({ isFixed, className, searchBoxType = "type1" }) => {
  const theme = useTheme();
  const { state } = useAppContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          gap: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox
          mr={2}
          minWidth="170px"
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Button
            sx={{ mr: 3, fontSize: 11 }}
            variant="text"
            startIcon={<Image src={"/assets/icons/currency.svg"} />}
          >
            GBP
          </Button>
          <Button
            sx={{ fontSize: 11 }}
            variant="text"
            startIcon={<Image src={"/assets/icons/user-account.svg"} />}
          >
            ACCOUNT
          </Button>
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          {searchBoxType === "type1" && <SearchBox />}
          {searchBoxType === "type2" && <GrocerySearchBox />}
        </FlexBox>

        <Stack
          sx={{ height: "100%", mt: 1 }}
          direction="column"
          justifyContent={"center"}
          alignItems={"end"}
        >
          <FlexBox
            alignItems="center"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Button
              sx={{ mr: 3, fontSize: 12 }}
              variant="text"
              startIcon={<Image src={"/assets/icons/search-lens.svg"} />}
            >
              SEARCH
            </Button>
            <Button
              sx={{ fontSize: 12 }}
              variant="text"
              startIcon={<Image src={"/assets/icons/shopping-basket.svg"} />}
            >
              BASKET (0)
            </Button>
          </FlexBox>

          <Button
            sx={{
              my: 0.5,
              fontSize: 10,
              border: "1px solid #C8994A",
              borderRadius: 17,
              maxWidth: "max-content",
            }}
            variant="outlined"
          >
            WHOLESALE ENQUIRIES
          </Button>
        </Stack>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>

        {downMd && <MobileMenu />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
