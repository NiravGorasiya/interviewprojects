import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';

function Header() {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    {user ? (
                        <>
                            <Link to="/home" style={{ color: "white", marginRight: "12px" }}>Home</Link>
                            <Link to="/about" style={{ color: "white", marginRight: "12px" }}>About</Link>
                            <Link to="/tail" style={{ color: "white", marginRight: "12px" }}>Tail</Link>
                            <Link to="/activeUser" style={{ color: "white", marginRight: "12px" }}>Active user</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={{ color: "white", marginRight: "12px" }}>Login</Link>
                            <Link to="/register" style={{ color: "white", marginRight: "12px" }}>Rigster</Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;