define(["three", "lib/settings"], function(three, settings) {
  var renderer = new three.WebGLRenderer();
  renderer.setSize(settings.width, settings.height);
  return renderer;
});
