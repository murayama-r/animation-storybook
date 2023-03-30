import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Calendar } from '.'

export default {
  component: Calendar,
  title: 'atoms/Calendar',
} as Meta

type Props = ComponentProps<typeof Calendar>

const Template: Story<Props> = (args) => {
  return <Calendar {...args} />
}

export const Basic = Template.bind({})

Basic.args = {}
