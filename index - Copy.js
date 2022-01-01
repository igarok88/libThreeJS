// import * as THREE from "./three.js-master/build/three.module.js";
// import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

// function init() {
// 	const container3d = document.querySelector(".container");
// 	const canvas = document.querySelector(".webgl");
// 	const scene = new THREE.Scene();
// 	scene.background = new THREE.Color(0xc3c3c3);

// 	const loader = new GLTFLoader();
// 	loader.load(
// 		"assets/SS.gltf",
// 		function (gltf) {
// 			console.log(gltf);
// 			const root = gltf.scene;
// 			//растояние до 3д модели
// 			root.scale.set(0.01, 0.01, 0.01);
// 			scene.add(root);
// 		},
// 		function (xhr) {
// 			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
// 		},
// 		function (error) {
// 			console.log("An error occurred");
// 		}
// 	);
// 	//Light
// 	const light = new THREE.DirectionalLight(0xffffff, 1);
// 	light.position.set(2, 2, 5);
// 	scene.add(light);

// 	//boiler Plate Code
// 	const sizes = {
// 		width: window.innerWidth,
// 		height: window.innerHeight,
// 		// width: container3d.clientWidth,
// 		// height: container3d.clientHeight,
// 	};

// 	function onWindowResize() {
// 		camera.aspect = sizes.width / sizes.height;
// 		camera.updateProjectionMatrix();
// 		renderer.setSize(sizes.width, sizes.height);
// 	}
// 	window.addEventListener("resize", onWindowResize);

// 	const camera = new THREE.PerspectiveCamera(
// 		75,
// 		sizes.width / sizes.height,
// 		0.1,
// 		3000
// 	);
// 	camera.position.set(0, 1, 2);
// 	scene.add(camera);

// 	const renderer = new THREE.WebGL1Renderer({ canvas: canvas });

// 	renderer.setSize(sizes.width, sizes.height);
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	renderer.shadowMap.enabled = true;
// 	renderer.gammaOuput = true;

// 	//OrbitControls
// 	const controls = new OrbitControls(camera, renderer.domElement);
// 	controls.update();
// 	controls.enableDamping = true;
// 	controls.minDistance = 40;

// 	function animate() {
// 		requestAnimationFrame(animate);
// 		controls.update();
// 		renderer.render(scene, camera);
// 	}
// 	animate();
// }
// init();
