-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter` ADD COLUMN `areaMap` VARCHAR(191) NULL,
    ADD COLUMN `demography` VARCHAR(191) NULL,
    MODIFY `informationContact` LONGTEXT NULL DEFAULT (''),
    MODIFY `mixMerchandising` LONGTEXT NULL DEFAULT (''),
    MODIFY `socialMediaStats` LONGTEXT NULL DEFAULT (''),
    MODIFY `workHours` LONGTEXT NULL DEFAULT (''),
    MODIFY `specialtyLeasing` LONGTEXT NULL DEFAULT ('');
