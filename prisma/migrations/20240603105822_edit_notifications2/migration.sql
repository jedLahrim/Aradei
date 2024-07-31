/*
  Warnings:

  - You are about to drop the column `userProfileId` on the `notification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `notification_userProfileId_fkey`;

-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `notification` DROP COLUMN `userProfileId`;

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- CreateTable
CREATE TABLE `_NotificationToUserRole` (
    `A` VARCHAR(30) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_NotificationToUserRole_AB_unique`(`A`, `B`),
    INDEX `_NotificationToUserRole_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_NotificationToUserProfile` (
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_NotificationToUserProfile_AB_unique`(`A`, `B`),
    INDEX `_NotificationToUserProfile_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_NotificationToUserRole` ADD CONSTRAINT `_NotificationToUserRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `notification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserRole` ADD CONSTRAINT `_NotificationToUserRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `userrole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserProfile` ADD CONSTRAINT `_NotificationToUserProfile_A_fkey` FOREIGN KEY (`A`) REFERENCES `notification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserProfile` ADD CONSTRAINT `_NotificationToUserProfile_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
