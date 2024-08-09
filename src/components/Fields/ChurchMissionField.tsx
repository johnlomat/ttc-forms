import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

const ChurchMissionField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="church_mission">
        Church/Mission<span className="text-red-500"> *</span>
      </Label>
      <Input type="text" id="church_mission" placeholder="Mission name..." />
    </FieldWrapper>
  )
}

export default ChurchMissionField
