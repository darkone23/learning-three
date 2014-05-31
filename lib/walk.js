define([], function() {
  function randomWalk(mesh) {
      var direction = Math.random();
      if (direction > 0.8) {
        mesh.position.x += 1;
      } else if (direction > 0.6) {
        mesh.position.x -= 1;
      } else if (direction > 0.4) {
        mesh.position.y += 1;
      } else if (direction > 0.2) {
        mesh.position.y -= 1;
      } else if (direction > 0.1) {
        mesh.position.z += 5;
      } else {
        mesh.position.z -= 5;
      }
      return mesh;
  };
  return randomWalk;
});
