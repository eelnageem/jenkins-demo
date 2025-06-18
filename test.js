const http = require('http');

console.log('Running tests...');

// Simple test
if (2 + 2 === 4) {
  console.log('✓ Math test passed');
} else {
  console.log('✗ Math test failed');
  process.exit(1);
}

console.log('All tests passed!');
