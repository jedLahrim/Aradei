-- DropForeignKey
ALTER TABLE `retailcenter`
    DROP FOREIGN KEY `retailcenter_userProfileId_fkey`;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- CreateTable
CREATE TABLE `_RetailCenterToUserProfile`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_RetailCenterToUserProfile_AB_unique` (`A`, `B`),
    INDEX `_RetailCenterToUserProfile_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RetailCenterToUserProfile`
    ADD CONSTRAINT `_RetailCenterToUserProfile_A_fkey` FOREIGN KEY (`A`) REFERENCES `retailcenter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RetailCenterToUserProfile`
    ADD CONSTRAINT `_RetailCenterToUserProfile_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
