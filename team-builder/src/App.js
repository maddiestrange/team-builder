import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {
  const teamArray = [
    {
    name: 'Maddie',
    role: 'Front-End',
    email: 'maddie.strange@gmail.com'
    }
  ]
  const [team, setTeam] = useState(teamArray);
  console.log(team);
  return (
    <div className="App">
      <Form member={team} setMember={setTeam}/>
      {team.map((member, index) => (
        <div className='member-card' key={index}>
          <h3>Name: {member.name}</h3>
          <h4>Role: {member.role}</h4>
          <p>Email: {member.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
