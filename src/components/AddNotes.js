import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isRefreshed,setRefresh]=useState(false)
  function onInputchange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function expand()
  {
    setRefresh(!isRefreshed)
  }
  function addNotes(event) {
    event.preventDefault();
    props.addNoteHandler(note);
  }
  
  return (
    <form className="create-note">
   { isRefreshed &&
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={onInputchange}
      />}
      <textarea
        name="content"
        value={note.content}
        onChange={onInputchange}
        placeholder="Take a note..."
        rows={isRefreshed? 3:1} onClick={expand}
      />
     <Zoom in={isRefreshed}>
      <Fab onClick={addNotes}><AddIcon/></Fab></Zoom>
       </form>
  );
}
export default AddNote;
