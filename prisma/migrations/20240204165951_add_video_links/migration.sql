-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `unit`
    ADD COLUMN `bgBanner`        VARCHAR(191) NULL,
    ADD COLUMN `videoUrl`        VARCHAR(191) NULL,
    ADD COLUMN `virtualVisitUrl` VARCHAR(191) NULL;
