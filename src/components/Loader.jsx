import React from 'react'
import { Mosaic } from "react-loading-indicators"

const Loader = () => {
  return (
    <div className="flex items-center justify-center ">
      <Mosaic color="#d8d8cc" size="medium" text="loading...." textColor="" />
    </div>
  )
}

export default Loader
