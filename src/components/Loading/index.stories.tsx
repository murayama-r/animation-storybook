import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Loading } from '.'

export default {
  component: Loading,
  title: 'atoms/Loading',
} as Meta

type Props = ComponentProps<typeof Loading>

const Template: Story<Props> = (args) => {
  return <Loading {...args} />
}

export const Basic = Template.bind({})

Basic.args = {}
