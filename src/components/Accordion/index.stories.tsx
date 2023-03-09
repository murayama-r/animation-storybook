import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Accordion } from '.'

export default {
  component: Accordion,
  title: 'atoms/Accordion',
} as Meta

type Props = ComponentProps<typeof Accordion>

const Template: Story<Props> = (args) => {
  return <Accordion {...args} />
}

export const Basic = Template.bind({})

Basic.args = {
  content: `格安から高級まで掲載ホテルは世界中100万軒以上。
予約するならスカイチケットがとても便利です。`,
  line: 2,
  duration: 800,
  isRightHandedRotate: true,
}
