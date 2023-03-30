import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/color'
import { ja } from 'date-fns/locale'
import {
  addMonths,
  format,
  getDaysInMonth,
  startOfMonth,
  startOfDay,
  isBefore,
  isSameDay,
} from '../../utils/date'

type Props = {}

export const Calendar: FC<Props> = () => {
  const [display, setDisplay] = useState(0)
  const [displayDates, setDisplayDates] = useState<Date[][]>([[]])
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()))
  const dayOfWeeks: string[] = ['日', '月', '火', '水', '木', '金', '土']
  const today: Date = useMemo(() => startOfDay(new Date()), [])
  const startOfMonths: Date[] = useMemo(() => {
    return [
      startOfMonth(today),
      startOfMonth(addMonths(today, 1)),
      startOfMonth(addMonths(today, 2)),
      startOfMonth(addMonths(today, 3)),
      startOfMonth(addMonths(today, 4)),
      startOfMonth(addMonths(today, 5)),
    ]
  }, [today])

  const dates: Date[][] = useMemo(
    () =>
      startOfMonths.map((m) => {
        return [...Array(getDaysInMonth(m))].map(
          (_, i) => new Date(m.getFullYear(), m.getMonth(), i + 1, 0, 0, 0),
        )
      }),
    [startOfMonths],
  )

  useEffect(() => {
    const createDisplayDates: () => Date[][] = () => {
      const d = dates[display]
      const rd: Date[][] = []
      let c = 0
      d.forEach((d, i) => {
        if (i === 0) {
          rd.push([])
        }
        if (i !== 0 && d.getDay() === 0) {
          c += 1
          rd.push([])
        }
        rd[c].push(d)
      })
      return rd
    }
    setDisplayDates(createDisplayDates())
  }, [dates, display])

  const addmonth = () => {
    if (display < 5) {
      setDisplay(display + 1)
    }
  }

  const submonth = () => {
    if (display > 0) {
      setDisplay(display - 1)
    }
  }

  return (
    <Wrapper>
      <MonthWrapper>
        <Circle onClick={submonth} disable={display === 0}>
          <LeftArrow
            src="/arrow-type-1-right@3x.png"
            alt=""
            width={18}
            height={18}
            disable={display === 0}
          />
        </Circle>
        <div>{format(startOfMonths[display], 'yyyy/MM')}</div>
        <Circle onClick={addmonth} disable={display === 5}>
          <RightArrow
            src="/arrow-type-1-right@3x.png"
            alt=""
            width={18}
            height={18}
            disable={display === 5}
          />
        </Circle>
      </MonthWrapper>
      <TableWrapper>
        <WeeksWrapper>
          <WeeksRow>
            {dayOfWeeks.map((d, i) => (
              <WeeksHeader key={'day' + i} day={i}>
                {d}
              </WeeksHeader>
            ))}
          </WeeksRow>
        </WeeksWrapper>
        <DatesWrapper>
          {displayDates.map((r, i) => {
            if (r.length === 0) {
              return
            }
            if (i === 0 && r.length < 7) {
              const addedR = [].concat(
                [...Array(7 - r.length)].map((_, i) => new Date(0, 0)),
                r,
              )
              return (
                <DatesRow key={'row' + i}>
                  {addedR.map((d, i) => {
                    return (
                      <DatesData
                        key={'day' + d.getDate() + i}
                        disable={isBefore(d, today)}
                        selected={isSameDay(selectedDate, d)}
                        day={d.getDay()}
                        onClick={() => {
                          if (
                            isBefore(d, today) ||
                            d.getMonth() !== r[0].getMonth()
                          ) {
                          } else {
                            setSelectedDate(d)
                          }
                        }}
                      >
                        {d.getMonth() === r[0].getMonth() ? format(d, 'd') : ''}
                      </DatesData>
                    )
                  })}
                </DatesRow>
              )
            } else if (r.length < 7) {
              const addedR = [].concat(
                r,
                [...Array(7 - r.length)].map((_, i) => new Date(0, 0)),
              )
              return (
                <DatesRow key={'row' + i}>
                  {addedR.map((d, i) => {
                    return (
                      <DatesData
                        key={'day' + d.getDate() + i}
                        disable={isBefore(d, today)}
                        selected={isSameDay(selectedDate, d)}
                        day={d.getDay()}
                        onClick={() => {
                          if (
                            isBefore(d, today) ||
                            d.getMonth() !== r[0].getMonth()
                          ) {
                          } else {
                            setSelectedDate(d)
                          }
                        }}
                      >
                        {d.getMonth() === r[0].getMonth() ? format(d, 'd') : ''}
                      </DatesData>
                    )
                  })}
                </DatesRow>
              )
            } else {
              return (
                <DatesRow key={'row' + i}>
                  {r.map((d, i) => {
                    return (
                      <DatesData
                        key={'day' + d.getDate()}
                        disable={isBefore(d, today)}
                        selected={isSameDay(selectedDate, d)}
                        day={d.getDay()}
                        onClick={() => {
                          if (
                            isBefore(d, today) ||
                            d.getMonth() !== r[0].getMonth()
                          ) {
                          } else {
                            setSelectedDate(d)
                          }
                        }}
                      >
                        {format(d, 'd')}
                      </DatesData>
                    )
                  })}
                </DatesRow>
              )
            }
          })}
        </DatesWrapper>
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2px;
  padding: 24px;
  background: ${color.white};
  border: 1px solid ${color.blue};
  border-radius: 3px;
  width: 332px;
`

const MonthWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 6px;
`

const TableWrapper = styled.table``

const WeeksWrapper = styled.thead``

const WeeksRow = styled.tr`
  box-sizing: border-box;
  word-break: break-word;
  word-wrap: break-word;
  font-feature-settings: palt;
  text-rendering: optimizeLegibility;
  outline: none;
`

const WeeksHeader = styled.th<{ day: number }>`
  padding: 6px 12px;
  border: none;
  text-align: center;
  font-weight: 300;
  background-color: ${color.white};
  color: ${({ day }) =>
    day === 0 ? 'red' : day === 6 ? color.blue : color.black};
`

const DatesWrapper = styled.tbody``

const DatesRow = styled.tr`
  box-sizing: border-box;
  word-break: break-word;
  word-wrap: break-word;
  font-feature-settings: palt;
  text-rendering: optimizeLegibility;
  outline: none;
`

const DatesData = styled.td<{
  disable: boolean
  selected: boolean
  day: number
}>`
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};
  padding: 6px 12px;
  border: none;
  text-align: center;
  font-weight: 300;
  background-color: ${({ selected }) => (selected ? color.blue : color.white)};
  color: ${({ disable, selected, day }) =>
    disable
      ? color.lightGray
      : selected
      ? color.white
      : day === 0
      ? 'red'
      : day === 6
      ? color.blue
      : color.black};
  border-radius: 3px;
`

const Circle = styled.div<{ disable: boolean }>`
  color: ${color.gray};
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};
  background-color: ${color.paleGray};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightArrow = styled.img<{ disable: boolean }>`
  opacity: ${({ disable }) => (disable ? 0.2 : 1)};
`
const LeftArrow = styled.img<{ disable: boolean }>`
  transform: rotate(180deg);
  opacity: ${({ disable }) => (disable ? 0.2 : 1)};
`
