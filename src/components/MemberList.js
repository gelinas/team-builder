import React from 'react';
    
const MemberList = props => {
  console.log("props", props);
  console.log("props.memberList", props.memberList);
  return (
    <div className="member-list">
      <h2>Member List</h2>
      {props.memberList.map(member => {
        return (
          <div className="member-card" key={member.id}>
            <p>{`${member.name}, email ${member.email}, role ${member.role}`}</p>
          </div>
        )
      })}
    </div>
  );
}

export default MemberList;
