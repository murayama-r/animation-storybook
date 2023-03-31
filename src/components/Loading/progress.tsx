import React, { FC, useEffect, useRef, useState } from 'react'
import { color } from '../../styles/color'
import styled from 'styled-components'

type Props = {}

export const Progress: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState(0)
  const [state, { start, stop }] = useInterval(() => setValue(value + 0.1), 1)

  useEffect(() => {
    if (value >= 100) {
      stop()
    } else if (isActive) {
      start()
    }
  }, [isActive, value, start, stop])

  const onClickHandle = () => {
    if (isActive) {
      setIsActive(false)
      setValue(0)
      stop()
    } else {
      setIsActive(true)
      start()
    }
  }

  return (
    <>
      <TestButton onClick={onClickHandle}>
        {isActive ? 'active stopAnimation' : 'nonactive startAnimation'}
      </TestButton>
      <Wrapper>
        <LoadingText>Loading...{Math.round(value)}%</LoadingText>
      </Wrapper>
      <ProgressWrapper>
        <ProgressBar isActive={isActive} value={value} state={state} />
      </ProgressWrapper>
    </>
  )
}
const TestButton = styled.button`
  margin-bottom: 80px;
`

const Wrapper = styled.div`
  width: 480px;
  text-align: center;
  margin-bottom: 8px;
`
const LoadingText = styled.span``

const ProgressWrapper = styled.div`
  width: 480px;
  height: 10px;
  border-radius: 3px;
  background-color: ${color.lightGray};
`
const ProgressBar = styled.div<{
  isActive: boolean
  value: number
  state: State
}>`
  display: ${({ value }) => (value === 0 ? 'none' : 'block')};
  height: 10px;
  background-color: ${color.main};
  border-radius: ${({ state }) =>
    state === 'STOPPED' ? '3px' : '3px 0 0 3px'};
  transition: width;
  width: ${({ value }) => value}%;
`

// 参照元
// https://zenn.dev/akhr_s/articles/065e18ab3c4883

type Control = {
  start: () => void
  stop: () => void
}

type State = 'RUNNING' | 'STOPPED'

type Fn = () => void

const useInterval = (fn: Fn, interval: number): [State, Control] => {
  const onUpdateRef = useRef<Fn>()
  const [state, setState] = useState<State>('STOPPED')

  const start = () => {
    setState('RUNNING')
  }
  const stop = () => {
    setState('STOPPED')
  }

  useEffect(() => {
    onUpdateRef.current = fn
  }, [fn])

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined
    if (state === 'RUNNING') {
      timerId = setInterval(() => {
        onUpdateRef.current?.()
      }, interval)
    } else {
      timerId && clearInterval(timerId)
    }
    return () => {
      timerId && clearInterval(timerId)
    }
  }, [interval, state])

  return [state, { start, stop }]
}
