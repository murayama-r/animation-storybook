import React, { FC, useState } from 'react'
import styled from 'styled-components'

type Props = {
  content: string
  line: number
  duration: number
  isRightHandedRotate: boolean
}

export const Accordion: FC<Props> = ({
  content = 'body',
  line = 1,
  duration = 800,
  isRightHandedRotate = true,
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <AccordionWrapper>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <span>title</span>
        <Arrow
          className={isActive ? 'active' : ''}
          src="/arrow-type-1-right.png"
          alt=""
          width={16}
          height={16}
          duration={duration}
          isRightHandedRotate={isRightHandedRotate}
        />
      </AccordionTitle>
      <AccordionBody
        className={isActive ? 'active' : ''}
        line={line}
        duration={duration}
      >
        <AccordionBodyContent>{content}</AccordionBodyContent>
      </AccordionBody>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div``

const AccordionTitle = styled.div`
  margin-top: 8px;
  padding: 16px;
  font-size: 16px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AccordionBody = styled.div<{ line: number; duration: number }>`
  font-size: 16px;
  transition: height ${({ duration }) => duration}ms;
  height: 0px;
  overflow: hidden;

  &.active {
    height: ${({ line }) => line * 24 + 32}px;
  }
`

const AccordionBodyContent = styled.div`
  margin: 16px;
  white-space: pre-wrap;
`

const Arrow = styled.img<{ duration: number; isRightHandedRotate: boolean }>`
  transition: transform ${({ duration }) => duration}ms;
  transform: rotate(
    ${({ isRightHandedRotate }) => (isRightHandedRotate ? '90deg' : '90deg')}
  );

  &.active {
    transform: rotate(
      ${({ isRightHandedRotate }) =>
        isRightHandedRotate ? '-90deg' : '270deg'}
    );
  }
`
