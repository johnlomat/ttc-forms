export const HeadingTwo = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="pb-[15px] text-[20px] font-bold uppercase text-primary">
        <h2>{children}</h2>
      </div>
    </>
  )
}
