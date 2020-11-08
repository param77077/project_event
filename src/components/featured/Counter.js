import React, { useState, useEffect } from 'react'
import { Slide } from 'react-reveal'

const Counter = () => {

    const [state, setState] = useState({
        concertDate: "Nov, 18, 2020",
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0"
    })

    const getTimeUntill = (concertDate) => {
        const time = Date.parse(concertDate) - Date.parse(new Date());

        time < 0
            ? setState({
                ...state,
                days: "0",
                hours: "0",
                minutes: "0",
                seconds: "0"
            })

            : setState({
                ...state,
                seconds: Math.floor((time / 1000) % 60),
                minutes: Math.floor((time / 1000 / 60) % 60),
                hours: Math.floor((time / (1000 * 60 * 60)) % 24),
                days: Math.floor(time / (1000 * 60 * 60 * 24))

            })

    }

    useEffect(() => { setInterval(() => getTimeUntill(state.concertDate), 1000) })

    const timeLeft = [
        {
            Tag: "Days",
            TimeLeft: state.days
        },
        {
            Tag: "Hours",
            TimeLeft: state.hours
        },
        {
            Tag: "Minutes",
            TimeLeft: state.minutes
        },
        {
            Tag: "Seconds",
            TimeLeft: state.seconds
        }
    ]
    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Starts in
            </div>

                <div className="countdown_bottom">
                    {timeLeft.map
                        (item =>
                            (<div className="countdown_item">
                                <div className="countdown_time">
                                    {item.TimeLeft}
                                </div>
                                <div className="countdown_tag">
                                    {item.Tag}
                                </div>
                            </div>
                            )
                        )
                    }
                </div>

            </div>
        </Slide>
    )

}

export default Counter