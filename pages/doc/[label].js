import { IconButton } from "@material-tailwind/react";
import { MdDescription } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";
import TextEditor from "../../components/TextEditor";

function docEdit() {
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <IconButton size="5xl" variant="text">
          <MdDescription color="blue" size="5xl" />
        </IconButton>
        <div className="flex-grow px-2">
          <h2>Aditya</h2>
          <div className="flex items-center space-x-1 ml-1 h-8 text">
            <p className="options">File</p>
            <p className="options">Edit</p>
            <p className="options">View</p>
            <p className="options">Insert</p>
            <p className="options">Format</p>
            <p className="options">Tools</p>
          </div>
        </div>
        <IconButton size="5xl" className="hidden md:inline-flex">
          <BsFillShareFill /> <span>Share</span>
        </IconButton>
      </header>
      <TextEditor/>
    </div>
  );
}

export default docEdit;
