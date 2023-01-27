import styled from 'styled-components'
import { BACKGROUND_SECONDARY_COLOR, PRIMARY_COLOR } from '../../styles/constants'

export const SCNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const SCLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${BACKGROUND_SECONDARY_COLOR};
  font-size: 24px;
  padding: 16px;
  border-radius: 12px;
  margin: 12px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  max-height: 72px;

  &:hover {
    color: ${PRIMARY_COLOR};
    background-color: ${BACKGROUND_SECONDARY_COLOR};
  }
`

export const SCRightContent = styled.div`
  display: flex;
`

export const SCLeftContent = styled.div`
  display: flex;
`

export const SCLogo = styled.div`
  width: 60px;
  height: 60px;
  background-image: url('https://i.ibb.co/R6hzBS5/memoji.png');
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  margin: 0 6px;
`

export const SCSignOut = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`

export const SCSignTitle = styled.p`
  margin: 5px 0;
  padding: 0;
`

export const SCButtonLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${BACKGROUND_SECONDARY_COLOR};
  font-size: 24px;
  padding: 16px;
  border-radius: 12px;
  margin: 12px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  max-height: 72px;

  &:hover {
    color: ${PRIMARY_COLOR};
    background-color: ${BACKGROUND_SECONDARY_COLOR};
  }
`

export const SCUserImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
`
