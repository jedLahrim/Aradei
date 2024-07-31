-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter` ADD COLUMN `informationContact` VARCHAR(191) NULL DEFAULT '[]',
    ADD COLUMN `mixMerchandising` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `socialMediaStats` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `workHours` VARCHAR(191) NULL DEFAULT '[]';
