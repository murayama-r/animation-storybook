import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

import { Hover } from '.'

export default {
  component: Hover,
  title: 'atoms/Hover',
} as Meta

type Props = ComponentProps<typeof Hover>

const Template: Story<Props> = (args) => {
  return (
    <Wrapper>
      <HoverWapper>
        <span>scale&opacity</span>
        <Hover src="/image-1.jpg" scalable={true} {...args} />
      </HoverWapper>
      <HoverWapper>
        <span>opacity</span>
        <Hover src="/image-2.jpg" {...args} />
      </HoverWapper>
    </Wrapper>
  )
}

export const Basic = Template.bind({})

Basic.args = {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const HoverWapper = styled.div``
