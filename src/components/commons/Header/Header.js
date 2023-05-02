import React from 'react';
import './Header.scss'
import image from '../../../assets/logo/logo.png'

export function Header() {
    return (
        <div className="ui clearing segment" id='content-header'>
            <h2 className="ui right floated header">Float Right</h2>
            <img src={image} className="ui small image" alt='' />
            <div>
                <div className="ui pointing secondary menu" id='center-menu'>
                    <a className="active item" href='/'>Home</a>
                    <a className="item" href='/'>Messages</a>
                    <a className="item" href='/'>Friends</a>
                </div>
            </div>
        </div>
    )
}




