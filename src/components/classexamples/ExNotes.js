import React from "react";

// What data type is props?
// it is an object!

const Notes = props => {
  console.log(props);
  return (
    <div className="note-list">
      {/* How do we create individual notes for each object in the array? */}
      {/* forEach will iterate over the entire array but since we want it to return something new we are going to use .map */}
      {/* props is an object and we are grabbing the key notesList */}
      {/* What arguement does map take? : a callback*/}
      {/* our callback takes arguements as well: the items in the array (we will call note), the index if we needed it, and it could take the entire array */}
      {props.notesList.map(note => {
        return (
          <div className="note" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
