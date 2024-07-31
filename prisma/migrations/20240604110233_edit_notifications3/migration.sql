/*
  Warnings:

  - You are about to drop the `_NotificationToUserProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NotificationToUserRole` table. If the table is not empty, all the data it contains will be lost.

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
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- DropTable
DROP TABLE `_NotificationToUserProfile`;

-- DropTable
DROP TABLE `_NotificationToUserRole`;

-- CreateTable
CREATE TABLE `_users` (
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_users_AB_unique`(`A`, `B`),
    INDEX `_users_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_readers` (
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_readers_AB_unique`(`A`, `B`),
    INDEX `_readers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_users` ADD CONSTRAINT `_users_A_fkey` FOREIGN KEY (`A`) REFERENCES `notification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_users` ADD CONSTRAINT `_users_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_readers` ADD CONSTRAINT `_readers_A_fkey` FOREIGN KEY (`A`) REFERENCES `notification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_readers` ADD CONSTRAINT `_readers_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
