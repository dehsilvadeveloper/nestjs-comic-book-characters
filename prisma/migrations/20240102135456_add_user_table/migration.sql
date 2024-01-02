-- DropIndex
DROP INDEX `character_power_powerId_fkey` ON `character_power`;

-- DropIndex
DROP INDEX `character_team_teamId_fkey` ON `character_team`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(70) NULL,
    `email` VARCHAR(70) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_alignmentId_fkey` FOREIGN KEY (`alignmentId`) REFERENCES `alignment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_maritalStatusId_fkey` FOREIGN KEY (`maritalStatusId`) REFERENCES `marital_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_livingStatusId_fkey` FOREIGN KEY (`livingStatusId`) REFERENCES `living_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_ally` ADD CONSTRAINT `character_ally_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_ally` ADD CONSTRAINT `character_ally_allyId_fkey` FOREIGN KEY (`allyId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_enemy` ADD CONSTRAINT `character_enemy_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_enemy` ADD CONSTRAINT `character_enemy_enemyId_fkey` FOREIGN KEY (`enemyId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_relative` ADD CONSTRAINT `character_relative_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_relative` ADD CONSTRAINT `character_relative_relativeId_fkey` FOREIGN KEY (`relativeId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_relative` ADD CONSTRAINT `character_relative_relationshipTypeId_fkey` FOREIGN KEY (`relationshipTypeId`) REFERENCES `relationship_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_power` ADD CONSTRAINT `character_power_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_power` ADD CONSTRAINT `character_power_powerId_fkey` FOREIGN KEY (`powerId`) REFERENCES `power`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_team` ADD CONSTRAINT `character_team_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_team` ADD CONSTRAINT `character_team_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
