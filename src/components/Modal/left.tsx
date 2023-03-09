import React, { FC, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { Overlay } from './Overlay'

type Props = {
  modalEnter: number
  modalExit: number
  overlayEnter: number
  overlayExit: number
}

export const ModalLeft: FC<Props> = ({
  modalEnter = 500,
  modalExit = 400,
  overlayEnter = 700,
  overlayExit = 700,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const transitionTimeout =
    modalEnter > modalExit
      ? modalEnter > 700
        ? modalEnter
        : 700
      : modalExit > 700
      ? modalExit
      : 700

  return (
    <div>
      <TransitionStyle enter={modalEnter} exit={modalExit}>
        <button onClick={openModal}>open</button>
        <CSSTransition
          classNames="modal"
          in={isOpen}
          timeout={transitionTimeout}
          unmountOnExit
        >
          <div className="modal-wrapper">
            <ModalStyle>
              <div>aaa</div>
            </ModalStyle>
          </div>
        </CSSTransition>
      </TransitionStyle>
      <Overlay
        isOpen={isOpen}
        closeModal={closeModal}
        overlayEnter={overlayEnter}
        overlayExit={overlayExit}
      />
    </div>
  )
}

const TransitionStyle = styled.div<{
  enter: number
  exit: number
}>`
  .open {
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
  }
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50vw;
    z-index: 2;

    &.modal-enter {
      overflow: hidden;
      left: -50vw;
    }

    &.modal-enter-active {
      overflow: hidden;
      left: 0;
      transition: all ${({ enter }) => enter}ms;
    }

    &.modal-exit {
      left: 0;
      overflow: hidden;
    }

    &.modal-exit-active {
      overflow: hidden;
      left: -50vw;
      transition: all ${({ exit }) => exit}ms;
    }
  }
`

const ModalStyle = styled.div`
  padding: 100px;
  height: 100%;
  height: -webkit-fill-available;
  border: 1px solid ${color.lightGray};
  border-radius: 3px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
