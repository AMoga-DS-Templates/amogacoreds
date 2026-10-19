'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const TASK_CHOICES = [
  { value: 'implement', label: 'Implement the requested change' },
  { value: 'debug', label: 'Debug the current behavior' },
  { value: 'review', label: 'Review the implementation' },
] as const

const REVIEW_CHOICES = [
  { value: 'targeted', label: 'Targeted checks' },
  { value: 'complete', label: 'Complete test suite' },
  { value: 'qa', label: 'Tests and manual QA' },
] as const

const DELIVERY_CHOICES = [
  { value: 'summary', label: 'Concise summary' },
  { value: 'files', label: 'Summary and changed files' },
  { value: 'handoff', label: 'Detailed review handoff' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

const itemClassName =
  'min-h-64 space-y-2 data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-300 motion-reduce:animate-none'

export function QuestionnaireAnimatedItems() {
  const [saved, setSaved] = React.useState(false)

  return (
    <div className={questionnaireCardClassName}>
      <Questionnaire.Root
        onSubmit={(event) => {
          event.preventDefault()
          setSaved(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='task' required className={itemClassName}>
          <Questionnaire.Title>What should the agent do?</Questionnaire.Title>
          <Questionnaire.Description>Choose the task for this run.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {TASK_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='review' required className={itemClassName}>
          <Questionnaire.Title>How should the work be reviewed?</Questionnaire.Title>
          <Questionnaire.Description>Select the verification depth.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {REVIEW_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='delivery' required className={itemClassName}>
          <Questionnaire.Title>How should the result be delivered?</Questionnaire.Title>
          <Questionnaire.Description>Choose the final handoff format.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {DELIVERY_CHOICES.map((choice) => (
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
          <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Save workflow</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {saved ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Workflow saved.
        </p>
      ) : null}
    </div>
  )
}
