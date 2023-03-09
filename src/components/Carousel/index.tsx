import React, { FC, useCallback, useEffect, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const Carousel: FC<Props> = () => {
  const [selected, setSelected] = useState(1)
  const contents = [1, 2, 3, 4, 5]
  const onClickHandle = (index: number) => {
    // setSelected(index)
    scrollTo(index)
  }

  const scrollTo = useCallback((slideIndex) => {
    document
      .getElementById(`card-${slideIndex}`)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('carousel')
      if (el.scrollLeft < 40) {
        setSelected(1)
      } else if (233 < el.scrollLeft && el.scrollLeft < 311) {
        setSelected(2)
      } else if (467 < el.scrollLeft && el.scrollLeft < 545) {
        setSelected(3)
      } else if (701 < el.scrollLeft && el.scrollLeft < 779) {
        setSelected(4)
      } else if (974 < el.scrollLeft) {
        setSelected(5)
      }
    }

    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper>
      {/* <div>{scrollLeft}</div> */}
      <CarouselBody id="carousel">
        <CardWrapper>
          {contents.map((index) => {
            return (
              <Card key={'card' + index} id={'card-' + index}>
                <CardContent>{index}</CardContent>
              </Card>
            )
          })}
        </CardWrapper>
      </CarouselBody>
      <div>
        <ScaleWrapper>
          {contents.map((index) => {
            return (
              <Scale
                key={'scale' + index}
                selected={selected === index}
                onClick={() => onClickHandle(index)}
              />
            )
          })}
        </ScaleWrapper>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 375px;
  border: 1px solid ${color.gray};
`

const CarouselBody = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const CardWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 16px;
  width: 1356px;
`

const Card = styled.li`
  height: 254px;
  width: 274px;
  border: 1px solid ${color.gray};
  border-radius: 3px;
  margin: 0 8px;
  box-shadow: 1px 1px 4px ${color.gray};
  scroll-snap-align: center;
`

const CardContent = styled.div`
  height: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScaleWrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`

const Scale = styled.li<{ selected: boolean }>`
  cursor: pointer;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: ${({ selected }) =>
    selected ? color.main : color.lightGray};
`
