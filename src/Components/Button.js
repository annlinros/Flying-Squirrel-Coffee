import styled from "styled-components";
export const ButtonElement = styled.button`
  background: none;
  border: none;
  color:
  padding: .5rem;
  font-size: 1.3rem
  outline:none;
  &:hover{
    color:  ${props => (props.cart ? "#fff" : "var(--mainBrown)")};
  }
`;
