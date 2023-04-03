import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ProgressBar from "./ProgressBar";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function ProductCard(props) {
  return (
    <Card
      sx={{
        minWidth: props.minWidth,
        marginTop: 1,
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
          Project and Teams
        </Typography>
        <div>
          <Badge
            badgeContent={"Development"}
            color="secondary"
            style={{ position: "relative" }}
            sx={{ ml: 3, pl: 2 }}
          ></Badge>
        </div>
        <Typography sx={{ fontSize: 14, fontWeight: "bold" }} component="div">
          New UI design for Project Jumbo
        </Typography>
        <Typography sx={{ fontSize: 14, color: "grey" }} component="div">
          70% complete
        </Typography>
        <ProgressBar complete="70" />
        <AvatarGroup max={4} sx={{ justifyContent: "start", mt: 2 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <div>
          <Badge
            badgeContent={"Designing"}
            color="success"
            style={{ position: "relative" }}
            sx={{ ml: 3, pl: 2 }}
          ></Badge>
        </div>
        <Typography sx={{ fontSize: 14, fontWeight: "bold" }} component="div">
          New UI design for Project Jumbo
        </Typography>
        <Typography sx={{ fontSize: 14, color: "grey" }} component="div">
          60% complete
        </Typography>
        <ProgressBar complete="60" />
        <AvatarGroup max={4} sx={{ justifyContent: "start", mt: 2 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <div>
          <Badge
            badgeContent={"Marketing"}
            color="primary"
            style={{ position: "relative" }}
            sx={{ ml: 3, pl: 2 }}
          ></Badge>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
