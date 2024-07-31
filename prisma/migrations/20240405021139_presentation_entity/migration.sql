-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- CreateTable
CREATE TABLE `Presentation`
(
    `id`            VARCHAR(30) NOT NULL,
    `brandId`       VARCHAR(30) NOT NULL,
    `companyId`     VARCHAR(30) NOT NULL,
    `contactId`     VARCHAR(30) NOT NULL,
    `createdAt`     DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userProfileId` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CommercialDocToPresentation`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_CommercialDocToPresentation_AB_unique` (`A`, `B`),
    INDEX `_CommercialDocToPresentation_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Presentation`
    ADD CONSTRAINT `Presentation_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presentation`
    ADD CONSTRAINT `Presentation_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presentation`
    ADD CONSTRAINT `Presentation_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presentation`
    ADD CONSTRAINT `Presentation_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CommercialDocToPresentation`
    ADD CONSTRAINT `_CommercialDocToPresentation_A_fkey` FOREIGN KEY (`A`) REFERENCES `commercialdoc` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CommercialDocToPresentation`
    ADD CONSTRAINT `_CommercialDocToPresentation_B_fkey` FOREIGN KEY (`B`) REFERENCES `Presentation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
