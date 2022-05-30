import { Module } from '@nestjs/common';
import { PrismaService } from '~/prisma.service';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [PrismaService, AuthService, AuthResolver],
})
export class AuthModule {}
