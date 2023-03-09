import { FC } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

type Props = {
  isOpen: boolean
  closeModal: () => void
  overlayEnter: number
  overlayExit: number
}

export const Overlay: FC<Props> = ({
  isOpen,
  closeModal,
  overlayEnter = 700,
  overlayExit = 700,
}) => {
  const transitionTimeout =
    overlayEnter > overlayExit
      ? overlayEnter > 700
        ? overlayEnter
        : 700
      : overlayExit > 700
      ? overlayExit
      : 700
  return (
    <TransitionStyle overlayEnter={overlayEnter} overlayExit={overlayExit}>
      <CSSTransition
        classNames="overlay"
        in={isOpen}
        timeout={transitionTimeout}
        unmountOnExit
      >
        <OverlayStyle onClick={closeModal} />
      </CSSTransition>
    </TransitionStyle>
  )
}

const TransitionStyle = styled.div<{
  overlayEnter: number
  overlayExit: number
}>`
  .overlay-enter {
    opacity: 0;
  }

  .overlay-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${({ overlayEnter }) => overlayEnter}ms,
      transform ${({ overlayEnter }) => overlayEnter}ms;
  }

  .overlay-exit {
    opacity: 1;
  }

  .overlay-exit-active {
    opacity: 0;
    transition: opacity ${({ overlayExit }) => overlayExit}ms,
      transform ${({ overlayExit }) => overlayExit}ms;
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
