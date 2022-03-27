import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
 <Navbar fixed="top" bg="dark" variant="dark">
     <Container>
         <Navbar.Brand>
             React Typescript
         </Navbar.Brand>
     </Container>

 </Navbar>
  );
  };


export default Header;