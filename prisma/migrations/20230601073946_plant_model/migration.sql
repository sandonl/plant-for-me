/*
  Warnings:

  - You are about to drop the column `plant_name` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `plantName` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "plant_name",
ADD COLUMN     "plantName" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;
