import React from 'react'
import styled from 'styled-components'
import {device} from '../breakpoints'

export default function Navbar() {
    return (
        <NavCont>
            <NavIn>
                <Logo>
                    <img src="logo.png" alt="" />
                </Logo>
                <Search>
                    <img src="icon.png" alt="icon" />
                    <input type="text" placeholder="Search" />
                </Search>
                <NavButtons>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        <Icon>
                            <img src="icon.png" alt="icon" />
                        </Icon>
                        <IconName>
                            Name
                        </IconName>
                    </NavButton>
                    <NavButton>
                        Try Premium for free
                    </NavButton>
                </NavButtons>
            </NavIn>
        </NavCont>
    )
}


//-----------styled components-------------

const NavCont = styled.div`
    width: 100vw;
    top: 0;
    position: fixed;
    padding:0 30px;
    font-size: 0.85rem;
    box-sizing: border-box;

`
const NavIn = styled.div`
    display: flex;
    max-width: 1200px;
    margin: auto;
    height: 52px;
`
const Logo = styled.div`
    img{
        width:34px;
        margin-top: 10px;
        margin-right: 8px;
        cursor: pointer;
    }
`
const Search = styled.div`
    width: 425px;
    background-color:pink;
    @media ${device.laptop} {
        min-width: 60px;
        max-width:60px;
    }
    img{
        padding-left:15px;
        margin: 8px auto;
        cursor: pointer;
        @media (min-width: 1024px) {
        display: none;
        }
    }
   input{
       margin-top: 9px;
       height:32px;
       width:232px;
       cursor: pointer;
       @media ${device.laptop} {
        display: none;
        }
   } 
`
const NavButtons = styled.div`
    display: flex;
    `
const NavButton = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 80px;
    padding: 5px 0px;
    cursor: pointer;
    &:last-child{
        width: 100px;
    }
`
const Icon = styled.div`
    width: 24px;
    margin: auto;
`
const IconName = styled.div`
    text-align: center;
`
