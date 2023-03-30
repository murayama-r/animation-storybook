import React, { FC, useState } from 'react'
import { color } from '../../styles/color'
import styled, { keyframes } from 'styled-components'

type Props = {}

export const Loading: FC<Props> = () => {
  return (
    <StLoader>
      <StLoaderBox>
        <StLoaderBoxFirstItem />
        <StLoaderBoxSecondItem />
      </StLoaderBox>
    </StLoader>
  )
}

const scale = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0, 0);
  }
  100% {
    transform: scale(1, 1);
  }
  `

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const StLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc((100vh - 200px) / 2) 0;
`

const StLoaderBox = styled.div`
  animation: 2s linear 0s infinite normal none running ${rotate};
  width: 60px;
  height: 60px;
`

const StLoaderBoxFirstItem = styled.span`
  animation: 2s linear 0s infinite normal none running ${scale};
  background-color: ${color.blue};
  border-radius: 100%;
  bottom: auto;
  height: 30px;
  position: absolute;
  top: 0;
  width: 30px;
`

const StLoaderBoxSecondItem = styled.span`
  animation: 2s linear 1s infinite normal none running ${scale};
  background-color: ${color.blue};
  border-radius: 100%;
  bottom: 0;
  height: 30px;
  position: absolute;
  top: auto;
  width: 30px;
`
