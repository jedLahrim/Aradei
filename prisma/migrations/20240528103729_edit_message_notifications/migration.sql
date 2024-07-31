-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `messagenotification` ADD COLUMN `toProspect` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `toSender` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');
