import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Carousel } from '.'

export default {
  component: Carousel,
  title: 'atoms/Carousel',
} as Meta

type Props = ComponentProps<typeof Carousel>

const Template: Story<Props> = (args) => {
  return <Carousel {...args} />
}

export const SP = Template.bind({})

SP.args = {}
