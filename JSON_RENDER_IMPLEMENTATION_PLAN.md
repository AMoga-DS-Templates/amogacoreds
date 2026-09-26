# JSON Render Implementation Plan

## Clear implementation steps

### Step 1: Install json-render

Add the official packages:

- `@json-render/core`
- `@json-render/react`

These provide the catalog, validation, and React renderer.

### Step 2: Create the catalog

Create a catalog containing the shadcn components you want AI to use:

- Card
- Button
- Table
- Tabs
- Dialog
- Input
- Select
- Badge
- Alert
- charts
- forms

For each component, define its allowed properties.

Example meaning:

- Card accepts a title.
- Button accepts a label and action.
- Table accepts columns and rows.
- Chart accepts data and series.

### Step 3: Create the registry

Connect each catalog name to the real React component.

For example:

- `Card` connects to the shadcn Card.
- `Button` connects to the shadcn Button.
- `Table` connects to the shadcn Table.
- `Tabs` connects to the shadcn Tabs.
- `BarChart` connects to the chart component.

This is where JSON names become actual UI.

### Step 4: Create the renderer

Create one renderer that receives the AI JSON and uses the registry.

The renderer will:

- read the component type;
- find the matching shadcn component;
- validate the properties;
- render children;
- show an error for unsupported components.

### Step 5: Update the AI instructions

Tell the AI:

- only use catalog components;
- never return React code;
- use valid component properties;
- use the correct chart and table data format;
- use registered action names only.

### Step 6: Connect the chat response

When the assistant responds:

1. Check whether the response contains JSON UI.
2. Parse the JSON.
3. Validate it using the catalog.
4. Send it to the renderer.
5. Display the shadcn UI.

If it is normal text, display it as normal text.

### Step 7: Add buttons and actions

Register actions such as:

- continue conversation;
- open link;
- submit form;
- change tab;
- preview file;
- export data.

The JSON only requests the action. The application performs it safely.

### Step 8: Save the JSON

Save the validated JSON with the assistant message.

When the chat is opened later:

- load the saved JSON;
- validate it;
- render the same shadcn components again.

### Step 9: Add streaming later

First make complete JSON responses work.

After that, add streaming so components appear while the AI is still generating the response. The official project provides SpecStream utilities for this.

Reference: [json-render streaming](https://github.com/vercel-labs/json-render)

### Step 10: Test each component

Test individually:

- Card;
- Table;
- Bar chart;
- Line chart;
- Area chart;
- Tabs;
- Forms;
- Dialog;
- Button actions;
- saved responses.

## Final flow

User asks -> AI returns JSON -> catalog validates -> registry selects shadcn components -> renderer displays them -> JSON is saved.
