import FieldWrapper from '../ui/FieldWrapper'
import { Label } from '@radix-ui/react-label'
import CountryComboBox from '../ui/CountryComboBox'

const DestinationCountryField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="sex">
        Destination Country (Where you are serving overseas)<span className="text-red-500"> *</span>
      </Label>
      <CountryComboBox />
    </FieldWrapper>
  )
}

export default DestinationCountryField
