import Note from "./Note";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import { useState } from "react";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [editNoteFlag, setEditNoteFlag] = useState(false);
  const [editNoteProps, setEditNoteProps] = useState({});

  const editNote = (id, text, date, bucket) => {
    setEditNoteFlag(true);
    handleDeleteNote(id);
    const note = {
      id: id,
      text: text,
      date: date,
      bucket: bucket,
    };
    setEditNoteProps(note);
  };

  const savedNote = () => {
    setEditNoteFlag(false);
  };

  return (
    <div className="notes-list">
      {editNoteFlag && (
        <EditNote
          handleEditNote={handleEditNote}
          noteProps={editNoteProps}
          savedProp={() => savedNote()}
        />
      )}
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          bucket={note.bucket}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={editNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesList;
