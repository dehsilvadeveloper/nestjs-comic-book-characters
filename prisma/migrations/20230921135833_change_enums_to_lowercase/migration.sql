/*
  Warnings:

  - The values [MALE,FEMALE] on the enum `character_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [CURRENT,FORMER] on the enum `character_team_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [LEADER,MEMBER] on the enum `character_team_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `character` MODIFY `gender` ENUM('male', 'female') NOT NULL;

-- AlterTable
ALTER TABLE `character_team` MODIFY `status` ENUM('current', 'former') NOT NULL,
    MODIFY `role` ENUM('leader', 'member') NOT NULL;
