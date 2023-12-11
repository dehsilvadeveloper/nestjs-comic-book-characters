-- DropIndex
DROP INDEX `character_power_powerId_fkey` ON `character_power`;

-- DropIndex
DROP INDEX `character_team_teamId_fkey` ON `character_team`;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_alignmentId_fkey` FOREIGN KEY (`alignmentId`) REFERENCES `alignment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_maritalStatusId_fkey` FOREIGN KEY (`maritalStatusId`) REFERENCES `marital_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_livingStatusId_fkey` FOREIGN KEY (`livingStatusId`) REFERENCES `living_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_ally` ADD CONSTRAINT `character_ally_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_ally` ADD CONSTRAINT `character_ally_allyId_fkey` FOREIGN KEY (`allyId`) REFERENCES `character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_enemy` ADD CONSTRAINT `character_enemy_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_enemy` ADD CONSTRAINT `character_enemy_enemyId_fkey` FOREIGN KEY (`enemyId`) REFERENCES `character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_relative` ADD CONSTRAINT `character_relative_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_relative` ADD CONSTRAINT `character_relative_relativeId_fkey` FOREIGN KEY (`relativeId`) REFERENCES `character`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_power` ADD CONSTRAINT `character_power_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_power` ADD CONSTRAINT `character_power_powerId_fkey` FOREIGN KEY (`powerId`) REFERENCES `power`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_team` ADD CONSTRAINT `character_team_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_team` ADD CONSTRAINT `character_team_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
