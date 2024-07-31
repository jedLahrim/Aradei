-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `userrole` ADD COLUMN `messageNotificationId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `userrole` ADD CONSTRAINT `userrole_messageNotificationId_fkey` FOREIGN KEY (`messageNotificationId`) REFERENCES `messagenotification`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
