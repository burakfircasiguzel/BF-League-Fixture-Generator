import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import TodoList from "./List";
import TodoForm, { focusOnAddField } from "./Input";
import { useState } from "react";
import  FixtureGenerator  from "../utils/FixtureGenerator";
import { ArrowDown, ChevronsDown } from "react-feather";
const Home = () => {

  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState([]);
  const [editId, setEditId] = useState(0);
  const [rematch, setRematch] = useState(true);
  const [mix, setMix] = useState(false);
  const [randomize, setRandomize] = useState(false);
  const [ghostValue, setGhostValue] = useState('BYE');
  const [weekValue, setWeekValue] = useState('Week');
  const [versusValue, setVersusValue] = useState('VS');
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = teams.find((i) => i.id === editId);
      const updatedTodos = teams.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, name: team })
          : { id: t.id, name: t.name }
      );
      setTeams(updatedTodos);
      setEditId(0);
      setTeam("");
      return;
    }

    if (team !== "") {
      setTeams([...teams, { id: `${team}-${Date.now()}`, name: team }]);
      setTeam("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = teams.filter((to) => to.id !== id);
    setTeams([...delTodo]);
    focusOnAddField();
  };

  const handleEdit = (id) => {
    const editTodo = teams.find((i) => i.id === id);
    setTeam(editTodo.name);
    setEditId(id);
    focusOnAddField();
  };




  const handleRematch = () => {
    setRematch(!rematch);
  }

  const handleMix = () => {
    setMix(!mix);
  }

  const handleRandomize = () => {
    setRandomize(!randomize)
  }

  const handleOnGhostValue = (e) => {
    setGhostValue(e.target.value);
  }

  const handleOnWeekValue = (e) => {
    setWeekValue(e.target.value);
  }

  const handleOnVersusValue = (e) => {
    setVersusValue(e.target.value);
  }


  const toggle = () => setIsOpen(!isOpen)





  return (
    <div>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Create Awesome League Fixtures 📋⭐⚽🏀</CardTitle>
          <CardTitle>and Get Export as <b>PDF</b> File 📁</CardTitle>
        </CardHeader>
        <CardBody>
          <div className='form-check form-switch mb-1'>
            <Input style={{marginTop: '10px'}} className=""  type='switch' name='customSwitch' id='exampleCustomSwitch' onChange={handleRematch} defaultChecked />
            <Label size="15" for='exampleCustomSwitch' className='form-check-label'>
              Rematch
            </Label>
          </div>


          <div className='form-check form-switch mb-1'>
            <Input style={{marginTop: '10px'}} className="" type='switch' name='mix' id='mix' defaultChecked onChange={handleMix} />
            <Label  size="6" for='mix' className='form-check-label'>
            Equal Number of Matches <small><i>Home & Away games be evenly distributed</i></small>
            </Label>
          </div>



          <div className='form-check form-switch'>
            <Input style={{marginTop: '10px'}} className="" type='switch' name='rnd' id='rnd' onChange={handleRandomize} />
            <Label  size="50" for='rnd' className='form-check-label'>
              Randomize <small><i>It creates a different one every time you turn it on.</i></small>
            </Label>
          </div>

          <div className="mt-2 mb-2" >
            <Button className='mb-2' outline color='primary' onClick={toggle}>
             Other Options <ChevronsDown size={15} /> 
            </Button>
            <Collapse isOpen={isOpen}>
              <div className='mb-2'>
                <Label for='ghotsValue' className='form-check-label'>
                  Ghost Word:
                </Label>
                <Input type='text' name='ghotsValue' id='ghotsValue' onChange={handleOnGhostValue} value={ghostValue} placeholder='Default: BYE' />
              </div>
              <div className='mb-2'>
                <Label for='weekValue' className='form-check-label'>
                  Week Word:
                </Label>
                <Input type='text' name='weekValue' id='weekValue' onChange={handleOnWeekValue} value={weekValue} placeholder='Default: Week' />
              </div>
              <div className='mb-2'>
                <Label for='versusValue' className='form-check-label'>
                  Versus Word:
                </Label>
                <Input type='text' name='versusValue' id='versusValue' onChange={handleOnVersusValue} value={versusValue} placeholder='Default: VS' />
              </div>
            </Collapse>
          </div>


          <TodoForm
            handleSubmit={handleSubmit}
            todo={team}
            editId={editId}
             setTodo={setTeam}
          />
           {teams.length  > 0 ? <div><small><i>Number of Teams: </i></small><b>{teams.length}</b></div> : ''}

          <TodoList
            todos={teams}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
           />

          <FixtureGenerator teams={teams} rematch={rematch} mix={mix} randomize={randomize} ghostValue={ghostValue} weekValue={weekValue} versusValue={versusValue} />

        </CardBody>
      </Card>


    </div>
  );
};

export default Home;
