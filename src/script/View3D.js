import * as THREE from "three";
import { EventManager } from "./EventManager";
import { OrbitControls } from "three/examples/jsm/Addons.js";

//

export class View3D {
  static _instance = null;
  static get instance() {
    if (!this._instance) {
      console.error("引擎没有初始化，或者初始化顺序不对");
    }
    return this._instance;
  }

  constructor({ container }) {
    this.container = container ?? document.getElementById("container");

    // 1. 创建场景
    this.scene = new THREE.Scene();
    // 2. 创建相机
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );

    // 3. 创建渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      //   alpha: true,
    });
    this.container.appendChild(this.renderer.domElement);
    // this.renderer.setClearColor(0x000000, 0);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    const resize = () => {
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
    };

    EventManager.instance.addEventListener("resize", () => {
      resize();
      console.log("resize");
    });
    resize();

    this.renderer.setAnimationLoop(() => {
      EventManager.instance.dispatchEvent({ type: "animate" });
      //   this.renderer.render(this.scene, this.camera);
    });

    EventManager.instance.addEventListener("animate", () => {
      this.renderer.render(this.scene, this.camera);
    });
    this.init();
  }

  init() {
    const helper = new THREE.AxesHelper(5);
    this.scene.add(helper);
    this.camera.position.set(0, 0, 5);
  }
}
