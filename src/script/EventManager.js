/*
 * @Author: superRice
 * @Date: 2025-04-24 00:24:45
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-24 00:28:25
 * @FilePath: /IronManVisualizer/src/script/EventManager.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { EventDispatcher } from "three";
export class EventManager extends EventDispatcher {
  static _instance = null;
  static get instance() {
    if (!EventManager._instance) {
      EventManager._instance = new EventManager();
    }
    return EventManager._instance;
  }

  constructor() {
    super();
    this.init();
    EventManager._instance = this;
  }

  //初始化一些场景事件
  init() {
    //监听窗口大小变化
    window.addEventListener("resize", () => {
      this.dispatchEvent({ type: "resize" });
    });
  }
}
