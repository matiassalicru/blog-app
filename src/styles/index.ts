import styled from 'styled-components'
import { device } from '../utils/contants'

export const SCIndexMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SCIndexContent = styled.div`
  display: grid;
  max-width: 100%;
  width: 100%;
  grid-template-columns: 75% 25%;
  margin: 60px 0;
  padding: 0 50px;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    gap: 20px;
    padding: 0 20px;
  }
`
