import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import imgUser from "../../assets/sair.svg"

const Home = () => {
  const { deslogar } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <C.sair onClick={() => [deslogar(), navigate("/")]}>
        <C.txtsair>sair</C.txtsair>
        <C.img src={imgUser}/>
      </C.sair>
    </C.Container>
  );
};

export default Home;