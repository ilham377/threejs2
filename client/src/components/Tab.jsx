/* eslint-disable react/prop-types */
import React from 'react'
import { useSnapshot } from 'valtio'


import state from '../store'

const Tab = ({ tab, isFillterTab, isActiveTab, handleClik
}) => {
  const snap = useSnapshot(state);

  const activeStyles = isFillterTab && isActiveTab 
  ? { backgroundColor: snap.color, opacity: 0.5}
  : { backgroundColor: "transparent", opacity: 1}

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFillterTab ? 
        'rounded-full glassmorhism' : 'rounded-4'}`}
        onClick={handleClik}
        style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFillterTab ? 'w-2/3 h-2/3' :
        'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
  )
}

export default Tab