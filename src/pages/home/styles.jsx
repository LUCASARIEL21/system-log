import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 100px;
`;

export const sair = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #046ee5;
`;

export const txtsair = styled.h2`
  font-size: 25px;
  color: white;
`;

export const img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-left: 30px;
`;