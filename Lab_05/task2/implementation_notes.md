
## Static imports
Used for core modules required at startup: app, core, utils, constants.

## Dynamic imports
- Import on Interaction: advanced_feature.mjs loaded on button click via `import()`.
- Import on Visibility: lazy_component.mjs loaded when target becomes visible via IntersectionObserver.

## Error handling
Both dynamic imports are wrapped in try/catch with fallback UI messages.
