import React from 'react'
import "./Homepage.css"
import Sidenav from './nevigation/Sidenav'
import Timeline from './timeline/Timeline'

export default function Homepage() {
    return (
        <div className='homepage'>
            <div className="homepage__nav">
                <Sidenav />
            </div>
            <div className="homepage__timeline">
                <Timeline />
            </div>
        </div>
    )
}
