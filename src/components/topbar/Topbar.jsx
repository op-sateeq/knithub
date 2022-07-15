import { CallOutlined, ExpandMore, MailOutline } from "@mui/icons-material";
import { Box, Container, createSvgIcon, MenuItem, styled } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import Image from "components/BazarImage";
import BazarMenu from "components/BazarMenu";
import { FlexBox } from "components/flex-box";
import NavLink from "components/nav-link/NavLink";
import { Span } from "components/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import { layoutConstant } from "utils/constants";
import MailPath from "../../../public/assets/icons/mail.svg";

const TopbarWrapper = styled(Box)(({ theme }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      fontSize: 11,
      fontWeight: 600,
      color: "white",
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarCenter": {
    "& .title": {
      fontSize: 11,
      fontWeight: 600,
      color: "white",
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
}));

const Topbar = () => {
  const [currency, setCurrency] = useState(currencyList[0]);
  const [language, setLanguage] = useState(languageList[0]);

  const handleCurrencyClick = (curr) => () => setCurrency(curr);

  const handleLanguageClick = (lang) => () => setLanguage(lang);

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);
  return (
    <TopbarWrapper>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox
      
          className="topbarLeft"
          alignItems="center"
          justifyContent={"start"}

        >
          <FlexBox alignItems="center">
            <Image sx={{ height: 17.5 }} src={"/assets/icons/mail.svg"} />
            <Span className="title">SIGN UP FOR 15% OFF YOUR FIRST ORDER</Span>
          </FlexBox>
        </FlexBox>
        <FlexBox className="topbarCenter" alignItems="center">
          <FlexBox alignItems="center" >
            <Image sx={{ height: 17.5 }} src={"/assets/icons/delivery.svg"} />
            <Span className="title">FREE DELIVERY ON ORDERS OVER £99</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox
          className="topbarRight"
          alignItems="center"
          justifyContent={"end"}
        >
          <Image
            sx={{ px: 1, height: 17.5 }}
            src={"/assets/icons/instagram.svg"}
          />
          <Image
            sx={{ px: 1, height: 17.5 }}
            src={"/assets/icons/facebook.svg"}
          />
          <Image
            sx={{ px: 1, height: 17.5 }}
            src={"/assets/icons/twitter.svg"}
          />
          <Image
            sx={{ px: 1, height: 17.5 }}
            src={"/assets/icons/linkedin.svg"}
          />
          <Image sx={{ px: 1, height: 17.5 }} src={"/assets/icons/mail.svg"} />

          {/* <BazarMenu
            handler={
              <TouchRipple className="handler marginRight">
                <Span className="menuTitle">{language.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleLanguageClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazarMenu> */}

          {/* <BazarMenu
            direction="right"
            handler={
              <TouchRipple className="handler">
                <Span className="menuTitle">{currency.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {currencyList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleCurrencyClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazarMenu> */}
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

const languageList = [
  {
    title: "EN",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "BN",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "HN",
    imgUrl: "/assets/images/flags/in.png",
  },
];
const currencyList = [
  {
    title: "USD",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "EUR",
    imgUrl: "/assets/images/flags/uk.png",
  },
  {
    title: "BDT",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "INR",
    imgUrl: "/assets/images/flags/in.png",
  },
];
export default Topbar;
