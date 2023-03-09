import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { Modal } from '.'

export default {
  component: Modal,
  title: 'atoms/Modal',
} as Meta

type Props = ComponentProps<typeof Modal>

const Template: Story<Props> = (args) => {
  return <Modal {...args} />
}

export const FadeIn = Template.bind({})

FadeIn.args = {
  modalEnter: 300,
  modalExit: 300,
  overlayTimeout: 700,
}
