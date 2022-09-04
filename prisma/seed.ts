import PrismaClientPkg from '@prisma/client'

// Prisma doesn't support ES Modules so we have to do this
const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

function getUsers(){
    return [
        {
            text: "This is the first Post",
            done: false
        }
    ]
}

async function seed() {
    const users = getUsers()
  
    for (const user of users) {
      await prisma.component.create({ data: user })
    }
}

seed()