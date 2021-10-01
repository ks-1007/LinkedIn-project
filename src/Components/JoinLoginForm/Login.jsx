import React from "react"
import styled from "styled-components"

export default function Join() {
  return (
    <Cont>
      <Header>
        <Logo>
          <img src="logo2.png" alt="Linkedin" />
        </Logo>
      </Header>
      <Form>
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        <input type="text" placeholder="Emai or Phone number" />
        <input type="text" placeholder="Password" />
        <p>Forgot password?</p>
        <button>Sign In</button>
        <div></div>
        <button>
          {" "}
          <a href="http://localhost:5000/auth/google">Login with Google</a>{" "}
        </button>
      </Form>
      <Help></Help>
      <Footer></Footer>
    </Cont>
  )
}

//----------styled-components---------

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin: auto;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
`
const Logo = styled.div`
  margin: auto;
  align-items: center;
  width: 10rem;
  img {
    width: 100%;
  }
`
const Form = styled.div`
  margin: auto;
  align-items: center;
  padding: 1rem;
  width: 35rem;
  border: 1px solid #00000099;
  border-radius: 10px;
`
const Help = styled.div``
const Footer = styled.div``
