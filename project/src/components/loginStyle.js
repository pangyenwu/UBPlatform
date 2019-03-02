import styled from "styled-components";

export const LoginWrapper = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LoginBox = styled.div`
  width: 320px;
  height: 370px;
  background: radial-gradient(
    ellipse farthest-corner at center top,
    #1e90ff 0%,
    #a9bcd0 100%
  );
  padding: 50px 30px;
  color: white;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
`;

export const Input = styled.input`
  display: block;
  width: 260px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #ff0000;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;
