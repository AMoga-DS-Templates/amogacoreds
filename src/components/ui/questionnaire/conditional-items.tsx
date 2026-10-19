'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const RUNTIME_CHOICES = [
  { value: 'local', label: 'Local workspace' },
  { value: 'cloud', label: 'Cloud workspace' },
] as const

const ENVIRONMENT_CHOICES = [
  { value: 'preview', label: 'Preview' },
  { value: 'staging', label: 'Staging' },
  { value: 'sandbox', label: 'Isolated sandbox' },
] as const

const APPROVAL_CHOICES = [
  { value: 'files', label: 'Before writing files' },
  { value: 'commands', label: 'Before running commands' },
  { value: 'sensitive', label: 'Only for sensitive actions' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireConditionalItems() {
  const [runtime, setRuntime] = React.useState<'local' | 'cloud'>('local')
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <div className={questionnaireCardClassName}>
      <Questionnaire.Root
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='runtime' required className='space-y-2'>
          <Questionnaire.Title>Where should the agent run?</Questionnaire.Title>
          <Questionnaire.Description>Cloud runs add an environment question to this flow.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {RUNTIME_CHOICES.map((choice) => (
              <Questionnaire.Choice
                key={choice.value}
                value={choice.value}
                checked={runtime === choice.value}
                onChange={() => {
                  setRuntime(choice.value)
                  setSubmitted(false)
                }}
                className={choiceClassName}
              >
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='environment' disabled={runtime !== 'cloud'} required className='space-y-2'>
          <Questionnaire.Title>Which cloud environment should it use?</Questionnaire.Title>
          <Questionnaire.Description>Choose the environment for the cloud run.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {ENVIRONMENT_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='approval' required className='space-y-2'>
          <Questionnaire.Title>When should the agent request approval?</Questionnaire.Title>
          <Questionnaire.Description>Choose when a confirmation is needed before continuing.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {APPROVAL_CHOICES.map((choice) => (
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
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Save execution plan</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {submitted ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Execution plan saved.
        </p>
      ) : null}
    </div>
  )
}
