define(["three"], function(three) {
  function build(color, radius, segments) {
    var color = color || 0x00ff00,
        radius = radius || 5,
        segments = 5;

    var geometry = new three.SphereGeometry(radius, segments, segments),
        material = new three.MeshBasicMaterial({
          color: color
        });

    return new three.Mesh(geometry, material);
  }

  function mirror(source, target) {
    for (prop in source.position) {
      target.position[prop] = source.position[prop];
    }
    target.material.transparent = true;
    target.material.opacity = 0.1;
  }

  return {
    build: build,
    mirror: mirror
  };
});
