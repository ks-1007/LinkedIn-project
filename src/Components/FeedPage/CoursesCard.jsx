import React from 'react'
import styled from 'styled-components'

export default function NewsCard() {
    return (
        <CardCont>
            <Top>
                <Name>Today's top cources</Name>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                    </svg>
                </Icon>
            </Top>
            <News>
                <Heading>
                     1. The Secret to better Decssion
                </Heading>
                <Comment>
                    Seth Godins
                </Comment>
            </News>
            <News>
                <Heading>
                     2. What is Graphic Design?
                </Heading>
                <Comment>
                    Sean Adams
                </Comment>
            </News>
            <News>
                <Heading>
                     3. Align Foundations
                </Heading>
                <Comment>
                    Doug Rose
                </Comment>
            </News>
            <Bottom>
                <BtName>Show more on LinkedIn Learning</BtName>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="mercado-match" data-supported-dps="16x16" fill="#666666" width="16" height="16" focusable="false">
                    <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                    </svg>
                </Icon>
            </Bottom>
        </CardCont>
    )
}


//--------------styled-components----------------

const CardCont = styled.div`
    margin: 0;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: #000000E6;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    /* width: 315px;
    min-width: 315; */
    background-color: #fff;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: .7rem;
    padding-top: 0.4rem;
`
const Name = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
`
const Icon = styled.div`
    padding-right: 1rem;
`
const News = styled.div`
    font-size: 1rem;
    padding: 4px 0;
`
const Heading = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 4px;
    color: #000000E6;
`
const Comment = styled.div`
    padding-left: 15px;
    font-size: 0.8rem;
    margin-top: 0.1rem;
    color: #00000099;
`
const Bottom = styled.div`
    display: flex;
    margin-top: .6rem;
    padding-bottom: 0.4rem;
`
const BtName = styled.div`
    padding-right: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #00000099;
`