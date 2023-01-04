import Link from "next/link";
import styled from "styled-components";

type MobileMenuProps = {
  visible: boolean;
};

export const StyledHeader = styled.header`
  width: 100%;
  height: 54px;
  padding: 0 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.details};
`;

export const Logo = styled(Link)`
  height: 30px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    gap: 1px;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.3rem;

    svg {
      font-size: 1.2rem;
      margin-bottom: 3px;
    }
  }
`;

export const HeaderMobileMenu = styled.nav<MobileMenuProps>`
  width: 160px;
  padding-bottom: 14px;
  position: absolute;
  display: ${(props) => (props.visible ? "flex" : "none")};
  top: 53px;
  right: 16px;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.details};
  border-top: none;
  z-index: 2000;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

    li {
      width: 100%;
      height: 26px;
      display: flex;
      justify-content: center;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        color: ${(props) => props.theme.colors.text};
        font-size: 0.9rem;

        &.auth-link {
          width: 80%;
          border: 1px solid ${(props) => props.theme.colors.primary};

          &.register {
            background-color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }
  }
`;
