import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClick = (event) => {
    if (ref?.current?.contains(event.target)) return
    callback()
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
