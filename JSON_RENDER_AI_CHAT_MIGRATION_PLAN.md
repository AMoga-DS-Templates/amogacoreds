# JSON Render Alongside Existing AI Chat Renderer: Simple Plan

## Goal

Add the new JSON renderer to the AI Chat UI without removing or changing the existing renderer.

## Steps

1. Confirm the new catalog contains every component that the AI is allowed to generate.

2. Confirm every catalog component has a matching implementation in the registry.

3. Update the AI system prompt so it lists the same component names and supported properties as the catalog.

4. Make the AI return the standard JSON render format with a root element and an elements map.

5. Keep the old AI Chat JSON renderer unchanged.

6. Add the new renderer as a separate rendering option or preview panel.

7. Keep the existing chat message display, input, loading state, and error handling unchanged.

8. Connect the new renderer actions to separate or shared AI Chat action handlers.

9. Test simple UI output first, such as a card with a heading, text, input, and button.

10. Test forms, tables, tabs, alerts, and charts one at a time.

11. Test invalid JSON and unsupported component names to confirm safe fallback behavior.

12. Run type checking and verify both renderers in the browser.

## Important Rule

The existing renderer must remain working while the new catalog, registry, and renderer are added beside it.

The new system prompt, catalog, registry, and renderer must use the same component names and prop formats.
