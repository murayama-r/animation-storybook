import { ja } from 'date-fns/locale'
import dateFnsStartOfMonth from 'date-fns/startOfMonth'
import dateFnsAddMonths from 'date-fns/addMonths'
import dateFnsFormat from 'date-fns/format'
import dateFnsGetDaysInMonth from 'date-fns/getDaysInMonth'
import dateFnsStartOfDay from 'date-fns/startOfDay'
import dateFnsIsBefore from 'date-fns/isBefore'
import dateFnsIsSameDay from 'date-fns/isSameDay'

export const startOfMonth = (date: Date | number): Date => {
  return dateFnsStartOfMonth(date)
}

export const addMonths = (date: Date | number, amount: number): Date => {
  return dateFnsAddMonths(date, amount)
}

export const format = (
  date: Date | number,
  format: string,
  options?: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: number
    useAdditionalWeekYearTokens?: boolean
    useAdditionalDayOfYearTokens?: boolean
  },
): string => {
  return dateFnsFormat(date, format, options)
}

export const getDaysInMonth = (date: Date | number): number => {
  return dateFnsGetDaysInMonth(date)
}

export const startOfDay = (date: Date | number): Date => {
  return dateFnsStartOfDay(date)
}

export const isBefore = (
  date: Date | number,
  dateToCompare: Date | number,
): boolean => {
  return dateFnsIsBefore(date, dateToCompare)
}

export const isSameDay = (
  dateLeft: Date | number,
  dateRight: Date | number,
): boolean => {
  return dateFnsIsSameDay(dateLeft, dateRight)
}
