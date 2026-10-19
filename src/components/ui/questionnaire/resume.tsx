'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const MIGRATION_CHOICES = [
  { value: 'incremental', label: 'Incremental migration' },
  { value: 'cutover', label: 'Single cutover' },
] as const

const VERIFICATION_CHOICES = [
  { value: 'migration-tests', label: 'Run migration tests' },
  { value: 'typecheck', label: 'Run the typecheck' },
  { value: 'manual', label: 'Perform a manual smoke test' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireResume() {
  const [updated, setUpdated] = React.useState(false)

  return (
    <div className={questionnaireCardClassName}>
      <Questionnaire.Root
        defaultItem='verification'
        items={[
          { name: 'migration', required: true, choices: MIGRATION_CHOICES },
          { name: 'verification', required: true, choices: VERIFICATION_CHOICES },
          { name: 'notes' },
        ]}
        onReset={() => setUpdated(false)}
        onSubmit={(event) => {
          event.preventDefault()
          setUpdated(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='migration' required className='space-y-2'>
          <Questionnaire.Title>What kind of migration is this?</Questionnaire.Title>
          <Questionnaire.Description>This answer was saved during the previous session.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {MIGRATION_CHOICES.map((choice, index) => (
              <Questionnaire.Choice
                key={choice.value}
                value={choice.value}
                defaultChecked={index === 0}
                className={choiceClassName}
              >
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='verification' required className='space-y-2'>
          <Questionnaire.Title>How should the migration be verified?</Questionnaire.Title>
          <Questionnaire.Description>These checks were selected during the previous session.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {VERIFICATION_CHOICES.map((choice, index) => (
              <Questionnaire.Choice
                key={choice.value}
                value={choice.value}
                defaultChecked={index === 1}
                className={choiceClassName}
              >
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='notes' className='space-y-2'>
          <Questionnaire.Title>Anything else the agent should remember?</Questionnaire.Title>
          <Questionnaire.Description>This note was saved with the draft.</Questionnaire.Description>
          <Questionnaire.Input
            aria-label='Anything else the agent should remember'
            defaultValue='Run the package tests.'
            className='mt-4 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'
          />
          <Questionnaire.Error />
        </Questionnaire.Item>

        <div className={questionnaireActionsClassName}>
          <button
            type='reset'
            className={questionnaireSecondaryButtonClassName}
          >
            Reset changes
          </button>
          <Questionnaire.Previous className={questionnaireSecondaryButtonClassName} />
          <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Update draft</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {updated ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Draft updated successfully.
        </p>
      ) : null}
    </div>
  )
}
