import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import {
  itemsSortArrivalAC,
  itemsSortSendingAC,
} from "../../redux/action/RouteAction";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSortSend = () => {
    dispatch(itemsSortSendingAC());
    setAnchorEl(null);
  };
  const handleSortArrival = () => {
    setAnchorEl(null);
    dispatch(itemsSortArrivalAC());
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        SortBy
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSortSend}>Send</MenuItem>
        <MenuItem onClick={handleSortArrival}>Click</MenuItem>
      </Menu>
    </div>
  );
}
