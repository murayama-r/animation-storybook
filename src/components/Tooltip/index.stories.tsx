import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'

import { Tooltip } from '.'

export default {
  component: Tooltip,
  title: 'atoms/Tooltip',
} as Meta

type Props = ComponentProps<typeof Tooltip>

const Template: Story<Props> = (args) => {
  return (
    <Wrapper>
      <Tooltip {...args} />
    </Wrapper>
  )
}

export const Basic = Template.bind({})

Basic.args = {}

const Wrapper = styled.div`
  padding: 80px 64px;
`
