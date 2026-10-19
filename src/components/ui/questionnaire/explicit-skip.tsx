'use client'

import * as React from 'react'
import {
  Questionnaire,
  type QuestionnaireItemStatus,
} from '@shadcn/react/questionnaire'

const CHANGE_CHOICES = [
  { value: 'new-feature', label: 'New feature' },
  { value: 'bug-fix', label: 'Bug fix' },
  { value: 'refactor', label: 'Refactor' },
] as const

const CONSTRAINT_CHOICES = [
  { value: 'no-dependencies', label: 'Do not add dependencies' },
  { value: 'no-database-change', label: 'Do not change the database' },
  { value: 'preserve-api', label: 'Preserve the public API' },
] as const

const REVIEW_CHOICES = [
  { value: 'test-suite', label: 'Run the test suite' },
  { value: 'review-diff', label: 'Review the final diff' },
  { value: 'tests-and-diff', label: 'Tests and diff review' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireExplicitSkip() {
  const [constraintsStatus, setConstraintsStatus] =
    React.useState<QuestionnaireItemStatus>('unanswered')
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <div className='w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6'>
      <Questionnaire.Root
        items={[
          { name: 'change', required: true, choices: CHANGE_CHOICES },
          { name: 'constraints', required: false, choices: CONSTRAINT_CHOICES },
          { name: 'review', required: true, choices: REVIEW_CHOICES },
        ]}
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='change' required className='space-y-2'>
          <Questionnaire.Title>What kind of change is this?</Questionnaire.Title>
          <Questionnaire.Description>
            Choose the category that best describes the work.
          </Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {CHANGE_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item
          name='constraints'
          onStatusChange={setConstraintsStatus}
          className='space-y-2'
        >
          <Questionnaire.Title>Are there any implementation constraints?</Questionnaire.Title>
          <Questionnaire.Description>
            Answer if needed, or intentionally skip this question.
          </Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {CONSTRAINT_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
            <Questionnaire.Input
              aria-label='Describe another constraint'
              placeholder='Describe another constraint…'
              className='h-10 rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'
            />
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='review' required className='space-y-2'>
          <Questionnaire.Title>How should the work be reviewed?</Questionnaire.Title>
          <Questionnaire.Description>
            Choose the checks the agent should complete before handoff.
          </Questionnaire.Description>
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

        <div className='flex items-center justify-end gap-2'>
          <Questionnaire.Previous />
          <Questionnaire.Skip>Skip</Questionnaire.Skip>
          <Questionnaire.Next>Next</Questionnaire.Next>
          <Questionnaire.Submit>Submit brief</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {submitted ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Brief submitted. Constraints: {constraintsStatus === 'skipped' ? 'skipped' : 'included'}.
        </p>
      ) : null}
    </div>
  )
}

