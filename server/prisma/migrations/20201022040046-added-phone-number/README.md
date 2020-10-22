# Migration `20201022040046-added-phone-number`

This migration has been generated by Daniel Aranas at 10/22/2020, 12:00:46 PM.
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
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "rankId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_User" ("id", "username", "email", "password", "firstName", "lastName", "createdAt", "rankId") SELECT "id", "username", "email", "password", "firstName", "lastName", "createdAt", "rankId" FROM "User";
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
migration 20201022015948-attempt-to-fix-user-rank-relation..20201022040046-added-phone-number
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,8 +13,9 @@
   email       String   @unique
   password    String
   firstName   String
   lastName    String
+  phoneNumber String
   rank        Rank     @relation(fields: [rankId], references: [id])
   rankId      Int
   createdAt   DateTime @default(now())
 }
```

