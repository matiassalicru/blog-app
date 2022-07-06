import styled from 'styled-components'

export const SCPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: #fca252;
  width: 80%;
  padding: 15px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 10px;
  transition: all .6s;

  &:hover {
    box-shadow: 3px 3px 10px #c2c2c2;
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

