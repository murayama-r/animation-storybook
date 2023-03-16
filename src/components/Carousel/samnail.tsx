import React, { FC, useCallback, useEffect, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const Samnail: FC<Props> = () => {
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

  const onSamnailClickHandle = (index: number) => {
    setDisplay(index)
    scrollTo(index)
  }

  const scrollTo = useCallback((slideIndex) => {
    document
      .getElementById(`card-${slideIndex}`)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }, [])

  return (
    <div>
      <ContentWrapper>
        <Left onClick={() => onLeftClickHandle(dispaly)}>
          {/* <LeftArrow src="/left-arrow.png" alt="" width={16} /> */}
        </Left>
        <Number>{`${dispaly + 1}/${samnail.length}`}</Number>
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
        <Right onClick={() => onRightClickHandle(dispaly)}>
          {/* <RightArrow src="/left-arrow.png" alt="" width={16} /> */}
        </Right>
      </ContentWrapper>
      <SamnailWrapper>
        <SamnailCardWrapper>
          {samnail.map((index) => {
            return (
              <SamnailCard
                key={'samnail-' + index}
                onClick={() => onSamnailClickHandle(index)}
                selected={index === dispaly}
              >
                {index + 1}
              </SamnailCard>
            )
          })}
        </SamnailCardWrapper>
      </SamnailWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  height: 240px;
`

const Number = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${color.black};
  opacity: 0.4;
  color: ${color.white};
  padding: 8px 16px;
  font-size: 12px;
`

const Left = styled.button`
  position: absolute;
  cursor: pointer;
  top: 30%;
  left: 0;
  width: 36px;
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  ::before {
    background-image: url(/left-arrow.png);
    background-repeat: no-repeat;
    background-size: 26px;
    content: '';
    height: 26px;
    margin-top: -13px;
    position: absolute;
    top: 50%;
    width: 26px;
  }
  :focus {
    background-color: ${color.black};
    opacity: 0.4;
  }
`

const Right = styled.button`
  position: absolute;
  cursor: pointer;
  top: 30%;
  right: 0;
  background-color: transparent;
  width: 36px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  ::before {
    background-image: url(/left-arrow.png);
    background-repeat: no-repeat;
    background-size: 26px;
    content: '';
    height: 26px;
    margin-top: -13px;
    position: absolute;
    top: 50%;
    width: 26px;
    transform: rotate(180deg);
  }
  :focus {
    background-color: ${color.black};
    opacity: 0.4;
  }
`

const LeftArrow = styled.img``
const RightArrow = styled.img`
  transform: rotate(180deg);
`

const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
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

const SamnailWrapper = styled.div`
  width: 360px;
`

const SamnailCardWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin: 8px 16px;
  padding: 0;
  justify-content: center;
`

const SamnailCard = styled.li<{ selected: boolean }>`
  /* background-color: ${color.black}; */
  background-color: ${color.gray};
  font-size: 12px;
  color: ${color.white};
  scroll-snap-align: center;
  width: 60px;
  height: 40px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ selected }) => (selected ? color.main : color.white)};
`
