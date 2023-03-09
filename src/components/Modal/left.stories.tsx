import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { ModalLeft } from './left'

export default {
  component: ModalLeft,
  title: 'atoms/Modal',
} as Meta

type Props = ComponentProps<typeof ModalLeft>

const Template: Story<Props> = (args) => {
  return <ModalLeft {...args} />
}

export const Left = Template.bind({})

Left.args = {
  modalEnter: 500,
  modalExit: 400,
  overlayEnter: 700,
  overlayExit: 700,
}
