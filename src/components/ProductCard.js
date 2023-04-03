import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Products from "./Products";

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        minWidth: props.minWidth,
        marginRight: 5,
        boxShadow: 3,
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <div style={{ textAlign: "left" }}>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            Popular Products
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Checkout what other people are liking the most
          </Typography>
          <div style={{ display: "flex" }}>
            <Products />
            <Products />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
