let scene, camera, renderer;

function init() {
    THREE.Cache.enabled = true;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    const container = document.getElementById('im');
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000);
    camera.position.set(0, 0, height / 1.3);

    const pL1 = new THREE.PointLight(0xffffff, 1, 0);
    pL1.position.set(0, 0, 10000);
    scene.add(pL1);

    const pL2 = new THREE.PointLight(0xffffff, 1, 0);
    pL2.position.set(0, 0, -10000);
    scene.add(pL2);

    const pL3 = new THREE.PointLight(0xffffff, 0.5, 0);
    pL3.position.set(0, 10000, 0);
    scene.add(pL3);

    const pL4 = new THREE.PointLight(0xffffff, 0.5, 0);
    pL4.position.set(0, -10000, 0);
    scene.add(pL4);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    const loader = new THREE.GLTFLoader();
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('/assets/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load('/assets/data/prakriya-souvenir.glb', function(glb){
        tree = glb.scene.children[0];
        tree.position.set(0, -80, 0);
        scene.add(glb.scene);
        animate();
        document.getElementById("text").innerText = "Interactive Model";
    });
}

window.onresize = function () {
    const container = document.getElementById('im');
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    controls.update();
}

init();
