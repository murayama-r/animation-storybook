import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  src: string
  scalable: boolean
}

export const Hover: FC<Props> = ({ src, scalable = false }) => {
  return (
    <ScaleWrapper scalable={scalable}>
      <Image src={src} alt="" />
    </ScaleWrapper>
  )
}

const ScaleWrapper = styled.div<{ scalable: boolean }>`
  width: 320px;
  height: 240px;
  overflow: hidden;
  ${({ scalable }) =>
    scalable
      ? css`
          :hover img {
            transition: 0.5s;
            transform: scale(1.2);
          }
        `
      : ''}
`

const Image = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 320px;
  height: 240px;
  &:hover {
    opacity: 0.8;
  }
`
