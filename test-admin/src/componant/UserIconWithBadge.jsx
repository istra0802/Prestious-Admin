import React from "react";
import { Badge } from "@mui/material";
import UserIcon from "@mui/icons-material/Group";

const UserIconWithBadge = ({ newUsersCount }) => (
  <Badge badgeContent={newUsersCount} color="secondary">
    <UserIcon color="action" />
  </Badge>
);

export default UserIconWithBadge;
