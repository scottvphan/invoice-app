import { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider, css } from 'styled-components'
import SVG from 'react-inlinesvg'
import { getNumberOfDaysInMonth, monthNames, range } from '../utils/DaySorter';
import moment from 'moment';

const DatePickerContainer = styled.div`
    background: ${(theme) => theme.theme.datePickerBg};
    border: ${(theme) => theme.theme.datePickerBorder};
    &:hover{
        border: ${(theme) => theme.theme.datePickerBorderHover};
    }
    &:focus{
        outline: ${(theme) => theme.theme.datePickerBorderHover};
    }
    border-radius: 8px;
    width:100%;
    position:relative;
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
`
const DatePickerHeaderContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    cursor:pointer;
    border-radius: 8px;
    padding:5px 20px;
    &:hover{
        border: ${(theme) => theme.theme.datePickerBorderHover};
    }
    &:focus{
        outline: ${(theme) => theme.theme.datePickerBorderHover};
    }
`
const DatePickerCalendar = styled.div`
    position:absolute;
    border-radius:8px;
    padding:20px;
    background: ${(theme) => theme.theme.datePickerBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index:5;
    margin-top:10px;
    width:89%;
`
const MonthContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    p{
        flex: 1 0 0;
    }
    SVG{
        transition:0.2s;
        cursor:pointer;
        &:hover, :focus{
            transform: scale(2);
            transition: 0.2s;
            outline: none;
        }
    }
`
const CalendarContainer = styled.div`
    margin: 5px;
`
const DayContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    p{
        cursor:pointer;
        justify-self:center;
        transition:0.2s;
        &:hover, :focus{
            outline: none;
            color:#7C5DFA;
            transform: scale(1.5);
        }
    }
    .active{
        color:#7C5DFA;
        transform: scale(1.5);
        transition:0.2s;
    }
`
export default function DatePicker(props:any){
    const [isCalendarActive, setIsCalendarActive] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [selectedDate, setSelectedDate] = useState<any>(null)
    const currentDate = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
    let calendarRef = useRef<HTMLInputElement>(null)

    function toggleCalendar(){
        setIsCalendarActive(!isCalendarActive)
    }
    
    function nextMonth(){
        if(currentMonth < 11){
            setCurrentMonth((prev) => prev + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear((prev) => prev + 1)
        } 
    }
    
    function prevMonth(){
        if(currentMonth > 0){
            setCurrentMonth((prev) => prev - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear((prev) => prev - 1)
        }
    }

    function handleChange(e:any){
        if(e.target.id === "day"){
            setSelectedDate(
                new Date(
                    currentYear, 
                    currentMonth,
                    e.target.getAttribute("data-day")
                    )
                )
            props.onChange(
                moment(new Date(currentYear, currentMonth, e.target.getAttribute("data-day"))).format('YYYY-MM-DD')
            )
        }
    }

    useEffect(() =>{
        let handler = (e:any)=>{
            if(!calendarRef.current?.contains(e.target)){
                setIsCalendarActive(false)
            }
        }
        document.addEventListener('mousedown', handler)
    })

    useEffect(() =>{
            props.setIsSubmit(false)
            setSelectedDate(null)
    }, [props.isSubmit])

    const DarkTheme = {
        datePickerHeaderBg:"#1E2139",
        datePickerBg:"#1E2139",
        datePickerBorder:"1px solid #252945",
        datePickerBorderHover:"1px solid #7C5DFA",
        listBorder:"1px solid #1E2139",
        datePickerHeaderBorder:"1px solid #1E2139",
    }
    const LightTheme = {
        datePickerHeaderBg:"FFF",
        datePickerBg: "#FFF",
        datePickerBorder:"1px solid #DFE3FA",
        datePickerBorderHover:"1px solid #7C5DFA",
        listBorder:"1px solid #DFE3FA",
        datePickerHeaderBorder:"1px solid #DFE3FA",
    }

    return(
        <ThemeProvider theme={props.isDarkMode ? DarkTheme : LightTheme}>
            <DatePickerContainer className={props.error ? "error" : ""} ref={calendarRef}>
                <DatePickerHeaderContainer tabIndex={0} onClick={toggleCalendar}>
                    {!props.isFormEdit ?
                    selectedDate === null ? 
                        <p>Select a date</p>
                        :
                        <p>{moment(selectedDate).format('MMM DD YYYY')}</p>
                    
                    :
                    selectedDate === null ?
                        <p>{props.invoiceData.createdAt != undefined ? moment(props.invoiceData.createdAt).format('MMM DD YYYY') : "Select a date"}</p>
                        :
                        <p>{moment(selectedDate).format('MMM DD YYYY')}</p>
                    }
                    
                    
                    <SVG src='\assets\icon-calendar.svg' />
                </DatePickerHeaderContainer>
            {isCalendarActive &&
                <DatePickerCalendar className={props.error ? "error" : ""}>
                    <MonthContainer>
                        <SVG 
                            src = "\assets\icon-arrow-left.svg"
                            onClick={prevMonth}
                            tabIndex={0}
                        />
                            <MonthContainer>{monthNames[currentMonth] + ' ' + currentYear}</MonthContainer>
                        <SVG 
                            src = "\assets\icon-arrow-right.svg"
                            onClick={nextMonth}
                            tabIndex={0}
                        />
                    </MonthContainer>
                    <CalendarContainer>
                        <DayContainer>
                            {range(
                                1, 
                                getNumberOfDaysInMonth(currentYear, currentMonth)
                                + 1
                            ).map((day) => (
                                <p 
                                    key={day}
                                    onClick={handleChange}
                                    id="day" 
                                    data-day={day}
                                    tabIndex={0}
                                    className = {
                                        selectedDate?.getTime() ===
                                        new Date(
                                            currentYear,
                                            currentMonth,
                                            day
                                        ).getTime()
                                            ? "active"
                                            : ""
                                    }
                                >{day}</p>
                            ))}
                        </DayContainer>
                    </CalendarContainer>
                </DatePickerCalendar>
            }
            </DatePickerContainer>
        </ThemeProvider>
    )
}