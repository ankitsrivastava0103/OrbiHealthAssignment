import React from "react";
import "./styles.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";

export default function FolderList(props) {
  // console.log(stu);
  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        {/* {stu.map((stu, index) => ( */}
        <ListItem onClick={() => props.onclick(0)}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Folder1" />
        </ListItem>

        <ListItem onClick={() => props.onclick(1)}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Folder2" />
        </ListItem>

        <ListItem onClick={() => props.onclick(2)}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Folder3" />
        </ListItem>
        {/* ))} */}
      </List>
    </>
  );
}
