import React, { FC, useState } from 'react'
import { color } from '../../styles/color'
import styled, { keyframes } from 'styled-components'

type Props = {
  duration: number
}

export const Tab: FC<Props> = ({ duration = 800 }) => {
  const [display, setDisplay] = useState(0)
  const tabList: { title: string; body: string }[] = [
    {
      title: `どこの路線の
    予約ができますか？`,
      body: `スカイチケットでは国内すべての路線の航空券が検索できます。東京(羽田)発 福岡着、東京(羽田)発 札幌(新千歳)着、東京(羽田)発 那覇着をはじめとする人気路線や、それ以外のすべての路線の最安値を探すことが可能です。もちろん、国内線の検索・予約だけでなく国際線の検索・予約も可能です。`,
    },
    {
      title: `どこの航空会社の
        予約ができますか？`,
      body: `国内運航の全ての航空会社から、格安航空券を検索できます。利用できる航空会社が多いからこそ、スカイチケットの格安航空券一括検索と一斉比較がとても便利なんです。セール中の特別な格安航空券も検索できます。国内線の格安航空券はANA、JAL、スカイマークはもちろん、ピーチ航空やジェットスター、春秋航空などのLCC格安航空券の最安値や時刻表を比較することが可能です。`,
    },
    {
      title: `安心できるサイトですか？`,
      body: `skyticketは世界中の旅行者に利用されています。格安航空券サイトとして10年以上の実績を持ち、国内航空券の申込件数は年間約200万件。1600万DLを誇るアプリを使った格安航空券の予約が便利で、多くの方に愛用いただいています。出発地と目的地を選択するだけで、希望に沿った格安航空券の検索が可能です。航空会社のサービスが気になる方は、スカイチケットで航空券を購入したお客様の口コミをご覧ください。とても参考になります。`,
    },
    {
      title: `どのような支払い方法に
    対応していますか？`,
      body: `スカイチケットでは格安航空券購入の際、クレジット決済、コンビニ決済、PayPay、銀行振り込み、ペイジーなど多彩な決済手段の中から、好きな決済方法を選択することができます。詳しいご利用方法は"お支払い方法"よりご確認いただけます。`,
    },
  ]

  const onClickHandle = (index: number) => {
    setDisplay(index)
  }

  return (
    <div>
      <TabUl>
        {tabList.map((t, index) => {
          return (
            <TabLi
              id={'title' + index}
              className={index === display ? 'active' : ''}
              key={'title' + index}
              onClick={() => onClickHandle(index)}
            >
              {t.title}
            </TabLi>
          )
        })}
      </TabUl>
      {tabList.map((b, index) => {
        return (
          <Body
            id={'body' + index}
            className={index === display ? 'active' : 'none'}
            key={'body' + index}
            isShow={index === display}
            duration={duration}
          >
            {b.body}
          </Body>
        )
      })}
    </div>
  )
}

const TabUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0;
  font-size: 12px;
`
const TabLi = styled.li`
  display: flex;
  width: 100%;
  white-space: pre-line;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${color.gray};
  padding: 12px 0;

  &.active {
    border-bottom: 3px solid ${color.blue};
    padding-bottom: 10px;
    color: ${color.blue};
    font-weight: 700;
  }
`

const appear = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const Body = styled.div<{ isShow: boolean; duration: number }>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  font-size: 12px;

  &.active {
    animation: ${appear} ${({ duration }) => duration}ms ease;
  }
`
