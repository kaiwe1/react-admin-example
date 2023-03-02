import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routeItems } from "../../router/index"

const Aside = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    const path = e.keyPath.reverse().join("/")
    navigate("/" + path)
  }

  return (
    <>
        <Menu onClick={handleClick} mode='inline' items={routeItems} />
    </>
  )
}

export default Aside