import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Container,
  Input,
  ListItem,
  ToDoList,
  Trash,
  Check,
  EmptyTasks,
} from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }]);
    }

    setTask("");
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <h1>ToDo List</h1>
        <div>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="O que tenho para fazer..."
            value={task}
          />
          <Button onClick={handleClick}>Adicionar</Button>
        </div>

        {list.length > 0 ? (
          list.map((item) => {
            return (
              <ul key={item.id}>
                <ListItem isFinished={item.finished}>
                  <Check onClick={() => finishTask(item.id)} size={24} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} size={24} />
                </ListItem>
              </ul>
            );
          })
        ) : (
          <EmptyTasks>
            <h2>Não existem tarefas</h2>
          </EmptyTasks>
        )}
      </ToDoList>
    </Container>
  );
}

export default App;
