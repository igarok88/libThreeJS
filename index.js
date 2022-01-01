import * as THREE from "./three.js-master/build/three.module.js";
import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";
let scene;
let camera;
let renderer;

function init() {
	const container3d = document.querySelector(".container");

	//Scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xc3c3c3);

	//Camera
	camera = new THREE.PerspectiveCamera(
		75,
		container3d.clientWidth / container3d.clientHeight,
		0.1,
		3000
	);
	camera.position.z = 500;
	camera.position.y = 300;
	camera.position.x = -310;

	//render
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(container3d.clientWidth, container3d.clientHeight);
	container3d.appendChild(renderer.domElement);

	//OrbitControls
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.update();
	controls.enableDamping = true;
	controls.minDistance = 40;

	//light
	const ambient = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambient);

	let light = new THREE.PointLight(0xc4c4c4, 1);
	light.position.set(0, 300, 500);
	scene.add(light);

	let light2 = new THREE.PointLight(0xc4c4c4, 1);
	light2.position.set(500, 300, 500);
	scene.add(light2);

	let light3 = new THREE.PointLight(0xc4c4c4, 1);
	light3.position.set(0, 300, -500);
	scene.add(light3);

	let light4 = new THREE.PointLight(0xc4c4c4, 1);
	light4.position.set(-500, 300, 500);
	scene.add(light4);

	//model
	const loader = new GLTFLoader();
	loader.load(
		"model/scene.gltf",
		(gltf) => {
			const root = gltf.scene;
			//растояние до 3д модели
			root.scale.set(50, 50, 50);
			scene.add(root);
		},
		function (xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
		},
		function (error) {
			console.log("An error occurred");
		}
	);

	//Resize
	window.addEventListener("resize", onWindowResize, false);

	function onWindowResize() {
		camera.aspect = container3d.clientWidth / container3d.clientHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(container3d.clientWidth, container3d.clientHeight);
	}

	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}
	animate();
}
init();
