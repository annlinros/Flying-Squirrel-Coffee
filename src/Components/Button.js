import styled from "styled-components";
export const ButtonElement = styled.button`
  background: #fff;
  // color:  ${props => (props.navBtn ? "#000" : "#fff")};
  border: ${props => (props.navBtn ? "none" : ".01rem solid #fff")};
  padding: .5rem;
  font-size: 1.3rem
  outline:none;
  &:hover{
    // color:  ${props => (props.cart ? "#fff" : "var(--mainBrown)")};
    color: var(--mainBrown);
  }
`;
