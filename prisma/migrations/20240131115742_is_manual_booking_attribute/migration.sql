-- AlterTable
ALTER TABLE `booking`
    ADD COLUMN `isManual` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');
