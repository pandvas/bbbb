import { Container, Navbar, NavDropdown, NavLink, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'

function NavigationMenu() {
  const history = useHistory();
  function logout(){
    localStorage.clear();
    history.push("/login")
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bgi" variant="dark" >
      <Container>
        <Navbar.Brand href="#">Meet<span id = "uni">-Admin</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink   ><Link  to="/adminHome" className="btn sandy"  id="voli">Home</Link></NavLink>
            <NavDropdown title="Add"  id="collasible-nav-dropdown "  id="voli" className="btn" style={{color :"#fff"}}>
              <NavDropdown.Item><Link to="/addUniversity" className=" btn">University</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addCourse" className=" btn">Course</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/addEvent" className=" btn">Event</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Map" className="btn" id="collasible-nav-dropdown" id="voli">
              <NavDropdown.Item><Link to="/mapDepartment" className="btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapFaculty" className="btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapStudent" className="btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapRoll" className="btn">Roll No</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/mapEvent" className="btn">Event</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Show" id="collasible-nav-dropdown" className="btn" style={{color :" #fff"  }} id="voli" >
              <NavDropdown.Item><Link to="/showUniversity" className=" btn">University</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showDepartment" className=" btn">Department</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showHod" className=" btn">Hod</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showFaculty" className=" btn">Faculty</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showStudent" className=" btn">Student</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showRoll" className=" btn">Roll No</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/showEvent" className=" btn">Event</Link></NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item><Link to="/result" className=" btn">Result</Link></NavDropdown.Item>

            </NavDropdown>

            <NavLink   ><Link  to="/pollq" className="btn sandy"  id="voli">Poll</Link></NavLink>

            {/* <NavDropdown.Item><Link to="/showPoll" className=" btn">Poll</Link></NavDropdown.Item> */}

          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={logout} id="voli" style={{color :" #fff"}}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
}

export default NavigationMenu;
