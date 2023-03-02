import React, { LazyExoticComponent, Suspense } from 'react'
import { Spin } from 'antd';

const CenterSpin = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Spin />
  </div>
)

const LazyLoad = (LazyComponent: LazyExoticComponent<any>) => {
  return (
    <Suspense fallback={<CenterSpin />}>
      <LazyComponent />
    </Suspense>
  )
}

export default LazyLoad