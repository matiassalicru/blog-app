import styled from 'styled-components'

export const SCPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 15px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 0px 10px #c2c2c2;
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
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  align-self: flex-start;
`

