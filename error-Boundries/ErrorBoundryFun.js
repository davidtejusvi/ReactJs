import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
//simple error boundary
const App = () => {
    return (
        <ErrorBoundary fallback={<h1>something went wrong</h1>}>
            <div>App</div>
        </ErrorBoundary>
    )
}

export default App

//second method passing new component as error boundary
// const App1 = () => {
//     return (
//         <ErrorBoundary fallback={<ErrorBoundary1 />}>
//             <div>App1</div>
//         </ErrorBoundary>
//     )
// }

// export default App1

const ErrorBoundary1 = () => {
    return (
        <div>
            !Oops something went wrong
        </div>
    )
}