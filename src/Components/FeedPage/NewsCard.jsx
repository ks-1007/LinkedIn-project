import React from 'react'
import styled from 'styled-components'

export default function NewsCard() {
    return (
        <CardCont>
            <Top>
                <Name>LinkedIn News</Name>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                    </svg>
                </Icon>
            </Top>
            <News>
                <Heading>
                    <Bullet><img src="bullet.png" alt="." /></Bullet> <div> The 25 statups to watch</div>
                </Heading>
                <Comment>
                    Top news | 60,425 readers
                </Comment>
            </News>
            <News>
                <Heading>
                    <Bullet><img src="bullet.png" alt="." /></Bullet> <div> Golden rule of salary negotiation</div>
                </Heading>
                <Comment>
                    5d ago | 8,272 readers
                </Comment>
            </News>
            <News>
                <Heading>
                    <Bullet><img src="bullet.png" alt="." /></Bullet> <div> No pay for 'office housework'</div>
                </Heading>
                <Comment>
                    10h ago | 21,425 readers
                </Comment>
            </News>
            <News>
                <Heading>
                    <Bullet><img src="bullet.png" alt="." /></Bullet> <div> Apple workers split on remote work</div>
                </Heading>
                <Comment>
                    1h ago | 1,327 readers
                </Comment>
            </News>
            <News>
                <Heading>
                    <Bullet><img src="bullet.png" alt="." /></Bullet> <div>Facebook pauses Instagram for kids</div>
                </Heading>
                <Comment>
                    10d ago | 15,120 readers
                </Comment>
            </News>
            <Bottom>
                <BtName>Show more</BtName>
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
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
    min-width: 315;
    display: flex;
    flex-direction: column;
    color: #000000E6;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    width: 315px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: .7rem;
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
const Bullet = styled.div`
    padding-right: 15px;
`
const Comment = styled.div`
    padding-left: 25px;
    font-size: 0.8rem;
    color: #00000099;
`
const Bottom = styled.div`
    display: flex;
    margin-top: .6rem;
`
const BtName = styled.div`
    padding-right: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #00000099;
`