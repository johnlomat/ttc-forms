import * as React from 'react'
import FieldWrapper from '@/components/ui/FieldWrapper'
import { Label } from '@/components/ui/Label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'

const SexField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="sex">
        Sex<span className="text-red-500"> *</span>
      </Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </FieldWrapper>
  )
}

export default SexField
