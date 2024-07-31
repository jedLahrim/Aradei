-- AlterTable
ALTER TABLE `booking`
    ADD COLUMN `parentBookingId` VARCHAR(191) NULL,
    ADD COLUMN `renewalSent`     BOOLEAN      NOT NULL DEFAULT false,
    ADD COLUMN `renewed`         BOOLEAN      NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');
