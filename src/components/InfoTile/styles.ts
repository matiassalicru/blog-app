import styled from 'styled-components'
import { device } from '../../utils/contants'
import { ACCENT_COLOR } from '../../styles/constants'

export const SCInfoTileContainer = styled.div`
  background-color: ${ACCENT_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 0 0 0 20px;
  padding: 8px;
  height: fit-content;
  max-height: 400px;
  box-shadow: 0 2px 10px ${ACCENT_COLOR};

  @media ${device.laptop} {
    width: 100%;
    margin: 0;
    height: min-content;
  }
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

  @media ${device.laptop} {
    padding: 10px 0 0 10px;
    font-size: 18px;
    margin: 0;
  }
`

export const SCInfoTilePhoto = styled.div`
  border-radius: 50%;
  width: 7rem;
  min-height: 7rem;
  background-image: url('https://i.ibb.co/zRFhPds/profile-Image.png');
  background-position: center;
  background-size: cover;

  @media ${device.laptop} {
    width: 5.5rem;
    min-height: 5.5rem;
    margin-bottom: 20px;
  }
`

export const SCInfoTileDescription = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 0 4px;

  @media ${device.laptop} {
    padding: 0 20px 10px 20px;
    font-size: 16px;
    margin: 0;
  }
`
