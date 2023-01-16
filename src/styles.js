import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #383838;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2 px solid rgba(209, 211, 212, 0.4);
  height: 40px;
  margin-right: 40px;
  width: 342px;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  background: #8052ec;
  font-size: 17px;
  line-height: 2px;
  border: none;
  color: #fff;
  font-weight: 900;
  width: 130px;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#e8ff8b" : "#e4e4e4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 10px;
  width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    margin-top: 60px;
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;

export const EmptyTasks = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #383838;
  }
`;
