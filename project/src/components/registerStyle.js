import styled from "styled-components";

export const RegisterWrapper = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
`;

export const RegisterBox = styled.div`
  width: 320px;
  height: 550px;
  background: radial-gradient(
    ellipse farthest-corner at center top,
    #1e90ff 0%,
    #a9bcd0 100%
  );
  padding: 50px 30px;
  color: white;
  box-sizing: border-box;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
`;

export const Input = styled.input`
  display: block;
  width: 140%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 255px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #ff0000;
  border-radius: 5px;
  margin: 10px auto;
  text-align: center;
`;
