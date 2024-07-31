-- AlterTable
ALTER TABLE `Invoice` MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AddCustomerCodeToCompany
ALTER TABLE `company` ADD COLUMN `customerCode` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `quote` MODIFY `notes` TEXT NOT NULL DEFAULT ('');
