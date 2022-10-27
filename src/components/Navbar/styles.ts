import styled from "styled-components";
import { BACKGROUND_SECONDARY_COLOR, SECONDARY_COLOR } from "src/styles/constants";

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
  color: inherit;
  font-size: 24px;
  padding: 16px;
  border-radius: 12px;
  margin: 12px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  max-height: 72px;

  &:hover {
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
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`

export const SCSignOutTitle = styled.p`
    margin: 5px 0;
    padding: 0;
`

export const SCUserName = styled.p`
    font-size: 16px;
    font-style: italic;
    margin: 5px 0;
    padding: 0;
`
