define([], function() {
  function randomWalk(mesh) {
      var direction = Math.random();
      if (direction > 0.75) {
        mesh.position.x += 1;
      } else if (direction > 0.5) {
        mesh.position.x -= 1;
      } else if (direction > 0.25) {
        mesh.position.y += 1;
      } else {
        mesh.position.y -= 1;
      }
      return mesh;
  };
  return randomWalk;
});
