export const StepBoxActive = ({ step, text }: { step: number; text: string }) => {
  return (
    <div className="relative">
      <div className="flex w-full min-w-[140px] flex-col items-center space-y-1 text-center">
        <div className="bg-primary relative flex h-[55px] w-[55px] items-center justify-center rounded-full">
          <div className="text-[22px] leading-[15px] text-white">
            <h5>
              {step} <span className="inline-block w-full text-[9px]">step</span>
            </h5>
            <span className="absolute bottom-[3px] left-[3px] right-[3px] top-[3px] rounded-full border-[1px] border-white"></span>
          </div>
        </div>
        <div className="text-primary text-[15px] font-semibold">{text}</div>
      </div>
    </div>
  )
}
