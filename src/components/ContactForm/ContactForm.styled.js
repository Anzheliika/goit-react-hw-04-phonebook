import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  border: 1px solid #000;
  box-shadow: 6px 6px 18px -7px rgba(0, 0, 0, 0.9);
  padding: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 10px;

`;

export const Button = styled.button`
  width: 120px;
  margin-top: 15px;
  padding: 8px;
  background-color: #8ff5d5;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 600;
  transition: background-color 1s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: #80d7bc;
  }
`;
