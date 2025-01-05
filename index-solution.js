```javascript
// pages/index-solution.js
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Welcome to my Next.js app!</h1>
      </div>
    </Suspense>
  );
}
```