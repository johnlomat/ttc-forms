import Image from 'next/image'
import { StepBoxActive } from '@/components/ui/StepBox'

const MultiStep = ({ href }: { href: string }) => {
  return (
    <>
      <div className="w-full">
        <div className="container relative mb-6 flex justify-center space-x-14">
          <StepBoxActive step={1} text="Your Details" />
          <div className="absolute top-[25px] m-[0!important]">
            <Image src="/images/dots-line-active.png" alt="dot line" width={123} height={9} />
          </div>
          <StepBoxActive step={2} text="Optional Cover" />
        </div>
      </div>
      <div className="w-full">
        <div className="container mb-12">
          <div className="text-center">
            <p>
              Having difficulties? You can switch to our{' '}
              <a href={href} target="_blank" className="text-secondary underline">
                manual form
              </a>{' '}
              and receive a formal quote within 3 working days.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MultiStep
