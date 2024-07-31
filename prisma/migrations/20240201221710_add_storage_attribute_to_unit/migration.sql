-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `unit`
    ADD COLUMN `storage` DOUBLE NULL;
