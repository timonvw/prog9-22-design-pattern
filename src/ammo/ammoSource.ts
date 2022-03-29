import { Projectile }   from "../projectiles/projectile";
import { Tank }         from "../tank";

export interface AmmoSource {
    CreateBullet(tank: Tank): Projectile
}