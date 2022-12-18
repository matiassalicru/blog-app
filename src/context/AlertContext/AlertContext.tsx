/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react'
import { IAlertContext } from './AlertContext.interface'

export const AlertContext = React.createContext<any>({
  setAlertInfo: () => true,
  alertInfo: {
    show: false,
    variant: 'primary',
    time: 2.5,
    icon: null,
  },
})

const AlertContextProvider = ({ children }: any) => {
  const [alertInfo, setAlertInfo] = useState<IAlertContext>({
    show: false,
    variant: 'primary',
    time: 2.5,
    icon: null,
  })

  useEffect(() => {
    if (alertInfo?.show) {
      setTimeout(() => setAlertInfo((prev: IAlertContext) => ({ ...prev, show: false })), (alertInfo.time + 1) * 1000)
    }
  }, [alertInfo])

  return (
    <AlertContext.Provider
      value={{
        alertInfo,
        setAlertInfo,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
