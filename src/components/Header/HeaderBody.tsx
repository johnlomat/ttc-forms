'use client'

import Separator from '../ui/Separator'
import useToggleClick from '@/hooks/useToggleClick'

const HeaderBody = ({ children }: { children: React.ReactNode }) => {
  const { isClick, handleClick } = useToggleClick()

  return (
    <>
      <div
        className="inline-block cursor-pointer select-none text-secondary underline"
        onClick={handleClick}
      >
        {isClick ? 'See less...' : 'Click here to see more...'}
      </div>
      {isClick && (
        <div className="mt-4">
          <div className="mb-4">
            <Separator />
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-[30px] md:grid-cols-2">{children}</div>
        </div>
      )}
    </>
  )
}

export default HeaderBody
