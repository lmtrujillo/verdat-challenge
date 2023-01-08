import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [bucketText, setBucketText] = useState("");
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
      handleAddNote(noteText, bucketText);
      setNoteText("");
      setBucketText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        className="bucket-input"
        rows="2"
        cols="10"
        placeholder="Type to add a bucket..."
        value={bucketText}
        onChange={handleChangeBucket}
      ></textarea>
      <textarea
        rows="7"
        cols="10"
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

export default AddNote;
