import { Bullet }       from "../projectiles/bullet.js";
import { Projectile }   from "../projectiles/projectile.js";
import { Tank }         from "../tank.js";
import { Vector }       from "../vector.js";
import { Ammunition }   from "./ammunition.js";

export class BulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public CreateBullet(tank: Tank): Projectile {
        return new Bullet(tank);
    }
}