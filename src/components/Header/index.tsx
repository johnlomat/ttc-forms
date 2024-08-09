import Card from '@/components/ui/Card'
import HeaderTitle from '@/components/Header/HeaderTitle'
import HeaderDescription from '@/components/Header/HeaderDescription'
import HeaderBody from '@/components/Header/HeaderBody'

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="container">
        <Card>
          <div>{children}</div>
        </Card>
      </div>
    </div>
  )
}

export { Header, HeaderTitle, HeaderDescription, HeaderBody }
