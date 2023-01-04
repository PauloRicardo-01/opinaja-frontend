import { HeaderMobileMenu, Logo, StyledHeader } from "./styles";
import { FaCommentDollar, FaTimes, FaBars, FaHeadset } from "react-icons/fa";
import { Button } from "../Button";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo href="/">
        Opina
        <span>
          Já
          <FaCommentDollar />
        </span>
      </Logo>
      <Button
        withoutSvgStyle
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </Button>
      <HeaderMobileMenu visible={mobileMenuOpen}>
        <ul>
          <li>
            <Link href="/">
              <FaHeadset /> Contato
            </Link>
          </li>
          <li>
            <Link href="/" className="auth-link">
              Entrar
            </Link>
          </li>
          <li>
            <Link href="/" className="auth-link register">
              Registrar
            </Link>
          </li>
        </ul>
      </HeaderMobileMenu>
    </StyledHeader>
  );
}
