require(

  ["three", "lib/scene", "lib/camera", "lib/sphere", "lib/renderer", "lib/walk"],

  function(three, scene, camera, sphere, renderer, walk) {
    var app = document.getElementById("app"),
        circle = sphere.build(0x00539F);
    app.appendChild(renderer.domElement);

    scene.add(circle);
    camera.position.z = 100;

    function render() {
      requestAnimationFrame(render);
      var history = sphere.build(0x00539F);
      scene.add(history);
      walk(circle);
      sphere.mirror(circle, history);
      renderer.render(scene, camera);
    };
    render();
  }

);
