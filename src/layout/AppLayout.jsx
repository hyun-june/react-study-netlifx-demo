import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword,setKeyword] = useState("");
  const navigate = useNavigate()
  const searchByKeyword = (event)=>{
    if(!keyword){
      return alert("검색어를 입력해주세요.") 
    }
    event.preventDefault()
    navigate(`/movies?q=${keyword}`)
    setKeyword('');
  }
  return (
    <div>
      <Navbar expand="lg" className="px-5 bg-black navbar navbar-expand-lg navbar-light" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/"><img src="/netfilxLogo.png" width={93}  alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-white' href="/">Home</Nav.Link>
              <Nav.Link className='text-white' href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event)=>setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type='submit'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default AppLayout
