import FieldWrapper from '@/components/ui/FieldWrapper'
import { Label } from '@radix-ui/react-label'
import CountryComboBox from '@/components/ui/CountryComboBox'
import { FieldProps } from '@/types/FieldProps'

const CountryField = ({ title, className, description, required }: FieldProps) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="sex">
        {title}
        {description && <span className="text-neutral-400"> {description}</span>}
        {required && <span className="text-red-500"> *</span>}
      </Label>
      <CountryComboBox />
    </FieldWrapper>
  )
}

export default CountryField
