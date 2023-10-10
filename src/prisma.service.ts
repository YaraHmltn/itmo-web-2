import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import {Prisma, PrismaClient} from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}

const prisma = new PrismaClient().$extends({
    client: {
        async onModuleInit() {
            await Prisma.getExtensionContext(this).$connect();
        },
        async enableShutdownHooks(app: INestApplication) {
            Prisma.getExtensionContext(this).$on('beforeExit', async () => {
                await app.close();
            });
        },
    },
});