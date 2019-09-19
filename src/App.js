import React, { useState } from 'react';

import MemberList from './components/MemberList'
import MemberForm from './components/MemberForm'


import './App.css';

function App() {
  const emptyList = [
    {
      id: 0,
      name: "",
      email: "",
      role: ""
    }
  ];

  const [members, setMembers] = useState([])
  const addMember = member => {
    setMembers([...members, member]);
  };


  return (
    <div className="App">
      <MemberList memberList={members} />
      <MemberForm addMember={addMember} />
    </div>
  );
}

export default App;
