import styled from 'styled-components'

export const SCPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid;
  border-color: #fca252;
  width: 80%;
  margin: 20px 0;
  cursor: pointer;
  border-bottom-right-radius: 10px;
  transition: all .6s;

  &:hover {
    box-shadow: 7px 7px 10px lightslategray;
    transform: translate(10px)
  }
`

export const SCPostTitle = styled.h1`
  width: 100%;
  text-align: start;
  cursor: pointer;
`

export const SCPostText = styled.p`
  color: rebeccapurple;
  font-size: 1.2rem;
  height: 50px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`
