import React from 'react'
import styled from 'styled-components'

export default function NewsCard() {
    return (
        <CardCont>
                <img src="ad.jpg" alt="" />
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
    //min-width: 315;
    //width: 315px;
    margin-bottom: 1.2rem;
    background-color: #fff;
`
