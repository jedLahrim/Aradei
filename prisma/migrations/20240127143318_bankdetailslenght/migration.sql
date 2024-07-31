-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- AlterTable
ALTER TABLE `retailcenter`
    MODIFY `bankName` VARCHAR(50) NULL,
    MODIFY `bankIBAN` VARCHAR(50) NULL,
    MODIFY `bankSWIFT` VARCHAR(50) NULL;
