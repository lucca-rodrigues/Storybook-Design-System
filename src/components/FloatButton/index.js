import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { FiX } from "react-icons/fi";
import "./styles.css";

import {
  Blinket,
  CheckoutSun,
  Eduzz,
  Jobzz,
  Nutror,
  Orbita,
  OrbitPages,
  SafeVideo,
  Telescope,
  LogoEduzz,
} from "../../assets";
import { IconButton } from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    {...props}
  />
));

export function FloatButton(userId = 1) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [apps, setApps] = useState([]);
  // const menuPathname = window.location.pathname;
  // const userId = menuPathname.substring(menuPathname.lastIndexOf("/") + 1);

  const InitialApps = [
    { name: "App1", icon: Eduzz, url: "https://store.eduzz.com" },
    { name: "App2", icon: Blinket, url: "https://app.blinket.com.br" },
    {
      name: "App3",
      icon: CheckoutSun,
      url: "https://adminsun.eduzz.com/",
    },
    { name: "App4", icon: Jobzz, url: "https://app.jobzz.com.br" },
    { name: "App5", icon: Orbita, url: "https://orbita.eduzz.com/" },
    { name: "App6", icon: Nutror, url: "https://my.nutror.com/" },
    {
      name: "App7",
      icon: OrbitPages,
      url: "https://app.orbitpages.com/",
    },
    {
      name: "App8",
      icon: Telescope,
      url: "https://telescope.eduzz.com/",
    },
    {
      name: "App9",
      icon: SafeVideo,
      url: "https://app.safevideo.com/",
    },
  ];

  useEffect(() => {
    if (userId) {
      setApps(InitialApps);
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="float-button">
      {apps.length && (
        <>
          <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={(e) => {
              anchorEl === null ? handleClick(e) : handleClose();
            }}
            className="main-button"
          >
            {anchorEl ? <FiX /> : <img src={LogoEduzz} alt="eduzz" />}
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "1fr",
                gap: "8px",
                padding: "8px",
              }}
              id="dropdown-menu-apps"
            >
              {apps.map(({ name, icon, url }) => (
                <Button
                  key={url}
                  className="btn-apps"
                  size="small"
                  onClick={() => {
                    window.open(url);
                    handleClose();
                  }}
                >
                  {/* {icon && <img src={icon} alt={name} />} */}

                  <p>{name}</p>
                </Button>
              ))}
            </div>
          </StyledMenu>
        </>
      )}
    </div>
  );
}
