define([], function() {
  var width = window.innerWidth, height = window.innerHeight;

  return {
    width: width,
    height: height,
    aspect: width / height,
    near: 0.1,
    far: 10000
  };
});
