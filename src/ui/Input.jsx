import { styled } from "styled-components";

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-md);
  outline: none;
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  &:focus {
    outline: none;
  }
`;

export default Input;
