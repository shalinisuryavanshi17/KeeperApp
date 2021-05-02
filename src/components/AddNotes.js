import React, { useState } from "react";
function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function onInputchange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function addNotes(event) {
    event.preventDefault();
    props.addNoteHandler(note);
  }
  return (
    <form>
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={onInputchange}
      />
      <textarea
        name="content"
        value={note.content}
        onChange={onInputchange}
        placeholder="Take a note..."
        rows="3"
      />

      <button onClick={addNotes}>Add</button>
    </form>
  );
}
export default AddNote;
