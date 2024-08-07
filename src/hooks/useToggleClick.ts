import { useState } from 'react'

const useToggleClick = () => {
  const [isClick, setIsClick] = useState(false)

  const handleClick = () => {
    setIsClick((prevIsClick) => !prevIsClick)
  }

  return { isClick, handleClick }
}

export default useToggleClick
