import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <NavCont>
            <NavIn>
                <Logo>
                    <img src="icon.png" alt="" />
                </Logo>
                <Search>
                    searchbar
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
    height: 52px;
    background-color: #d1b0b0;
`
const NavIn = styled.div`
    display: flex;
    max-width: 1240px;
    margin: auto;
    background-color:white

`
const Logo = styled.div`
    
`
const Search = styled.div`
    
`
const NavButtons = styled.div`
    display: flex;
`
const NavButton = styled.div`
    display: flex;
    flex-direction: column;
`
const Icon = styled.div`
    
`
const IconName = styled.div`
    
`
