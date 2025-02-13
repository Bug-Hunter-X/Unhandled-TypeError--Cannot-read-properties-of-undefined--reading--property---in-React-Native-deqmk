# Unhandled TypeError: Cannot read properties of undefined (reading 'property') in React Native

This repository demonstrates a common error in React Native applications: the `TypeError: Cannot read properties of undefined (reading 'property')` error.  This error occurs when you attempt to access a property of an object that is currently undefined or null.  The example showcases this error and provides a solution using optional chaining and nullish coalescing.

## Bug Description

The `bug.js` file contains code that attempts to render data from a state variable before the data has been fetched asynchronously. This results in the error because the state variable is initially undefined. 

## Solution

The `bugSolution.js` file demonstrates how to resolve the issue using optional chaining (`?.`) and the nullish coalescing operator (`??`). Optional chaining safely accesses properties of an object only if the object exists, returning undefined if the object or any intermediate property is null or undefined.  The nullish coalescing operator provides a default value if the expression to its left is null or undefined.