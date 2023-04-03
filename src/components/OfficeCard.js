import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "./ListInfo";
import SocialMediaButtons from "./SocialShare";

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        minWidth: props.minWidth,
        margin: 1,
        textAlign: "left",
        boxShadow: 3,
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold" }}
          color="text.primary"
          gutterBottom
        >
          Our Office
        </Typography>
        <List />
      </CardContent>
      <CardActions sx={{ marginBottom: "15px", marginLeft: "10px" }}>
        <SocialMediaButtons />
      </CardActions>
    </Card>
  );
}
