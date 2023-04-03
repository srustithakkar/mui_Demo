import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

export default function SocialMediaButtons() {
  return (
    <>
      <Avatar sx={{ bgcolor: "#3b5998", boxShadow: 3 }}>
        <FacebookIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: "#1DA1F2", boxShadow: 3 }}>
        <TwitterIcon sx={{ color: grey[50] }} size={"large"} />
      </Avatar>
      <Avatar sx={{ bgcolor: "#1DA1F2", boxShadow: 3 }}>
        <LinkedInIcon sx={{ color: grey[50] }} size={"large"} />
      </Avatar>
      <Avatar sx={{ bgcolor: "#dd2a7b", boxShadow: 3 }}>
        <InstagramIcon sx={{ color: grey[50] }} size={"large"} />
      </Avatar>
    </>
  );
}
