const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[24px] uppercase text-primary">
      <h1>{children}</h1>
    </div>
  )
}

export default HeaderTitle
