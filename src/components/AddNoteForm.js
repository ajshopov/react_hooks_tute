import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const position = useMousePosition()

  const addNote = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_NOTE', title: title, body: body })
    // setNotes([
    //   ...notes, { title, body }
    // ])
    setTitle('')
    setBody('')
  }

  return (
    <React.Fragment>
      <p>add note {position.x}, {position.y}</p>
      <form onSubmit={addNote}>
        <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </React.Fragment>
  );
}

export default AddNoteForm;