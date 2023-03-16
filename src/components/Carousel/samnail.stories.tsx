import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Samnail } from './samnail'

export default {
  component: Samnail,
  title: 'atoms/Carousel',
} as Meta

type Props = ComponentProps<typeof Samnail>

const Template: Story<Props> = (args) => {
  return <Samnail {...args} />
}

export const SPSamnail = Template.bind({})

SPSamnail.args = {}
