import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 962px;
  width: 100%;
  @media screen and (max-width: 884px) {
    height: 800px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: 1600px;
  height: 940px;
`;

export const Input = styled.input`
  height: 24px;
  width: 200px;
`;

export const Label = styled.label`
  font-family: 'Baloo Tamma 2', cursive;
  color: #fff;
  font-size: 3rem;
`;

export const Textarea = styled.textarea`
  font-family: 'Baloo Tamma 2', cursive;
  color: black;
  background-color: white;
  height: 80px;
  width: 300px;
`;

export const UserName = styled.div``;
export const Emaill = styled.div``;
export const Subject = styled.div``;
export const Message = styled.div``;
