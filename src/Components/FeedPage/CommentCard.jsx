import React from 'react'
import styled from 'styled-components'

export default function CommentCard({user}) {
    return (
        <div>
            <DetailCont>
            <Bio>
              <Img>
                <img src={user.profile_pic || "https://komarketing.com/images/2014/08/linkedin-default.png"} alt="profile" />
              </Img>
              <CBio>
                <Top>
                  <CName>
                    Mahesh Guptha
                  </CName>
                  <CTime>
                    10h
                  </CTime>
                  <Extra>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                  </svg>
                  </Extra>
                </Top>
                <Bottom>
                  <p>SDE at Sharechat</p>
                </Bottom>
              </CBio>
            </Bio>
            <ComData>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum, laudantium corporis culpa quae soluta iure sunt at voluptates, beatae facere. Voluptatibus, perferendis iusto reiciendis temporibus eveniet voluptatum id unde?
            </ComData>
          </DetailCont>
          <ReplyCont>
            <div>Like  .  <span>
              <img src="/like.svg" alt="" />
            </span> <span>0</span> </div>
            <div>Reply</div>
          </ReplyCont>
        </div>
    )
}


//----------------------------------------------------------------
const Img = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  padding-right: 0.3rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
const DetailCont = styled.div`
  margin-top: 1.5rem;
  display: flex;
  padding: 0.6rem;
  flex-direction: column;
`
const Bio = styled.div`
  display: flex;
`
const CBio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color:#f2f2f2;
  border-radius:0 0.5rem 0 0;
`
const Top = styled.div`
  display: flex;
  width: 100%;
`
const CName = styled.div`
  font-size: 1rem;
  font-weight: 500;
  flex-grow: 1;
  padding: 0.4rem 0 0 0.5rem;
`
const CTime = styled.div`
  font-size: 0.8rem;
  padding-top: 0.5rem;
`
const Extra = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`
const Bottom = styled.div`
padding: 0 0 0 0.5rem;
margin-top:-0.5rem;
padding-bottom: 0.3rem;
p{
  font-size: 0.9rem;
}
`
const ComData = styled.div`
  margin-left: 3.05rem;
  background-color:#f2f2f2;
  padding: 0.5rem 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-top: -0.1rem;
`
const ReplyCont = styled.div`
  color: #666666;
  font-size:0.8rem;
  display: flex;
  margin-left: 4rem;
  img{
    padding: 0 0.2rem;
  }
  span:last-child{
    padding-right: 0.7rem;
  }
  div:last-child {
    padding-left:  0.7rem;
    border-left: 1px solid #666666;
  }
`

