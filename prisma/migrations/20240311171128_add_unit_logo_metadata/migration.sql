/*
  Warnings:

  - You are about to drop the column `userProfileId` on the `retailcenter` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `retailcenter_userProfileId_fkey` ON `retailcenter`;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter`
    DROP COLUMN `userProfileId`;

-- CreateTable
CREATE TABLE `unitlogometadata`
(
    `id`       VARCHAR(30)  NOT NULL,
    `unitId`   VARCHAR(30)  NOT NULL,
    `floorId`  VARCHAR(30)  NOT NULL,
    `x`        DOUBLE       NOT NULL,
    `y`        DOUBLE       NOT NULL,
    `rotation` DOUBLE       NOT NULL,
    `width`    DOUBLE       NOT NULL,
    `height`   DOUBLE       NOT NULL,
    `logo`     VARCHAR(191) NULL,

    UNIQUE INDEX `unitlogometadata_unitId_key` (`unitId`),
    INDEX `UnitLogoMetadata_floorId_fkey` (`floorId`),
    INDEX `UnitLogoMetadata_unitId_fkey` (`unitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `unitlogometadata`
    ADD CONSTRAINT `unitlogometadata_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unitlogometadata`
    ADD CONSTRAINT `unitlogometadata_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `floor` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
