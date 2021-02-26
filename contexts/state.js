import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function AppWrapper ({ children }) {
  const [isOpen, setOpen] = useState(false)
  const sharedModalState = { setOpen, isOpen }

  return (
    <ModalContext.Provider value={sharedModalState}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext () {
  return useContext(ModalContext)
}
