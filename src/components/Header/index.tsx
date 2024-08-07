import Card from '../ui/Card'
import HeaderTitle from './HeaderTitle'
import HeaderDescription from './HeaderDescription'
import HeaderBody from './HeaderBody'

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

Header.Title = HeaderTitle
Header.Description = HeaderDescription
Header.Body = HeaderBody

export default Header
