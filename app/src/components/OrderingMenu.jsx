import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GroupingMenu() {
  const [priority, setPriority] = React.useState("Priority");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={priority}
        onChange={handleChange}
      >
        <MenuItem value={"Priority"}>Priority</MenuItem>
        <MenuItem value={"Title"}>Title</MenuItem>
      </Select>
    </FormControl>
  );
}
