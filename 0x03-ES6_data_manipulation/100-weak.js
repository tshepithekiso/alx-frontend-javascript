// Define a WeakMap to track endpoint query counts
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Initialize count if it doesn't exist
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if count is >= 5, throw an error if so
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return count; // Return the current count
}
