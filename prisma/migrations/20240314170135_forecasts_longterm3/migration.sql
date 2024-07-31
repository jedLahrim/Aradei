-- AlterTable
ALTER TABLE `LongtermForecasts`
    ADD COLUMN `retailCenterStatus` VARCHAR(30) NULL;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');
