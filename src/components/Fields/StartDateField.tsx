'use client'

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Calendar } from '@/components/ui/Calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import FieldWrapper from '@/components/ui/FieldWrapper'
import { Label } from '@/components/ui/Label'

const StartDateField = ({ className }: { className?: string }) => {
  const [date, setDate] = React.useState<Date>()

  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="sex">
        Start Date<span className="text-red-500"> *</span>
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start bg-sky-50 text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'P') : <span>mm/dd/yyyy</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </FieldWrapper>
  )
}

export default StartDateField
