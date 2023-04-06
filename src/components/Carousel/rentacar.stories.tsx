import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Rentacar } from './rentacar'

export default {
  component: Rentacar,
  title: 'atoms/Carousel',
} as Meta

type Props = ComponentProps<typeof Rentacar>

const Template: Story<Props> = (args) => {
  return <Rentacar {...args} />
}

export const SPRentacar = Template.bind({})

SPRentacar.args = {}
