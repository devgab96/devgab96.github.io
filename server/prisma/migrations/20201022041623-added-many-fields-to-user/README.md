# Migration `20201022041623-added-many-fields-to-user`

This migration has been generated by Daniel Aranas at 10/22/2020, 12:16:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "rankId" INTEGER NOT NULL,
    "graduatedFrom" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "company" TEXT,
    "referredBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_User" ("id", "username", "email", "password", "firstName", "lastName", "createdAt", "rankId", "phoneNumber") SELECT "id", "username", "email", "password", "firstName", "lastName", "createdAt", "rankId", "phoneNumber" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201022040046-added-phone-number..20201022041623-added-many-fields-to-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,26 +1,32 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model User {
-  id          Int      @id @default(autoincrement())
-  username    String   @unique
-  email       String   @unique
-  password    String
-  firstName   String
-  lastName    String
-  phoneNumber String
-  rank        Rank     @relation(fields: [rankId], references: [id])
-  rankId      Int
-  createdAt   DateTime @default(now())
+  id             Int      @id @default(autoincrement())
+  username       String   @unique
+  email          String   @unique
+  password       String
+  firstName      String
+  middleName     String
+  lastName       String
+  rank           Rank     @relation(fields: [rankId], references: [id])
+  rankId         Int
+  graduatedFrom  String
+  birthday       DateTime
+  address        String
+  phoneNumber    String
+  company        String?
+  referredBy     String?
+  createdAt      DateTime @default(now())
 }
 model Rank {
-  id          Int      @id @default(autoincrement())
-  name        String   @unique
+  id             Int      @id @default(autoincrement())
+  name           String   @unique
 }
```

