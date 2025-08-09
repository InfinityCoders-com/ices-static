import React from 'react'
import styled from 'styled-components'
import NightSkyline from '../../images/screensavers/night-skyline.jpg'

const ScreenSaverContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${NightSkyline}) center center no-repeat;
  background-size: cover;
  position: absolute;
  z-index: 999;
  div {
    position: absolute;
    bottom: 5%;
    width: 100vw;
    padding: 0 6vw;
    box-sizing: border-box;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    span {
      color: #98c1f2;
      font-family: Lato;
    }
    .time {
      font-size: 7vw;
      font-weight: 300;
    }
    .date {
      font-size: 4vw;
      font-weight: 200;
    }
  }
`

export const ScreenSaver = ({ show }: any) => {
  const [time, setTime] = React.useState<string>('')
  React.useEffect(() => {
    if (show) {
      var timer = setInterval(() => {
        const d: any = new Date()
        setTime(`${d}`.split(' ')[4].split(':').filter((i, j) => j < 2).join(':'))
      }, 1000)
    }
    return () => 
      clearInterval(timer)
  }, [])
  if (!show) {
    return null
  }
  const date = `${new Date}`.split(' ').filter((i, j) => j < 4).join(' ')
  return (
    <ScreenSaverContainer>
      <div>
        <span className='time'>{time}</span>
        <span className='date'>{date}</span>
      </div>
    </ScreenSaverContainer>
  )
}