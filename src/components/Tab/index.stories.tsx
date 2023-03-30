import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Tab } from '.'

export default {
  component: Tab,
  title: 'atoms/Tab',
} as Meta

type Props = ComponentProps<typeof Tab>

const Template: Story<Props> = (args) => {
  return <Tab {...args} />
}

export const Basic = Template.bind({})

Basic.args = {
  duration: 800,
}
