import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { CardActionArea, CardActions } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import cardImage from "../assets/cardimage1.png";
export default function MultiActionAreaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        minWidth: props.minWidth,
        margin: 2,
        boxShadow: 3,
        borderRadius: "10px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={cardImage}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="gray"
          style={{
            width: "100%",
            padding: "0 20px 0 20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <AccountCircle fontSize="large" />
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <InsertLinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
