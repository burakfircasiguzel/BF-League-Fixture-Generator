import React from "react";
import { useEffect } from "react";
import { Button, Input, InputGroup } from "reactstrap";


const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };


  useEffect(() => {
    document.getElementById("txtk").focus();
  }, [])
  

  return (
    <div>
      <InputGroup className="animate__fadeInLeft">
        <Input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Enter team name...'
          id='txtk'
          className="animate__fadeInLeft "
        />
        <Button onClick={handleSubmit} color={editId ? "warning" : "success"} type="submit"> {editId ? "Edit" : "Add"}</Button>
      </InputGroup>
      <small><i>You can press <b>Enter Key</b> to add easily</i></small>
    </div>
  );
};

export default TodoForm;