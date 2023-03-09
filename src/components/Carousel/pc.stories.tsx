import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { CarouselPC } from './pc'

export default {
  component: CarouselPC,
  title: 'atoms/Carousel',
} as Meta

type Props = ComponentProps<typeof CarouselPC>

const Template: Story<Props> = (args) => {
  return <CarouselPC {...args} />
}

export const PC = Template.bind({})

PC.args = {}
