/*
 * @Author: superRice
 * @Date: 2025-04-23 16:37:47
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-23 16:39:29
 * @FilePath: /IronManVisualizer/src/script/IronMan.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
//创建一个钢铁侠管理类
export class IronMan {
  static _instance = null;

  get instance() {
    if (!this._instance) {
      this._instance = new IronMan();
    }
    return this._instance;
  }

  constructor() {
    IronMan._instance = this;
  }
}
