import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container fluid>
					<Navbar.Brand as={Link} to='/student'>
						Administration
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link as={Link} to='/student'>
								Students
							</Nav.Link>
							<Nav.Link as={Link} to='/course'>
								Classes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
