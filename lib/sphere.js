define(["three"], function(three) {
  var geometry = new three.SphereGeometry(1,5,5),
      material = new three.MeshBasicMaterial({
        color: 0x00ff00
      });

  return new three.Mesh(geometry, material);
});
