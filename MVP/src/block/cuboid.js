// 长方体
import BaseBlock from './base';

export default class Cuboid extends BaseBlock {
  constructor(x, y, z) {
    super('cuboid')
    const size = this.width
    const geometry = new THREE.BoxGeometry(size, this.height, size)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff
    })
    this.instance = new THREE.Mesh(geometry, material)
    this.instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z
    this.instance.position.x = this.x
    this.instance.position.y = this.y
    this.instance.position.z = this.z
  }
}