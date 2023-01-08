import { useState } from "react";

const EditNote = ({ handleEditNote, noteProps, savedProp }) => {
  const [noteText, setNoteText] = useState(noteProps.text);
  const [bucketText, setBucketText] = useState(noteProps.bucket);

  const characterLimit = 200;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleChangeBucket = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setBucketText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const note = {
        id: noteProps.id,
        text: noteText,
        date: noteProps.date,
        bucket: bucketText,
      };
      handleEditNote(note);
      setNoteText("");
      setBucketText("");
      savedProp();
    }
  };
  return (
    <div className="note edit">
      <textarea
        rows="2"
        cols="10"
        className="edit-area bucket-input"
        placeholder="Type to add a bucket..."
        value={bucketText}
        onChange={handleChangeBucket}
      ></textarea>
      <textarea
        rows="7"
        cols="10"
        className="edit-area"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
