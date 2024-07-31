-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter`
    ADD COLUMN `userProfileId` VARCHAR(30) NULL,
    MODIFY `addressCorrespondance` VARCHAR(120) NULL;

-- AddForeignKey
ALTER TABLE `retailcenter`
    ADD CONSTRAINT `retailcenter_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `userprofile` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
