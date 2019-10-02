import React, { useState } from "react";

const NoteForm = props => {
  console.log(props);
  //where should we store data that is going to change?
  //IN our state
  //  const [title, setTitle] = useState('')
  //   const [desc, setDesc] = useState('')
  const [note, setNote] = useState({
    title: "",
    body: ""
  });

  const changeHandler = event => {
    //computed properties
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(event.target.name);
  };

  const submitForm = event => {
    event.preventDefault();
    const newNote = {
      ...note,
      id: Date.now()
    };
    props.addNewNote(newNote);
    setNote({ title: "", body: "" });
  };
  return (
    // note all the accessibility sides of forms
    // Don't use the div, use the form element!
    // what elements should we have in a form?// -input- with type =?
    //look at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/inputv
    // -label
    <form onSubmit={submitForm}>
      {/* need htmlFor instead of for since it is a reserved keyword in JS */}
      {/* htmlFor and name on the input go together */}
      <label htmlFor="title">Note Title</label>
      {/* When we add the value nothing happens because we already set the value! */}
      {/* show other kinds of inputs like option, select, textarea etc */}
      {/* onChange takes a callback like other dom events */}
      <input
        type="text"
        name="title"
        // value={title}
        value={note.title}
        // onChange={event => {
        //   //  What happens when we console.log the value?
        //   //  React keeps changing our state back to the empty value. We need to use setTitle to update the state.
        //   console.log(event.target.value);
        //   //  setTitle(event.target.value)
        // setNote({...note,  title: event.target.value });
        // }}

        onChange={changeHandler}
      />
      <label htmlFor="desc">Description</label>
      <textarea
        name="body"
        placeholder="Type your note here"
        // value={desc}
        value={note.body}
        // onChange={event => {
        //   console.log(event.target.value);
        //   //  setDesc(event.target.value)
        //   setNote({...note, desc: event.target.value});
        // }}
        onChange={changeHandler}
      />

      {/* We don't actually need a button, we could just press enter.
     What happens when we press enter?
     It refreshes our page by default */}
      <button type="submit">Add note</button>
    </form>
  );
};
// Talk about controllled vs uncontrolled components
//https://reactjs.org/docs/forms.html#controlled-components
export default NoteForm;
