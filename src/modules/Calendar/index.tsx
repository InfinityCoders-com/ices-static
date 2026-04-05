import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../../contexts/AppContext"
import { Input } from "../../styled"
import {
  containerBottomSpacing,
  containerRightSpacing,
  containerTopSpacing,
  containerVSpacing,
  fontSizing
} from "../../styled/composeStyled"
import { AppsContainer, PageContainer } from "../../styled/layout"
import { Flex } from "../../UI Library/Components/Layout/Flex"
import { getloggedInUserDetails } from "../../utils/storage"
import { createLabelWithEmptyValues } from "../../utils/string"
import { AppMenu } from "../AppMenu"

interface Contact {}

const Sidebar = styled.div`
  width: 10%;
  height: 100%;
  overflow: hidden;
  min-width: 150px;
  max-width: 450px;
  ${containerRightSpacing}
`

const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  margin-right: 10%;
  ${containerVSpacing}
  ${containerRightSpacing}
`

const SearchInput = styled(Input)`
  border-radius: 6px;
  padding: 8px 16px;
  border: 1px solid #323232;
  font-size: 12px;
`

const ContactListContainer = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 30px);
  .calendar {
    width: 100%;
    margin: auto;
    font-family: Arial, sans-serif;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .calendar-header button {
    padding: 5px 10px;
    cursor: pointer;
  }

  .calendar-header span {
    font-size: 16px;
    display: flex;
    justify-content: center;
    min-width: 150px;
    font-weight: bold;
    color: #f4f4f6;
  }

  .calendar-days,
  .calendar-dates {
    border-right: 1px solid rgba(238, 238, 238, .3);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-name, .date {
    padding: 12px;
    display: flex;
  }

  .day-name {
    text-align: center;
    font-weight: bold;
    border-left: 1px solid rgba(238, 238, 238, .9);
    background: #f2f2f2;
  }

  .date {
    min-height: 100px;
    min-width: 100px;
    color: #f4f4f6;
    border-left: 1px solid rgba(238, 238, 238, .3);
    border-bottom: 1px solid rgba(238, 238, 238, .3);
    text-align: center;
  }

  .date.empty {
    background: #222224;
  }

  .date.today {
    background: #1b2c3e;
    color: white;
  }

`


function getDateJson(date: any) {
  return { y: date.getFullYear(), m: date.getMonth(), d: date.getDate(), w: date.getDay() }
}

export const Calendar: React.FC = () => {
  const { db: { allTabData } } = React.useContext(AppContext)
  const navigate = useNavigate()

  const loginUser = React.useMemo(() => getloggedInUserDetails(), [])

  React.useEffect(() => {
    if (!getloggedInUserDetails()) {
      navigate("/login")
    }
  }, [])

  const t = new Date()
  const [currentDate, setCurrentDate] = React.useState(getDateJson(new Date(t.getFullYear(), t.getMonth(), 1)))

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const setCurrent = () => setCurrentDate(getDateJson(new Date(t.getFullYear(), t.getMonth(), 1)))
  const prevMonth = () => setCurrentDate(getDateJson(new Date(currentDate.y, currentDate.m, 0)))
  const nextMonth = () => setCurrentDate(getDateJson(new Date(currentDate.y, currentDate.m+1, 1)))
  const prevYear = () => setCurrentDate(getDateJson(new Date(currentDate.y-1, currentDate.m, 1)))
  const nextYear = () => setCurrentDate(getDateJson(new Date(currentDate.y+1, currentDate.m, 1)))
  
  const renderDates = React.useCallback(() => {
    const prevMonthLastDay = new Date(currentDate.y, currentDate.m, 0)
    const firstDay = new Date(currentDate.y, currentDate.m, 1)
    
    const lastDay = new Date(currentDate.y, currentDate.m+1, 0)
  
    const prevMonthLastDate = prevMonthLastDay.getDate()
    const startDayIndex = currentDate.w
    const totalDays = lastDay.getDate()
    const dates = []

    for (let i = 0; i < startDayIndex; i++) {
      dates.push(<div key={`prev-${i}`} className="date empty" >{prevMonthLastDate - (startDayIndex - i - 1)}</div>)
    }
    console.log(dates, 'dates 00000')
    for (let day = 1; day <= totalDays; day++) {
      const isToday = currentDate.y === t.getFullYear() && currentDate.m === t.getMonth() && day === t.getDate()
      dates.push(<div key={day} className={`date ${isToday ? "today" : ""}`}>{day}</div>)
    }
    console.log(dates, 'dates 11111')
    for (let i = 0; i < (42 - totalDays - startDayIndex); i++) {
      dates.push(<div key={`next-${i}`} className="date empty" >{i + 1}</div>)
    }
    console.log(dates, 'dates 22222')
    console.log(prevMonthLastDay, 'prevMonthLastDay')
    console.log(firstDay, 'firstDay')
    console.log(lastDay, 'lastDay')
    console.log(prevMonthLastDay, startDayIndex, currentDate, totalDays, '0000000000')
    return dates
  }, [currentDate])
  return (
    <AppsContainer flexWrap="nowrap" style={{ height: "100%" }}>
      <AppMenu />
      <PageContainer>
        <Sidebar>
          <SearchContainer>
          </SearchContainer>
        </Sidebar>
        <ContactListContainer>
        <div className="flex">
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={prevMonth}>◀</button>
                <span>{new Date(currentDate.y, currentDate.m, 1).toLocaleString("default", { month: "long" })}</span>
              <button onClick={nextMonth}>▶</button>
              <button onClick={setCurrent}>Today</button>
              <button onClick={prevYear}>◀</button>
                <span>{currentDate.y}</span>
              <button onClick={nextYear}>▶</button>
            </div>

            <div className="calendar-days">
              {days.map((day) => (
                <div key={day} className="day-name">
                  {day}
                </div>
              ))}
            </div>

            <div className="calendar-dates">{renderDates()}</div>
          </div>
        </div>
        </ContactListContainer>
      </PageContainer>
    </AppsContainer>
  )
}
