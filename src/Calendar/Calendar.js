import React, { useState } from 'react';
import moment from 'moment';
import { Slide } from 'react-awesome-reveal';
import './Calendar.scss';

export const Calendar = () => {
  // slide states
  const [slideDirection, setDirection] = useState('');
  const [animationKey, setAnimationKey] = useState(0);

  // moment states
  const [currentMonth, setCurrentMonth] = useState(moment());
  const today = moment();
  const todayDate = today.format('dddd, D MMMM YYYY');
  const time = today.format('HH:mm:ss');
  const weekday = today.format('dddd');

  // change months function
  const changeMonth = (direction) => {
    setDirection(direction > 0 ? 'right' : 'left');
    setCurrentMonth(currentMonth.clone().add(direction, 'month'));
    setAnimationKey((prevKey) => prevKey + 1);
  };

  // render days function
  const renderDays = () => {
    const startOfMonth = currentMonth.clone().startOf('month').startOf('week');
    const endOfMonth = currentMonth.clone().endOf('month').endOf('week');
    const days = [];

    for(let date = startOfMonth; date.isBefore(endOfMonth); date.add(1, 'day')){
        if(date.month() === currentMonth.month()){
            days.push(
                <div key={date.format('DD-MM-YYYY')} className={`day ${date.isSame(today, 'day') ? 'today' : ''}`}>
                    {date.date()}
                </div>
            )
        }
    }

    return days;
  }
  
  return (
    <div className='calendarContainer'>
        <div className="calendarBox">
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)} className='changeBtn'>
                    <i className="bi bi-arrow-left-short"></i>
                </button>

                <div className="dateBox">
                    <Slide key={animationKey} direction={slideDirection}>
                        <span className='date'>{currentMonth.format('MMMM YYYY')}</span>
                        {currentMonth.isSame(today, 'month') && currentMonth.isSame(today, 'year') && <p>{weekday}</p>}
                    </Slide>
                </div>

                <button onClick={() => changeMonth(1)} className='changeBtn'>
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>

            <Slide key={animationKey} direction={slideDirection}>
                <div className="calendar">{renderDays()}</div>
            </Slide>

            <div className="todayDateTime">
                <h3>{todayDate} | {time}</h3>
            </div>
        </div>
    </div>
  );
};
