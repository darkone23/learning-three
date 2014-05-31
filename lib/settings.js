define([], function() {
  var width = 500, height = 500;

  return {
    width: width,
    height: height,
    aspect: width / height,
    near: 0.1,
    far: 10000
  };
});
