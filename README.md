# Next.js 15 Unexpected Rendering Behavior

This repository demonstrates a bug encountered in a Next.js 15 application. The issue involves unexpected rendering behavior with a simple component.  The root cause appears to be related to the interaction between React 18's concurrent rendering and Next.js's rendering lifecycle.

## Bug Description

When running the application, the component renders incorrectly. The expected output is a simple heading 'Welcome to my Next.js app!', but instead the rendering is distorted or missing entirely. This issue is reproducible across different browsers and operating systems.

## Steps to Reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Observe the unexpected rendering behavior in the browser.

## Solution

The solution, included in `index-solution.js`, involves ensuring that the component's rendering is properly handled within the React 18 context provided by Next.js 15.  This might involve adjustments to state management, data fetching techniques or explicit use of React's reconciliation features.  Refer to index-solution.js for a demonstration of the successful implementation.