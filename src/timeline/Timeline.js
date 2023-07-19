import React from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import Posts from './post/Posts'

export default function Timeline() {
  return (
    <div className='timeline'>
    <div className="timeline__left">
        <Posts />
        <Posts />
        <Posts />
    </div>
    <div className="timeline__right">
        <Suggestion />
    </div>

    </div>
  )
}
