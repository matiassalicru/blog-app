import styled, { keyframes } from "styled-components";

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
`

export const SCSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  margin: 20px 0;
  position: relative;
  list-style: none;
  border-radius: 10px;
  background-size: 50%;
`

export const SCSkeletonTitle = styled.div`
  width: auto;
  height: 45px;
  animation-name: ${aniHorizontal};
  animation-duration: 2.8s;
  border-radius: 10px;
  animation-timing-function: linear;
  margin: 20px 20px 0 20px;
  animation-iteration-count: infinite;
  background: linear-gradient(to right, #fcfcfc 2%, #f1f1f1 18%, #fcfcfc 33%);
  background-size: 50%;
`
export const SCSkeletonContent = styled.div`
  width: auto;
  height: 30px;
  animation-name: ${aniHorizontal};
  animation-duration: 2s;
  border-radius: 10px;
  animation-timing-function: linear;
  margin: 20px;
  animation-iteration-count: infinite;
  background: linear-gradient(to right, #fcfcfc 2%, #f1f1f1 18%, #fcfcfc 33%);
  background-size: 50%;
`