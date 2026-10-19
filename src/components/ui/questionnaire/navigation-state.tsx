'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const SCOPE_CHOICES = [
  { value: 'files', label: 'Project files' },
  { value: 'tests', label: 'Project files and tests' },
  { value: 'config', label: 'Files, tests, and configuration' },
] as const

const VERIFICATION_CHOICES = [
  { value: 'tests', label: 'Tests' },
  { value: 'types', label: 'Tests and types' },
  { value: 'visual', label: 'Tests, types, and visual QA' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireNavigationState() {
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

        <Questionnaire.Item name='scope' required className='space-y-2'>
          <Questionnaire.Title>What may the agent modify?</Questionnaire.Title>
          <Questionnaire.Description>Next is intentionally disabled until an answer is selected.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {SCOPE_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='verification' required className='space-y-2'>
          <Questionnaire.Title>What must pass before completion?</Questionnaire.Title>
          <Questionnaire.Description>Select the verification depth for this change.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {VERIFICATION_CHOICES.map((choice) => (
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
          <Questionnaire.Next
            render={(props, state) => (
              <button
                {...props}
                className={questionnairePrimaryButtonClassName}
                disabled={state.status === 'unanswered'}
              >
                Next
              </button>
            )}
          />
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Save permissions</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {saved ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Permissions saved.
        </p>
      ) : null}
    </div>
  )
}
