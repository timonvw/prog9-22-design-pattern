import { GameObject }   from "../gameobject.js";
import { Projectile }   from "../projectiles/projectile.js";
import { Tank }         from "../tank.js";
import { Vector }       from "../vector.js";
import { AmmoSource }   from "./ammoSource.js";

export abstract class Ammunition extends GameObject implements AmmoSource {
    constructor(type: string, position :Vector) {
        super(type)

        this.position = position
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.AmmoSource = this;
        }
    }

    public abstract CreateBullet(tank: Tank): Projectile
}