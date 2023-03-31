import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Progress } from './progress'

export default {
  component: Progress,
  title: 'atoms/Loading',
} as Meta

type Props = ComponentProps<typeof Progress>

const Template: Story<Props> = (args) => {
  return <Progress {...args} />
}

export const ProgressBar = Template.bind({})

ProgressBar.args = {}
