import styled from 'styled-components'

export const SCPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: #fca252;
  width: 80%;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all .6s;

  &:hover {
    box-shadow: 7px 7px 10px lightslategray;
    /* transform: translate(10px) */
  }
`

export const SCPostTitle = styled.h1`
  width: 100%;
  text-align: start;
  cursor: pointer;
`

export const SCPostText = styled.p`
  font-size: 1.2rem;
  height: 50px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`

