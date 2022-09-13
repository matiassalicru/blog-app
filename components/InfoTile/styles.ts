import styled from "styled-components";
import { ACCENT_COLOR } from "styles/constants";

export const SCInfoTileContainer = styled.div`
  background-color: ${ACCENT_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 120px;
  margin: 0 0 0 20px;
  padding: 8px;
  min-height: 360px;
`

export const SCInfoTileTitle = styled.p`
  text-decoration: none;
  align-self: flex-start;
  font-size: 24px;
  padding: 16px;
  border-radius: 12px;
  margin: 12px;
  transition: 0.3s;
  font-weight: 500;
`

export const SCInfoTilePhoto = styled.img`
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  background-image: url('https://i.ibb.co/zRFhPds/profile-Image.png');
  background-position: center;
  background-size: cover;
`

export const SCInfoTileDescription = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center; 
  padding: 0 4px
`
