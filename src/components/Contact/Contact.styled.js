import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 80px;
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
