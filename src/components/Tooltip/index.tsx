import React, { FC, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const Tooltip: FC<Props> = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Area>
      <ContentArea>
        <EventArea
          onMouseEnter={() => setIsHover(true)}
          onTouchStart={() => setIsHover(true)}
        >
          hover
        </EventArea>
        <TooltipArea isHover={isHover}>contents</TooltipArea>
      </ContentArea>
      <Fader
        onMouseEnter={() => setIsHover(false)}
        onTouchStart={() => setIsHover(false)}
        isHover={isHover}
      ></Fader>
    </Area>
  )
}

const Area = styled.div``

const ContentArea = styled.div`
  position: relative;
  width: 80px;
`

const TooltipArea = styled.div<{ isHover: boolean }>`
  position: absolute;
  display: ${({ isHover }) => (isHover ? 'block' : 'none')};
  border: 1px solid ${color.gray};
  border-radius: 3px;
  z-index: 2;
  padding: 8px;
  top: -45px;
  left: 0px;
  ::before {
    content: '';
    position: absolute;
    z-index: 1000;
    bottom: -6px;
    left: 50%;
    margin-left: -8px;
    border-top: 8px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 0;
    border-top-color: ${color.gray};
    bottom: -8px;
    z-index: 3;
  }
  ::after {
    content: '';
    position: absolute;
    z-index: 1000;
    bottom: -6px;
    left: 50%;
    margin-left: -8px;
    border-top: 8px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 0;
    z-index: 3;
  }
`

const EventArea = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px;
  border: 1px solid ${color.gray};
  border-radius: 3px;
  z-index: 2;
  text-align: center;
`

const Fader = styled.div<{ isHover: boolean }>`
  display: ${({ isHover }) => (isHover ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`
