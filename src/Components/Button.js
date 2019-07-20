import styled from "styled-components";
export const ButtonElement = styled.button`
  background: #fff;
  border:none;
  padding: .5rem;
  font-size:  ${props => (props.navBtn ? "1.3rem" : "1rem")};
  font-weight: 600
  outline:none;
  &:hover{
    background:  ${props =>
      props.navBtn ? "#fff" : "var(--mainBrown)"};
    color: ${props => (props.navBtn ? "var(--mainBrown)" : "#000")};

  }
`;
