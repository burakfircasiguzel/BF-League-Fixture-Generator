import React, { useEffect } from "react";
import { useState } from "react";
import { Edit, Home, Trash } from "react-feather";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";

const TodoList = ({ todos, handleDelete, handleEdit, }) => {
  const duration = 1500; // ms
  const [stil, setStil] = useState(`fadeIn ${duration}ms ease-out forwards`);




  return (
    <ListGroup  className='mb-2 mt-2 '>

      {todos.map((t, index) => (
        <ListGroupItem key={t.id} style={{ animation: stil }}  >
         <b>{index+1}.</b>  {t.name}    
          <ButtonGroup style={{ marginLeft: '10px' }}>
            <Button size='sm' color="warning" onClick={() => handleEdit(t.id)}>
              <Edit size='14' style={{ marginBottom: '' }} />
                Edit
            </Button>
            <Button size='sm' color="danger" onClick={() => {
              handleDelete(t.id);
            }}>
              <Trash size='14' style={{ marginBottom: '' }} />
              Delete
            </Button>
          </ButtonGroup>
        </ListGroupItem>
      ))
      }

    </ListGroup>
  );
};



export default TodoList;
