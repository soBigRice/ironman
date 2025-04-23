import * as THREE from "three";

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
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      //   alpha: true,
    });
  }
}
