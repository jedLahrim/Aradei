/*
  Warnings:

  - You are about to drop the `_NotificationToUserProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NotificationToUserRole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userProfileId` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_NotificationToUserProfile` DROP FOREIGN KEY `_NotificationToUserProfile_A_fkey`;

-- DropForeignKey
ALTER TABLE `_NotificationToUserProfile` DROP FOREIGN KEY `_NotificationToUserProfile_B_fkey`;

-- DropForeignKey
ALTER TABLE `_NotificationToUserRole` DROP FOREIGN KEY `_NotificationToUserRole_A_fkey`;

-- DropForeignKey
ALTER TABLE `_NotificationToUserRole` DROP FOREIGN KEY `_NotificationToUserRole_B_fkey`;

-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `notification` ADD COLUMN `userProfileId` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- DropTable
DROP TABLE `_NotificationToUserProfile`;

-- DropTable
DROP TABLE `_NotificationToUserRole`;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `userprofile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
