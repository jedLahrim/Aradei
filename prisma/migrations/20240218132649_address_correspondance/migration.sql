-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter`
    ADD COLUMN `addressCorrespondance` VARCHAR(70) NULL;
