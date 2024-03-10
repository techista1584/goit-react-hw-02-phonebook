import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  background-color:white;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: ${(p) => p.theme.colors.black};
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 25px;
  background: white;
  border: ${(p) => p.theme.border.none};
  outline: none;
  padding: 10px;
  font-size: ${(p) => p.theme.fontSize.s};
  color: ${(p) => p.theme.colors.black};
  text-shadow: ${(p) => p.theme.boxShadow.textShadow};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow:${(p) => p.theme.boxShadow.textShadow};
  transition: border 0.3s ease-in-out; /* Add this line */
  &:focus {
    border: 1.5px solid orange;
  }
  &:hover {
    border: 1.5px solid orange;
  }
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(p) => p.theme.colors.white};
  padding: 10px;
  background: orange;
  border: none;
  border-radius: 4px;
  :focus,
  :hover {
    background: ${(p) => p.theme.colors.orangered}; 
    box-shadow: ${(p) => p.theme.boxShadow.boxShadow};
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
