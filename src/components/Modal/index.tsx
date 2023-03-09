import React, { FC, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { Overlay } from './Overlay'

type Props = {
  modalEnter: number
  modalExit: number
  overlayTimeout: number
}

export const Modal: FC<Props> = ({
  modalEnter = 300,
  modalExit = 300,
  overlayTimeout = 700,
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
        <div className="modal-wrapper">
          <CSSTransition
            classNames="modal"
            in={isOpen}
            timeout={transitionTimeout}
            unmountOnExit
          >
            <ModalStyle>
              <div>aaa</div>
            </ModalStyle>
          </CSSTransition>
        </div>
      </TransitionStyle>
      <Overlay
        isOpen={isOpen}
        closeModal={closeModal}
        timeout={overlayTimeout}
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    .modal-enter {
      opacity: 0;
      transform: scale(0.9);
    }

    .modal-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity ${({ enter }) => enter}ms,
        transform ${({ enter }) => enter}ms;
    }

    .modal-exit {
      opacity: 1;
    }

    .modal-exit-active {
      opacity: 0;
      transition: opacity ${({ exit }) => exit}ms,
        transform ${({ exit }) => exit}ms;
      transform: scale(0.9);
    }
  }
`

const ModalStyle = styled.div`
  padding: 100px;
  border: 1px solid ${color.lightGray};
  border-radius: 3px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
