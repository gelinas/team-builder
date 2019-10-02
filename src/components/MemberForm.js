import React, { useState, useEffect } from 'react';

const MemberForm = props => {  
  console.log("props", props)
  const emptyMember = {
    name: "",
    email: "",
    role: ""
  };

  const [member, setMember] = useState(emptyMember);

  useEffect(() => {
    setMember(props.memberToEdit)
  }, [props.memberToEdit]);

  const handleChanges = e => {
    console.log(member);
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addMember(newMember);
    setMember(emptyMember);
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
}

export default MemberForm;
