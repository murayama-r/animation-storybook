import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { SimpleSp } from './simpleSp'

export default {
  component: SimpleSp,
  title: 'atoms/Carousel',
} as Meta

type Props = ComponentProps<typeof SimpleSp>

const Template: Story<Props> = (args) => {
  return <SimpleSp {...args} />
}

export const SPSimple = Template.bind({})

SPSimple.args = {}
