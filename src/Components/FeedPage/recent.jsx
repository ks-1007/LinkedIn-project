import _ from "lodash"
import React from "react"
import styled from "styled-components"

export default function Recent(user) {
  return (
    <CardCont>
      <Count>
        <Para>
          <Title>Recent</Title>
        </Para>
      </Count>
      <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
            </svg>
        </Icon>
        <IconName>React Developers - ReactJS </IconName>
          </MyItem>
          <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
        </svg>
        </Icon>
        <IconName>Front End Developer Group</IconName>
          </MyItem>
          <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
        </svg>
        </Icon>
        <IconName>JavaScript</IconName>
          </MyItem>
          
          {/* groups........ */}
    <Count>
        <Para>
          <Title style={{color:"#5192D4"}}>Groups</Title>
        </Para>
      </Count>
      <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
            </svg>
        </Icon>
        <IconName>React Developers - ReactJS </IconName>
          </MyItem>
          <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
        </svg>
        </Icon>
        <IconName>Front End Developer Group</IconName>
          </MyItem>
          <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
            <circle cx="8" cy="4" r="2"></circle>
            <circle cx="12.5" cy="5.5" r="1.5"></circle>
            <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
            <circle cx="3.5" cy="5.5" r="1.5"></circle>
        </svg>
        </Icon>
        <IconName>JavaScript</IconName>
          </MyItem>
          
          {/* events//........ */}

          <Count>
        <Para>
          <Title style={{color:"#5192D4"}}>Events</Title>
        </Para>
      </Count>
      <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z"></path>
            </svg>
        </Icon>
              <IconName>{"<React Global>" }</IconName>
          </MyItem>
          <MyItem>
            <IconName>See all</IconName>
          </MyItem>
          
          {/* hashtags........ */}
          <Count>
        <Para>
          <Title style={{color:"#5192D4"}}>Followed Hashtags</Title>
        </Para>
      </Count>
      <MyItem>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
        </svg>
        </Icon>
        <IconName>India </IconName>
          </MyItem>
          <MyItem>
        
        <IconName>See all</IconName>
          </MyItem>
          <Discover>Discover more</Discover>

    </CardCont>
  )
}

//---------styled-components--------------------------------

const CardCont = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #7e7e7e;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  max-width: 255px;
//   margin-bottom: 1.2rem;
  background-color: #fff;
  position: sticky;
  top:5rem;
`
const Count = styled.div`
  margin: 12px 0;
  padding: 1px 12px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 0.9rem;
  
`
const Para = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  display: flex;
  font-size: 0.85rem;
  &:hover{
      text-decoration: underline;
      cursor:pointer;
  }
`
const MyItem = styled.div`
  display: flex;
  padding: 2px 19px;
 &:hover{
    background-color: #ececec;
    cursor:pointer;
 }
 
`
const Icon = styled.div``
const IconName = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  padding-left: 10px;
  line-height: 1rem;
`
const Discover = styled.div`
  display: flex;
  font-size: 0.95rem;
  padding: 13px;
  padding-left:55px;
  font-weight:500;
 &:hover{
    background-color: #ececec;
    cursor:pointer;
 }
`