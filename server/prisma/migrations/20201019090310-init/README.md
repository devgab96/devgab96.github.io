# Migration `20201019090310-init`

This migration has been generated by Daniel Aranas at 10/19/2020, 5:03:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rankId" INTEGER NOT NULL,

    FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "Rank" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
)

CREATE UNIQUE INDEX "User.username_unique" ON "User"("username")

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201019090310-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id          Int      @id @default(autoincrement())
+  username    String   @unique
+  email       String   @unique
+  password    String
+  firstName   String
+  lastName    String
+  rank        Rank
+  createdAt   DateTime @default(now())
+}
+
+model Rank {
+  id          Int      @id @default(autoincrement())
+  name        String
+}
```


