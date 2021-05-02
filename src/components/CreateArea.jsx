import React, { useState } from "react";
import AddNote from "./AddNotes";
import Note from "./Note";

function CreateArea() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((preValues) => {
      return [...preValues, note];
    });
    console.log(note);
  }
  function deleteNotes(id) {
    setNotes((preValues) => {
      return [
        notes.filter((note, index) => {
          return index != id;
        })
      ];
    });
  }
  return (
    <div>
      <AddNote addNoteHandler={addNote} />
      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            onDeleteHandler={deleteNotes}
          />
        );
      })}
    </div>
  );
}

export default CreateArea;
