import React from 'react'
import './header.scss'
export default (props)=>(
    <header className="app-header border-bottom">
        <h1 className="title">{props.title}</h1>
    </header>
)
    
