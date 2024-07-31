-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `userprofile` MODIFY `status` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `userrole` ADD COLUMN `title` VARCHAR(200) NOT NULL DEFAULT '';
