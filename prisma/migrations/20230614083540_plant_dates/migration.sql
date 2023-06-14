/*
  Warnings:

  - You are about to drop the column `water` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `waterFreq` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "water",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastWatered" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "waterFreq" INTEGER NOT NULL;
