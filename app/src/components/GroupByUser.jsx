import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TonalityRoundedIcon from "@mui/icons-material/TonalityRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

import data from "../utils/fetchApi.json";

const GroupByStatus = () => {
  return (
    <Row>
      <Col sm="2">
        <div style={{ marginBottom: "10px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color="inherit" position="static" sx={{ border: "none" }}>
              <Toolbar>
                <AddToQueueRoundedIcon />
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Backlog {"  "}
                  {
                    data["tickets"].filter((t) => t["status"] === "Backlog")
                      .length
                  }
                </Typography>
                <IconButton>
                  <AddRoundedIcon />
                </IconButton>
                <IconButton>
                  <MoreHorizRoundedIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        {data["tickets"].map((t) => {
          if (t["status"] === "Backlog") {
            return (
              <Card body style={{ textAlign: "left", marginBottom: "5px" }}>
                <CardTitle tag="h7">{t["id"]}</CardTitle>
                <CardText>
                  <b>{t["title"]}</b>
                </CardText>
              </Card>
            );
          }
        })}
      </Col>
      <Col sm="2">
        <div style={{ marginBottom: "5px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color="inherit" position="static" sx={{ border: "none" }}>
              <Toolbar>
                <PanoramaFishEyeRoundedIcon />
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Todo{"  "}
                  {data["tickets"].filter((t) => t["status"] === "Todo").length}
                </Typography>
                <IconButton>
                  <AddRoundedIcon />
                </IconButton>
                <IconButton>
                  <MoreHorizRoundedIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        {data["tickets"].map((t) => {
          if (t["status"] === "Todo") {
            return (
              <Card body style={{ textAlign: "left", marginBottom: "5px" }}>
                <CardTitle tag="h7">{t["id"]}</CardTitle>
                <CardText>
                  <b>{t["title"]}</b>
                </CardText>
              </Card>
            );
          }
        })}
      </Col>
      <Col sm="2">
        <div style={{ marginBottom: "5px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color="inherit" position="static" sx={{ border: "none" }}>
              <Toolbar>
                <TonalityRoundedIcon color="primary" />
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  In Progress{"  "}
                  {
                    data["tickets"].filter((t) => t["status"] === "In progress")
                      .length
                  }
                </Typography>
                <IconButton>
                  <AddRoundedIcon />
                </IconButton>
                <IconButton>
                  <MoreHorizRoundedIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        {data["tickets"].map((t) => {
          if (t["status"] === "In progress") {
            return (
              <Card body style={{ textAlign: "left", marginBottom: "5px" }}>
                <CardTitle tag="h7">{t["id"]}</CardTitle>
                <CardText>
                  <b>{t["title"]}</b>
                </CardText>
              </Card>
            );
          }
        })}
      </Col>
      <Col sm="2">
        <div style={{ marginBottom: "5px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color="inherit" position="static" sx={{ border: "none" }}>
              <Toolbar>
                <CheckCircleRoundedIcon color="secondary" />
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Done{"  "}
                  {data["tickets"].filter((t) => t["status"] === "Done").length}
                </Typography>
                <IconButton>
                  <AddRoundedIcon />
                </IconButton>
                <IconButton>
                  <MoreHorizRoundedIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        {data["tickets"].map((t) => {
          if (t["status"] === "Done") {
            return (
              <Card body style={{ textAlign: "left", marginBottom: "5px" }}>
                <CardTitle tag="h7">{t["id"]}</CardTitle>
                <CardText>
                  <b>{t["title"]}</b>
                </CardText>
              </Card>
            );
          }
        })}
      </Col>
      <Col sm="2">
        <div style={{ marginBottom: "5px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar color="inherit" position="static" sx={{ border: "none" }}>
              <Toolbar>
                <CancelRoundedIcon color="disabled" />
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Canceled{"  "}
                  {
                    data["tickets"].filter((t) => t["status"] === "Canceled")
                      .length
                  }
                </Typography>
                <IconButton>
                  <AddRoundedIcon />
                </IconButton>
                <IconButton>
                  <MoreHorizRoundedIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        {data["tickets"].map((t) => {
          if (t["status"] === "Canceled") {
            return (
              <Card body style={{ textAlign: "left", marginBottom: "5px" }}>
                <CardTitle tag="h7">{t["id"]}</CardTitle>
                <CardText>
                  <b>{t["title"]}</b>
                </CardText>
              </Card>
            );
          }
        })}
      </Col>
    </Row>
  );
};

export default GroupByStatus;
