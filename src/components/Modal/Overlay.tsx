import { FC } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

type Props = {
  isOpen: boolean
  closeModal: () => void
  timeout: number
}

export const Overlay: FC<Props> = ({ isOpen, closeModal, timeout = 700 }) => {
  return (
    <TransitionStyle timeout={timeout}>
      <CSSTransition
        classNames="overlay"
        in={isOpen}
        timeout={timeout}
        unmountOnExit
      >
        <OverlayStyle onClick={closeModal} />
      </CSSTransition>
    </TransitionStyle>
  )
}

const TransitionStyle = styled.div<{ timeout: number }>`
  .overlay-enter {
    opacity: 0;
  }

  .overlay-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${({ timeout }) => timeout}ms,
      transform ${({ timeout }) => timeout}ms;
  }

  .overlay-exit {
    opacity: 1;
  }

  .overlay-exit-active {
    opacity: 0;
    transition: opacity ${({ timeout }) => timeout}ms,
      transform ${({ timeout }) => timeout}ms;
  }
`

const OverlayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
