import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import { Divider } from "@mui/material";
export default function FolderList() {
  return (
    <List sx={{ width: "100%", maxWidth: "400", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <FmdGoodIcon />
        </ListItemAvatar>
        <ListItemText primary="488, bligum road, JP st., NJ, California" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <CallIcon />
        </ListItemAvatar>
        <ListItemText primary="+01-992856-8535" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <MailIcon />
        </ListItemAvatar>
        <ListItemText primary="abc@gmail.com" />
      </ListItem>
    </List>
  );
}
