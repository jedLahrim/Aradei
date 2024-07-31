-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `floor` ADD COLUMN `order` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT (''),
    MODIFY `exportedAt` DATETIME(3) NULL;
