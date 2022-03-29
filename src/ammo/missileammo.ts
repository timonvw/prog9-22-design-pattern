import { Missile }      from "../projectiles/missile.js";
import { Projectile }   from "../projectiles/projectile.js";
import { Tank }         from "../tank.js";
import { Vector }       from "../vector.js";
import { Ammunition }   from "./ammunition.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public CreateBullet(tank: Tank): Projectile {
        return new Missile(tank);
    }
}