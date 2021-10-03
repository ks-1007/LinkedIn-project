import React from "react"
import styled from "styled-components"

export default function Join() {
  return (
    <Cont>
      <Header>
        <Logo>
          <img src="logo2.png" alt="Linkedin" />
        </Logo>
        <h1>Make the most of your professionallife</h1>
      </Header>
      <Form>
        <h2>Join</h2>
        <p>Stay updated on your professional world</p>
        <InputDiv>
          <input type="text" placeholder="Emai or Phone number" />
        </InputDiv>
        <InputDiv>
          <input type="text" placeholder="Password" />
        </InputDiv>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn User Agreement,
          Privacy Policy, and Cookie Policy.
        </p>
        <Btn>Agree & Join</Btn>
        <div></div>
        <Btn>
          {" "}
          <a href="http://localhost:5000/auth/google">Join with Google</a>{" "}
        </Btn>
      </Form>
      <Help></Help>
      <Footer>
        <div>LinkedIn &copy;</div>
        <div>User Agreement</div>
        <div>Privacy Policy</div>
        <div>Community Guidelines</div>
        <div>Cookie Policy</div>
        <div>Copyright Policy</div>
        <div>Send Feedback</div>
        <div>Language </div>
      </Footer>
    </Cont>
  )
}

//----------styled-components---------

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin: auto;
  height: 100vh;
  background-color: #fff;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #272727;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
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
  text-align: center;
  align-items: center;
  padding: 2rem 2rem;
  width: 25rem;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  input {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    outline: #0a66c2;
    text-indent: 1.5rem;
    border: 1px solid #00000099;
    &:focus {
      border: 1px solid #0a66c2;
    }
  }
  p {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    color: #0a66c2;
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    color: #272727;
  }
`
const InputDiv = styled.div`
  padding: 1rem 0;
  width: 100%;
  margin: auto;
`
const Help = styled.div``
const Btn = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  border: none;
  height: 50px;
  text-align: center;
  line-height: 50px;
  /* &:first-child { */
  background-color: #0a66c2;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  a {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
  }
  /* } */
`
const Footer = styled.div`
  display: flex;
  padding: 3rem 2rem;
  margin: auto;
  justify-content: space-between;
  div {
    padding: 1rem 1rem;
  }
`
