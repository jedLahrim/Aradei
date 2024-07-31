/*
  Warnings:

  - A unique constraint covering the columns `[quoteId]` on the table `validation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `userprofile` ADD COLUMN `status` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `validation` ADD COLUMN `quoteId` VARCHAR(30) NULL;

-- CreateTable
CREATE TABLE `Invoice` (
    `id` VARCHAR(30) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `isAccepted` BOOLEAN NOT NULL DEFAULT false,
    `isValidated` BOOLEAN NOT NULL DEFAULT false,
    `notes` TEXT NOT NULL DEFAULT (''),
    `total` DOUBLE NOT NULL,
    `creatorId` VARCHAR(191) NOT NULL,
    `docId` VARCHAR(30) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sentAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvoiceEdit` (
    `id` VARCHAR(30) NOT NULL,
    `invoiceId` VARCHAR(30) NOT NULL,
    `bookingId` VARCHAR(30) NOT NULL,
    `unitId` VARCHAR(30) NOT NULL,
    `unitSurface` DOUBLE NOT NULL,
    `unitPrice` DOUBLE NOT NULL,
    `dateFrom` DATE NULL,
    `dateTo` DATE NULL,
    `creatorId` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `validation_quoteId_key` ON `validation`(`quoteId`);

-- AddForeignKey
ALTER TABLE `validation` ADD CONSTRAINT `validation_quoteId_fkey` FOREIGN KEY (`quoteId`) REFERENCES `quote`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_docId_fkey` FOREIGN KEY (`docId`) REFERENCES `document`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceEdit` ADD CONSTRAINT `InvoiceEdit_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `Invoice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceEdit` ADD CONSTRAINT `InvoiceEdit_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvoiceEdit` ADD CONSTRAINT `InvoiceEdit_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
