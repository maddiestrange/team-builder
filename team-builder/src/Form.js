import React, { useState } from "react";

function Form(props) {
  const [member, setMember] = useState("");

    function handleChange(event){
    setMember({...member, [event.target.id]: event.target.value});
    console.log(event.target.value);
    }

    function handleSubmit(event) {
    event.preventDefault();
    props.setMember([...props.member, member]);
    console.log(member);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label> Name:<input type="text" id="name" onChange={handleChange} /></label>
      <label> Email: <input type="text" id="email" onChange={handleChange} /></label>
      <label> Role: <input type="text" id="role" onChange={handleChange} /></label>
      <button>Submit!</button>
    </form>
  );
}

export default Form;
