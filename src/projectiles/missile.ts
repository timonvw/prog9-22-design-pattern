import { Tank }         from "../tank.js";
import { Projectile }   from "./projectile.js";


export class Missile extends Projectile {
    constructor(tank : Tank) {
        // Math.random() * (max - min) + min;
        const randomSpeed = Math.random() * (10 - 0.5) + 0.5
        super("missile", tank, 1500, randomSpeed)
    }

    update() {
        super.update()
        this.rotation += 5000
    }
}