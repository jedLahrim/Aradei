-- AlterTable
ALTER TABLE `commercialdoc`
    ADD COLUMN `type` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');
