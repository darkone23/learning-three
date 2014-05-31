define(["three", "lib/settings"], function(three, settings) {
  return new three.PerspectiveCamera(
    settings.angle,
    settings.aspect,
    settings.near,
    settings.far
  );
});
