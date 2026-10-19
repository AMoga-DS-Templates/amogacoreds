'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const DIRECTION_CHOICES = [
  { value: 'delegation', label: 'Tool call timeline' },
  { value: 'questions', label: 'Approval checkpoints' },
  { value: 'handoffs', label: 'Sub-agent handoffs' },
] as const

const PROGRESS_CHOICES = [
  { value: 'progress', label: 'Progress' },
  { value: 'decisions', label: 'Decisions' },
  { value: 'risks', label: 'Risks' },
  { value: 'next-step', label: 'Next step' },
] as const

const TIMING_CHOICES = [
  { value: 'now', label: 'Start now' },
  { value: 'next-cycle', label: 'Next development cycle' },
  { value: 'backlog', label: 'Add it to the backlog' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireBasic() {
  const [saved, setSaved] = React.useState(false)

  return (
    <div className={questionnaireCardClassName}>
      <Questionnaire.Root
        items={[
          { name: 'direction', required: true, choices: DIRECTION_CHOICES },
          { name: 'progress', choices: PROGRESS_CHOICES },
          { name: 'timing', required: true, choices: TIMING_CHOICES },
        ]}
        onSubmit={(event) => {
          event.preventDefault()
          setSaved(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='direction' required className='space-y-2'>
          <Questionnaire.Title>What should the agent build next?</Questionnaire.Title>
          <Questionnaire.Description>Choose a direction or describe another task.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {DIRECTION_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
            <Questionnaire.Input
              aria-label='Describe another feature'
              placeholder='Describe another feature…'
              className='h-10 rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'
            />
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='progress' multiple className='space-y-2'>
          <Questionnaire.Title>What should every progress update include?</Questionnaire.Title>
          <Questionnaire.Description>Select all that apply, or skip this question.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {PROGRESS_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='timing' required className='space-y-2'>
          <Questionnaire.Title>When should work begin?</Questionnaire.Title>
          <Questionnaire.Description>Choose when the agent should begin the work.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {TIMING_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <div className={questionnaireActionsClassName}>
          <Questionnaire.Previous className={questionnaireSecondaryButtonClassName} />
          <Questionnaire.Skip className={questionnaireSecondaryButtonClassName}>Skip</Questionnaire.Skip>
          <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Save plan</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {saved ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Plan saved successfully.
        </p>
      ) : null}
    </div>
  )
}
