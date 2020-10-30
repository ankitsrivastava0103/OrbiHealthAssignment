import React from "react";
import "./styles.css";
import Fab from "@material-ui/core/Fab";   
import AddIcon from "@material-ui/icons/Add";
import { Box } from "@material-ui/core";
import Form from "./form";
import View from "./view";
import Flist from "./f_list";
import Nav from "./nav";
import Folder1 from "./folder1";
import Folder2 from "./folder2";
import Folder3 from "./folder3";

export default function App() {
  const [folder1, setFolder1] = React.useState(Folder1);
  const [folder2, setFolder2] = React.useState(Folder2);
  const [folder3, setFolder3] = React.useState(Folder3);
  const [renderfolder, setRenderFolder] = React.useState(folder1);
  const [selectedfolder, setselectedFolder] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [editname, setEditname] = React.useState("");
  const [editdes, setEditdes] = React.useState("");
  const [editindex, setEdindex] = React.useState(-1);

  const selectedfoldernumber = (n) => {
    setselectedFolder(n);
    if (n === 0) setRenderFolder(folder1);
    else if (n === 1) setRenderFolder(folder2);
    else setRenderFolder(folder3);
  };

  const handleadd = () => {
    setOpen(true);
    console.log("add");
  };
  const handlecreate = (name, description) => {
    setOpen(false);
    if (editindex !== -1) {
      renderfolder[editindex].name = name;
      renderfolder[editindex].description = description;
      setEdindex(-1);
      setEditdes("");
      setEditname("");
      if (selectedfolder === 0) setFolder1(renderfolder);
      else if (selectedfolder === 1) setFolder2(renderfolder);
      else setFolder3(renderfolder);
    } else {
      let foldercopy = [...renderfolder];
      foldercopy.unshift({ name, description });
      setRenderFolder(foldercopy);
      if (selectedfolder === 0) setFolder1(foldercopy);
      else if (selectedfolder === 1) setFolder2(foldercopy);
      else setFolder3(foldercopy);
      console.log(name + " " + description);
    }
  };

  const handledelete = (index) => {
    console.log("delete" + index);
    let foldercopy = [...renderfolder];
    foldercopy.splice(index, 1);
    setRenderFolder(foldercopy);
    if (selectedfolder === 0) setFolder1(foldercopy);
    else if (selectedfolder === 1) setFolder2(foldercopy);
    else setFolder3(foldercopy);
  };

  const handleedit = (index) => {
    console.log("edit" + index);
    setEditname(renderfolder[index].name);
    setEditdes(renderfolder[index].description);
    setEdindex(index);
    setOpen(true);
  };

  return (
    <div className="App">
      <div className="nav">
        <Nav fol={selectedfolder} />
      </div>
      <div className="topAdd">
        <span>Add New Folder/File</span>
        <Fab color="primary" aria-label="add" onClick={handleadd}>
          <AddIcon />
        </Fab>
      </div>
      <div className="container">
        <div className="leftcontainer">
          <Flist onclick={selectedfoldernumber} />
        </div>
        <div className="rightcontainer">
          <Box
            display="flex"
            flexWrap="wrap"
            m={5}
            justifyContent="space-around"
          >
            {renderfolder.map((folders, index) => (
              <View
                key={index}
                id={index}
                name={folders.name}
                des={folders.description}
                ondelclk={() => handledelete(index)}
                oneditclk={() => handleedit(index)}
              />
            ))}
          </Box>
        </div>
      </div>

      <Form open={open} onclick={handlecreate} name={editname} des={editdes} />
    </div>
  );
}
