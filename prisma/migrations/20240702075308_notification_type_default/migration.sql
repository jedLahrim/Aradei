-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `notification` MODIFY `type` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter` MODIFY `informationContact` LONGTEXT NULL DEFAULT (''),
    MODIFY `mixMerchandising` LONGTEXT NULL DEFAULT (''),
    MODIFY `socialMediaStats` LONGTEXT NULL DEFAULT (''),
    MODIFY `workHours` LONGTEXT NULL DEFAULT (''),
    MODIFY `specialtyLeasing` LONGTEXT NULL DEFAULT ('');
