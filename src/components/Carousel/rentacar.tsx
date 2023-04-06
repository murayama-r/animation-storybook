import React, { FC, useCallback, useEffect, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const Rentacar: FC<Props> = () => {
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

  const onRentacarClickHandle = (index: number) => {
    setDisplay(index)
    scrollTo(index)
  }

  const scrollTo = useCallback((slideIndex) => {
    document
      .getElementById(`card-${slideIndex}`)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }, [])

  return (
    <Wrapper>
      <RentacarWrapper>
        <RentacarCardWrapper>
          {samnail.map((index) => {
            return (
              <RentacarCard
                key={'samnail-' + index}
                onClick={() => onRentacarClickHandle(index)}
                selected={index === dispaly}
              >
                {index + 1}
              </RentacarCard>
            )
          })}
        </RentacarCardWrapper>
      </RentacarWrapper>
      <ContentWrapper>
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
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${color.lightGray};
  width: 360px;
`

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  height: 240px;
`

const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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

const RentacarWrapper = styled.div`
  width: 360px;
`

const RentacarCardWrapper = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0 0 1px 0;
  justify-content: center;
  flex-wrap: wrap;
`

const RentacarCard = styled.li<{ selected: boolean }>`
  background-color: ${color.lightGray};
  font-size: 12px;
  color: ${color.black};
  scroll-snap-align: center;
  width: 49.4%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.gray};
`
