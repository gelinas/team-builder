import React from 'react';
    
const MemberList = props => {
  console.log("props", props);
  console.log("props.memberList", props.memberList);

//   const testEdit = () => {
//     console.log("edit function called");
//   }

  const editButton = () => {
    //props.editMember();
    console.log("button clicked");
  }

  return (
    <div className="member-list">
      <h2>Member List</h2>
      {props.memberList.map(member => {
        return (
          <div className="member-card" key={member.id}>
            <p>
              {`${member.name}, email ${member.email}, role ${member.role} `}
              <button onClick={editButton}>Edit</button>
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default MemberList;
