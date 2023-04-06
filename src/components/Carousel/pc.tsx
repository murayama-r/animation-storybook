import React, { FC, useCallback, useEffect, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const CarouselPC: FC<Props> = () => {
  const [start, setStart] = useState(1)
  const contents = [1, 2, 3, 4, 5, 6, 7, 8]
  const onClickHandle = (index: number) => {
    scrollTo(index)
  }

  const isAvailableAdd = start < contents.length - 3
  const isAvailableSub = start > 1

  const add = () => {
    if (isAvailableAdd) {
      onClickHandle(start + 1)
      setStart(start + 1)
    }
  }
  const sub = () => {
    console.log('sub')
    console.log(isAvailableSub)
    if (isAvailableSub) {
      onClickHandle(start - 1)
      setStart(start - 1)
    }
  }

  const scrollTo = useCallback((slideIndex) => {
    document
      .getElementById(`card-${slideIndex}`)
      .scrollIntoView({ behavior: 'smooth', inline: 'start' })
  }, [])

  return (
    <Wrapper>
      <Left onClick={sub} isAvailable={isAvailableSub}>
        <LeftArrow src="/arrow-2.png" alt="" width={12} />
      </Left>
      <Area>
        <CardWrapper>
          {contents.map((index) => {
            return (
              <Card key={'card' + index} id={'card-' + index}>
                <CardContent>{index}</CardContent>
              </Card>
            )
          })}
        </CardWrapper>
      </Area>
      <Right onClick={add} isAvailable={isAvailableAdd}>
        <RightArrow src="/arrow-2.png" alt="" width={12} />
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 1024px;
  padding: 0 24px;
`

const Area = styled.div`
  position: relative;
  margin: 16px 0;
  width: 1024px;
  overflow: hidden;
`
const Left = styled.div<{ isAvailable: boolean }>`
  position: absolute;
  top: 42%;
  left: 8px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 1px solid ${color.lightGray};
  opacity: 0.8;
  background-color: ${color.white};
  display: ${({ isAvailable }) => (isAvailable ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Right = styled.div<{ isAvailable: boolean }>`
  position: absolute;
  top: 42%;
  right: 8px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 1px solid ${color.lightGray};
  opacity: 0.8;
  background-color: ${color.white};
  display: ${({ isAvailable }) => (isAvailable ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const LeftArrow = styled.img`
  transform: rotate(180deg);
`
const RightArrow = styled.img``

const CardWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 16px 0;
  width: 2320px;
`

const Card = styled.li`
  height: 254px;
  width: 242px;
  border: 1px solid ${color.gray};
  border-radius: 3px;
  margin: 0 8px;
  box-shadow: 1px 1px 4px ${color.gray};
  scroll-snap-align: start;

  :first-child {
    margin: 0 8px 0 0;
  }
  :last-child {
    margin: 0 0 0 8px;
  }
`

const CardContent = styled.div`
  height: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
