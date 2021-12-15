import styled from "@emotion/styled";

export const Container = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  form {
    border: 2px solid;
    padding: 10px;
    display: flex;
    flex-direction: column;
  };

  label {
  color: #708090;
  font-family: "Times New Roman";
};

  input {
    display: block;
    margin-top: 3px;
    margin-bottom: 10px;
  };

  button {
  width: 85px;
  display: block;
  margin-top:5px;
  padding: 5px;
  border-radius: 4px
  border: 1px

  color: #708090;
  font-family: "Times New Roman";
  font-size: 14px;
  box-shadow: 1px 1px 2px #000000;
  cursor: pointer;
};
`
export const ListTitle = styled.p`
font-weight: 700;
font-family: "Times New Roman"
`
