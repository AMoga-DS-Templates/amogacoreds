'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const SCOPE_CHOICES = [
  { value: 'component', label: 'Fix the component behavior' },
  { value: 'workflow', label: 'Review the complete workflow' },
  { value: 'docs', label: 'Update the usage documentation' },
] as const

const HANDOFF_CHOICES = [
  { value: 'summary', label: 'Summary only' },
  { value: 'files', label: 'Summary and changed files' },
  { value: 'full', label: 'Full review handoff' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireDialog() {
  const [open, setOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const scopeTitleId = React.useId()
  const handoffTitleId = React.useId()

  return (
    <div className='w-full max-w-xl'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open clarification</Button>
        </DialogTrigger>

        <DialogContent className='sm:max-w-lg'>
          <Questionnaire.Root
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
              setOpen(false)
            }}
            className='gap-5'
          >
            <Questionnaire.Item aria-labelledby={scopeTitleId} name='scope' required className='space-y-4'>
              <DialogHeader className='text-left'>
                <Questionnaire.Progress />
                <Questionnaire.Title id={scopeTitleId} render={<DialogTitle />}>
                  Which files are in scope?
                </Questionnaire.Title>
                <Questionnaire.Description render={<DialogDescription />}>
                  Choose the area that should be included in the clarification.
                </Questionnaire.Description>
              </DialogHeader>

              <Questionnaire.Choices className='grid gap-2'>
                {SCOPE_CHOICES.map((choice) => (
                  <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                    <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                    <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
                  </Questionnaire.Choice>
                ))}
              </Questionnaire.Choices>
              <Questionnaire.Error />

              <DialogFooter className='border-t pt-4'>
                <DialogClose asChild>
                  <Button type='button' variant='outline'>
                    Cancel
                  </Button>
                </DialogClose>
                <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
              </DialogFooter>
            </Questionnaire.Item>

            <Questionnaire.Item aria-labelledby={handoffTitleId} name='handoff' required className='space-y-4'>
              <DialogHeader className='text-left'>
                <Questionnaire.Progress />
                <Questionnaire.Title id={handoffTitleId} render={<DialogTitle />}>
                  What should the clarification include?
                </Questionnaire.Title>
                <Questionnaire.Description render={<DialogDescription />}>
                  Pick the level of detail needed for the response.
                </Questionnaire.Description>
              </DialogHeader>

              <Questionnaire.Choices className='grid gap-2'>
                {HANDOFF_CHOICES.map((choice) => (
                  <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                    <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                    <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
                  </Questionnaire.Choice>
                ))}
              </Questionnaire.Choices>
              <Questionnaire.Error />

              <DialogFooter className='border-t pt-4'>
                <DialogClose asChild>
                  <Button type='button' variant='outline'>
                    Cancel
                  </Button>
                </DialogClose>
                <Questionnaire.Previous className={questionnaireSecondaryButtonClassName} />
                <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Submit</Questionnaire.Submit>
              </DialogFooter>
            </Questionnaire.Item>
          </Questionnaire.Root>
        </DialogContent>
      </Dialog>

      {submitted ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Clarification submitted.
        </p>
      ) : null}
    </div>
  )
}
