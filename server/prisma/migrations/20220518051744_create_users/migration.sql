-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "initial_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ticketsId" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_ticketsId_key" ON "category"("ticketsId");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_ticketsId_fkey" FOREIGN KEY ("ticketsId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
