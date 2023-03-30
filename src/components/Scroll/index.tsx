import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {}

export const Scroll: FC<Props> = ({}) => {
  const onClickHandle = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <ScrollWrapper onClick={onClickHandle}>
      <ScrollImg src="/pagetop.png" alt="" />
    </ScrollWrapper>
  )
}

const ScrollWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 80px;
`
const ScrollImg = styled.img``
