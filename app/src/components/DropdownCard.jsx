import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupingMenu from "./GroupingMenu";
import OrderingMenu from "./OrderingMenu";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DropdownCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: 17, justifyContent: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Grouping
          </Typography>
          <GroupingMenu />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: 17, justifyContent: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Ordering
          </Typography>
          <OrderingMenu />
        </div>
      </CardContent>
    </Card>
  );
}
