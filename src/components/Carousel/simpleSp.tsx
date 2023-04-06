import React, { FC, useCallback, useEffect, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const SimpleSp: FC<Props> = () => {
  const [dispaly, setDisplay] = useState(0)
  const samnail = [0, 1, 2, 3]

  const onLeftClickHandle = (index: number) => {
    if (dispaly < 1) {
      setDisplay(samnail.slice(-1)[0])
      scrollTo(samnail.slice(-1)[0])
    } else {
      setDisplay(index - 1)
      scrollTo(index - 1)
    }
  }

  const onRightClickHandle = (index: number) => {
    if (dispaly === samnail.slice(-1)[0]) {
      setDisplay(samnail[0])
      scrollTo(samnail[0])
    } else {
      setDisplay(index + 1)
      scrollTo(index + 1)
    }
  }

  const scrollTo = useCallback((slideIndex) => {
    document
      .getElementById(`card-${slideIndex}`)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }, [])

  return (
    <div>
      <ContentWrapper>
        <Arrow className={'left'} onClick={() => onLeftClickHandle(dispaly)} />
        <ContentArea>
          <CardWrapper>
            {samnail.map((index) => {
              return (
                <Card key={'card' + index} id={'card-' + index}>
                  {index + 1}
                </Card>
              )
            })}
          </CardWrapper>
        </ContentArea>
        <Arrow
          className={'right'}
          onClick={() => onRightClickHandle(dispaly)}
        />
      </ContentWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 399px;
  height: 240px;
  align-items: center;
`

const Arrow = styled.button`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-color: white;
  border: none;
  &.right {
    transform: rotate(45deg);
  }
  &.left {
    transform: rotate(225deg);
  }
  ::after {
    position: absolute;
    top: 50%;
    display: block;
    width: 10px;
    height: 10px;
    margin-top: -7px;
    border-top: 4px solid #333;
    border-right: 4px solid #333;
    content: '';
  }
`

const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 1;
`

const CardWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  width: 1440px;
  height: 100%;
`

const Card = styled.li`
  /* background-color: ${color.black}; */
  background-color: ${color.gray};
  font-size: 32px;
  color: ${color.white};
  scroll-snap-align: center;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
`
