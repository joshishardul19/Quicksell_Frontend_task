import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GroupingMenu() {
  const [status, setStatus] = React.useState("Status");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={status}
        onChange={handleChange}
      >
        <MenuItem value={"Status"}>Status</MenuItem>
        <MenuItem value={"User"}>User</MenuItem>
        <MenuItem value={"Priority"}>Priority</MenuItem>
      </Select>
    </FormControl>
  );
}
