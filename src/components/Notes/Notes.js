import React, { useState, useEffect } from "react";
import "./Notes.css";
import pencil from "../../assets/images/pencil.png";

function Notes() {
  const [notes, setNotes] = useState("");

  const handleInputChange = (e) => {
    setNotes(e.target.value);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      <div>
        <h1>All Notes</h1>
      </div>
      <textarea
        value={notes}
        onChange={handleInputChange}
        rows={6}
        placeholder="Add a note"
      />
      <div className="notes__icon">
        <img src={pencil} alt="pencil" />
      </div>
    </div>
  );
}

export default Notes;
