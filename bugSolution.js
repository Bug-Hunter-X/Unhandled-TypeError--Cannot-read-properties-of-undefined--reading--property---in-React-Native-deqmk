The solution involves using optional chaining and nullish coalescing to safely access the property.
```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData({ name: 'Example', value: 123 });
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text>  {/* Optional chaining and nullish coalescing */}
      <Text>{data?.value ?? 0}</Text>           {/* Optional chaining and nullish coalescing */}
    </View>
  );
};

export default MyComponent;
```