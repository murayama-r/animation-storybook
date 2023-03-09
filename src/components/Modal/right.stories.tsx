import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { ModalRight } from './right'

export default {
  component: ModalRight,
  title: 'atoms/Modal',
} as Meta

type Props = ComponentProps<typeof ModalRight>

const Template: Story<Props> = (args) => {
  return <ModalRight {...args} />
}

export const Right = Template.bind({})

Right.args = {
  modalEnter: 500,
  modalExit: 400,
  overlayTimeout: 700,
}
