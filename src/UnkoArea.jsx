import styled from "styled-components";

export const UnkoArea = (props) => {
  return (
    <Sunko>
      <SHeader> HEADER </SHeader>
      {props.children}
    </Sunko>
  );
};

// styled componentを定義しているところ。中身はCSSのままいけちゃう。
// ジャケー氏も言っていたけどこれは使いやすいように思う。
const Sunko = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  background-color: yellow;
  padding: 8px;
  margin: 8px;
  justify-content: space-around;
  align-items: center;
`;

const SHeader = styled.header`
  border: solid 2px #392eff;
  border-radius: 100px;
  background-color: green;
  padding: 8px;
  color: white;
  margin: 8px;
  justify-content: space-around;
  align-items: center;
`;
