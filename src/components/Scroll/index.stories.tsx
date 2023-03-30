import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/color'

import { Scroll } from '.'

export default {
  component: Scroll,
  title: 'atoms/Scroll',
} as Meta

type Props = ComponentProps<typeof Scroll>

const Template: Story<Props> = (args) => {
  return (
    <Wapper>
      <Scroll {...args} />
    </Wapper>
  )
}

export const Basic = Template.bind({})

Basic.args = {}

const Wapper = styled.div`
  height: 2400px;
  width: 100%;
  background: linear-gradient(${color.black}, ${color.white});
`
