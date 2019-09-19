import React, { useState } from 'react';

import MemberList from './components/MemberList'
import MemberForm from './components/MemberForm'


import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const editMember = (input) => {
    setMemberToEdit(input);
  }

  const addMember = member => {
    setMembers([...members, member]);
  };


  return (
    <div className="App">
      <MemberList memberList={members} editMember={editMember} />
      <MemberForm addMember={addMember} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
