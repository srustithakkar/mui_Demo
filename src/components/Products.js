import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=2");
      const { results } = await res.json();
      setData(results);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        Object.values(data).map((item, i) => {
          return (
            <ListItem alignItems="flex-start" key={item.phone}>
              <ListItemAvatar>
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "10px",
                    marginRight: "20px",
                  }}
                  alt="user"
                  src={item.picture.large}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })
      ) : (
        <div>here</div>
      )}
    </div>
    //
  );
}
