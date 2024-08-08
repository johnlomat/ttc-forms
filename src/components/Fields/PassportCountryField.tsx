import FieldWrapper from '../ui/FieldWrapper'
import { Label } from '@radix-ui/react-label'
import CountryComboBox from '../ui/CountryComboBox'

const PassportCountryField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="sex">
        Passport Country<span className="text-red-500"> *</span>
      </Label>
      <CountryComboBox />
    </FieldWrapper>
  )
}

export default PassportCountryField
