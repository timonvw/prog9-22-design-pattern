import { Projectile }   from "../projectiles/projectile.js";
import { Rocket }       from "../projectiles/rocket.js";
import { Tank }         from "../tank.js";
import { Vector }       from "../vector.js";
import { Ammunition }   from "./ammunition.js";

export class RocketAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-rocket", position)
    }

    public CreateBullet(tank: Tank): Projectile {
        return new Rocket(tank);
    }
}