import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Note = ({ id, text, date, bucket, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note">
      <span>
        {bucket ? <p className="bucket-name">{bucket}</p> : null}
        {text}
      </span>
      <div className="note-footer">
        <small> {date}</small>
        <span>
          <FaEdit
            className="edit-icon"
            size="1.3em"
            onClick={() => {
              handleEditNote(id, text, date, bucket);
            }}
          />
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={() => handleDeleteNote(id)}
          />
        </span>
      </div>
    </div>
  );
};
export default Note;
