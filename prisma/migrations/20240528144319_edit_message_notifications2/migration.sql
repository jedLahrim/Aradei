/*
  Warnings:

  - You are about to drop the column `messageNotificationId` on the `userrole` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `userrole` DROP FOREIGN KEY `userrole_messageNotificationId_fkey`;

-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `userrole` DROP COLUMN `messageNotificationId`;

-- CreateTable
CREATE TABLE `_MessageNotificationToUserRole` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MessageNotificationToUserRole_AB_unique`(`A`, `B`),
    INDEX `_MessageNotificationToUserRole_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MessageNotificationToUserRole` ADD CONSTRAINT `_MessageNotificationToUserRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `messagenotification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MessageNotificationToUserRole` ADD CONSTRAINT `_MessageNotificationToUserRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `userrole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
