require(

  ["three", "lib/scene", "lib/camera", "lib/sphere", "lib/renderer", "lib/walk"],

  function(three, scene, camera, sphere, renderer, walk) {
    var app = document.getElementById("app");
    app.appendChild(renderer.domElement);

    scene.add(sphere);
    camera.position.z = 100;

    function render() {
      requestAnimationFrame(render);
      walk(sphere);
      renderer.render(scene, camera);
    };
    render();
  }

);
