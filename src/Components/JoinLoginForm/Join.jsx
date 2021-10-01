import React from "react"
import styled from "styled-components"

export default function Join() {
  return (
    <Cont>
      <Header>
        <Logo>
          <img src="logo2.png" alt="Linkedin" />
        </Logo>
        <Title>
          <h1>Make the most of your professional life</h1>
        </Title>
      </Header>
      <Form>
        <p>Emai or Phone number</p>
        <input type="text" />
        <p>Emai or Phone number</p>
        <input type="text" />
        <p>
          By clicking Agree & Join, you agree to the LinkedIn User Agreement,
          Privacy Policy, and Cookie Policy.
        </p>
        <button>Agree & Join</button>
        <div></div>
        <button>
          {" "}
          <a href="http://localhost:5000/auth/google">Join with Google</a>{" "}
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
const Title = styled.div`
  text-align: center;
  h1 {
    font-weight: 400;
    color: #000000cf;
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
