import React from 'react'

const initialAppState = { db: { sheetDetails: null, sheetTabDetails: null, allTabData: null } }

interface IAppContextState {
  db: any
}

interface IAppContextValue extends IAppContextState {
  setDb: (db: any) => void
}

export const AppContext = React.createContext<any>(initialAppState)

export const AppContextProvider = ({ children }: any) => {
  const [appState, setAppState] = React.useState<IAppContextState>(initialAppState)

  const providerValue: IAppContextValue = React.useMemo(() => ({
    ...appState,
    setAppState,
    setDb: (db: any) => setAppState((currAppState: any) => ({ ...currAppState, db }))
  }), [appState])

  return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
}
