import React from 'react'
import { MdWidthFull } from 'react-icons/md'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import TimeLineElements from './TimelineElements'
import './timeline.css'
const Timeline = () => {
  return (
    <div>
        <VerticalTimeline
            lineColor='rgb(245, 178, 23)'
        >
            {
                TimeLineElements.map(element => {
                    return(
                        <VerticalTimelineElement
                            key={element.key}
                            contentStyle={{ background:'#101010'}}
                            contentArrowStyle={{ borderRight:'7px solid rgb(245, 178, 23)' }}
                            iconStyle={{background:'white'}}
                            icon={element.icon}
                        >
                            <h2 className='timelineh2 gradient2'>{element.title}</h2>
                            <img src={element.img} alt={element.alt} className="timelineimg" />
                            <p className="quicksand timelinep">{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </div>
  )
}

export default Timeline