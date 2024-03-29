import styled from 'styled-components'

export const SCPostContent = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 30px;
  margin: 20px 20%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px #c3c3c3; ;
`

export const SCPostTitle = styled.h1`
  font-weight: 600;
`

export const SCPostText = styled.p`
  font-size: 16px;
  line-height: 2rem;
  font-weight: 300;
`

export const SCDeleteButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

export const SCAuthorContainer = styled.small`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const SCAuthorName = styled.small`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  height: 30px;
`

export const SCAuthorEmail = styled.small`
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-size: 10px;
`
