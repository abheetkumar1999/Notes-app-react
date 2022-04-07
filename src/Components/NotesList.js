import React from "react";

import Note from "./Note.js";
import AddNotes from "./AddNotes.js";

const NotesList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
