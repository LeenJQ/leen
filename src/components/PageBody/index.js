import React from 'react'
import './index.scss'

export default function Header(props) {
  return (<div className="page-body">{props.children}</div>)
}