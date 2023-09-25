/*
  Warnings:

  - You are about to drop the column `alignmentTypeId` on the `character` table. All the data in the column will be lost.
  - You are about to drop the column `livingStatusTypeId` on the `character` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatusTypeId` on the `character` table. All the data in the column will be lost.
  - Added the required column `alignmentId` to the `character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `livingStatusId` to the `character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatusId` to the `character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `character_alignmentTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `character_livingStatusTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `character_maritalStatusTypeId_fkey`;

-- AlterTable
ALTER TABLE `character` DROP COLUMN `alignmentTypeId`,
    DROP COLUMN `livingStatusTypeId`,
    DROP COLUMN `maritalStatusTypeId`,
    ADD COLUMN `alignmentId` INTEGER NOT NULL,
    ADD COLUMN `livingStatusId` INTEGER NOT NULL,
    ADD COLUMN `maritalStatusId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `character_alignmentId_idx` ON `character`(`alignmentId`);

-- CreateIndex
CREATE INDEX `character_maritalStatusId_idx` ON `character`(`maritalStatusId`);

-- CreateIndex
CREATE INDEX `character_livingStatusId_idx` ON `character`(`livingStatusId`);

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_alignmentId_fkey` FOREIGN KEY (`alignmentId`) REFERENCES `alignment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_maritalStatusId_fkey` FOREIGN KEY (`maritalStatusId`) REFERENCES `marital_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `character_livingStatusId_fkey` FOREIGN KEY (`livingStatusId`) REFERENCES `living_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
