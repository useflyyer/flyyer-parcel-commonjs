# @flyyer/parcel-commonjs

TypeScript wrapper around Parcel 2 to prevent TypeScript compiler from transforming `await import()` to CommonJS imports in host project.

This is a workaround to support `.mjs` imports in TS projects targeting CommonJS.
