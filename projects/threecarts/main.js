import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
// import { GUI } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/libs/lil-gui.module.min.js';
// import { Vector3 } from 'https://cdn.jsdelivr.net/npm/three@0.118/src/math/Vector3.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/FBXLoader.js';
// import { GUI } from './resources/three/lil-gui.module.min.js';

let renderer, cam, scene, plrObj
let velocity = 0
let amountFriction = 0.05
let amountStart = 0.05
let velMeter = 0

let maxVel = 2

let keys = {}

let camPos = { x: 0, y: 30, z: -45 }

function init() {
  //The renderer that renders the scene
  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  //The camera for the scene
  const camParams = { fov: 60, ar: 1920 / 1080, near: 1, far: 1000 };

  cam = new THREE.PerspectiveCamera(camParams.fov, camParams.ar, camParams.near, camParams.far);
  cam.aspect = window.innerWidth / window.innerHeight;
  cam.position.set(75, 20, 0);
  cam.updateProjectionMatrix();

  //On window resize
  window.addEventListener('resize', function () {
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  })

  //The actual scene
  scene = new THREE.Scene();

  const dLight = new THREE.DirectionalLight(0xFFFFFF);
  dLight.position.set(100, 100, 100);
  dLight.target.position.set(0, 0, 0);
  dLight.castShadow = true;
  dLight.shadow.bias = -0.01;
  dLight.shadow.mapSize.width = 2048;
  dLight.shadow.mapSize.height = 2048;
  dLight.shadow.camera.near = 1.0;
  dLight.shadow.camera.far = 500;
  dLight.shadow.camera.left = 200;
  dLight.shadow.camera.right = -200;
  dLight.shadow.camera.top = 200;
  dLight.shadow.camera.bottom = -200;
  scene.add(dLight);

  const aLight = new THREE.AmbientLight(0x404040);
  scene.add(aLight);

  // // const controls = new OrbitControls(cam, renderer.domElement);
  // // controls.target.set(0, 20, 0);
  // // controls.update();

  // function ucs() {
  //   // controls.update();
  // }

  // //load background
  const bgloader = new THREE.CubeTextureLoader();
  const texture = bgloader.load([
    './resources/skybox/px.jpg',
    './resources/skybox/nx.jpg',
    './resources/skybox/py.jpg',
    './resources/skybox/ny.jpg',
    './resources/skybox/pz.jpg',
    './resources/skybox/nz.jpg',
  ]);
  scene.background = texture

  //Create a plane
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 1, 1),
    new THREE.MeshStandardMaterial({
      color: 0xFFFFFF
    })
  );
  plane.castShadow = false;
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  //Create a box
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshStandardMaterial({
      color: 0x808080
    })
  );
  box.position.set(0, 10, 0);
  box.castShadow = true;
  box.recieveShadow = true;
  scene.add(box)

  window.addEventListener("keydown", function (e) {
    keys[e.key] = true
  })
  window.addEventListener("keyup", function (e) {
    keys[e.key] = false
  })

  var lastScrollTop = 0;

  window.addEventListener('wheel', function (event) {
    let delta;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }
    if (delta < 0) {
      camPos.y += 5
      camPos.z -= 5
    } else if (delta > 0) {
      camPos.y -= 5
      camPos.z += 5
    }
  });

  // function createPanel() {
  //   const panel = new GUI({ width: 300 });

  //   const cameraFolder = panel.addFolder('Camera');

  //   const settings = {
  //     'Camera X': camPos.x,
  //     'Camera Y': camPos.y,
  //     'Camera Z': camPos.z,
  //   }

  //   cameraFolder.add(settings, 'Camera X', -50.0, 50.0, 0.1).onChange(function (pos) {camPos.x = pos})
  //   cameraFolder.add(settings, 'Camera Y', -50.0, 50.0, 0.1).onChange(function (pos) {camPos.y = pos})
  //   cameraFolder.add(settings, 'Camera Z', -50.0, 50.0, 0.1).onChange(function (pos) {camPos.z = pos})
  // }

  // createPanel()

  window.setInterval(function () {
    if (keys.w == true) {
      velMeter = amountStart
    } else if (keys.s == true) {
      velMeter = -amountStart
    }

    if (velocity > 0) {
      velocity -= amountFriction / 2
      if (keys.a == true) {
        plrObj.rotation.y += 0.01
        // box.translateY(box.rotation.y)
      } else if (keys.d == true) {
        plrObj.rotation.y -= 0.01
        // box.translateY(box.rotation.y)
      }
    } else if (velocity < 0) {
      velocity += amountFriction / 2
      if (keys.a == true) {
        plrObj.rotation.y -= 0.01
        // box.translateY(box.rotation.y)
      } else if (keys.d == true) {
        plrObj.rotation.y += 0.01
        // box.translateY(box.rotation.y)
      }
    }

    velocity += velMeter

    if (velocity > maxVel) {
      velocity = maxVel
    } else if (velocity < -maxVel) {
      velocity = -maxVel
    }

    // const objectPosition = new Vector3();
    // box.getWorldPosition(objectPosition);
    // box.position.copy(objectPosition).add(new Vector3(0, 0, velocity))
    plrObj.translateZ(velocity)

    velMeter = 0
    updateCamPos()
  }, 10)
  reqAnimFrame();
}

const fbxloader = new FBXLoader();
fbxloader.setPath('./resources/models/jumpsuit/');
fbxloader.load('jumpsuit.fbx', function (fbx) {
  fbx.scale.setScalar(0.1);
  fbx.traverse(c => {
    c.castShadow = true;
  });

  init()

  // const animLoader = new FBXLoader();
  // animLoader.setPath('./recources/models/jumpsuit');
  // animLoader.load('dance.fbx', function(anim) {
  //   const mixer = THREE.AnimationMixer(fbx);
  //   const idle = mixer.clipAnimation(anim.animations[0]);
  //   idle.play()
  // });
  document.getElementById("home").style.display = "none"
  scene.add(fbx)
  plrObj = fbx
}, function (xhr) {
  document.getElementById("fbxProgress").max = xhr.total
  document.getElementById("fbxProgress").value = xhr.loaded
});

function reqAnimFrame() {
  requestAnimationFrame(function () {
    renderer.render(scene, cam);
    reqAnimFrame();
  })
}

function updateCamPos() {
  cam.position.x = plrObj.position.x
  cam.position.y = plrObj.position.y
  cam.position.z = plrObj.position.z

  cam.rotation.x = plrObj.rotation.x
  cam.rotation.y = plrObj.rotation.y
  cam.rotation.z = plrObj.rotation.z
  cam.translateX(camPos.x)
  cam.translateY(camPos.y)
  cam.translateZ(camPos.z)

  let box3 = new THREE.Box3().setFromObject(plrObj);
  let size = new THREE.Vector3();
  box3.getSize(size);

  cam.lookAt(new THREE.Vector3(plrObj.position.x, plrObj.position.y + size.y / 2, plrObj.position.z))
}