import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { FrameTab } from './frame'

export default {
  component: FrameTab,
  title: 'atoms/Tab',
} as Meta

type Props = ComponentProps<typeof FrameTab>

const Template: Story<Props> = (args) => {
  return <FrameTab {...args} />
}

export const Frame = Template.bind({})

Frame.args = {}
