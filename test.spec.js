fdescribe('Generic Test', function() {
  fit('should not fail', function() {
    console.log('good');
  });

  fit('should fail', function() {
    throw new Error('failed');
  });
});