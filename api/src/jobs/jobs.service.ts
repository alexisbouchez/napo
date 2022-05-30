import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma.service';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(createJobInput: CreateJobInput) {
    return this.prisma.job.create({ data: createJobInput });
  }

  findAll() {
    return this.prisma.job.findMany();
  }

  findOne(id: string) {
    return this.prisma.job.findUnique({ where: { id } });
  }

  update(id: string, updateJobInput: UpdateJobInput) {
    return this.prisma.job.update({ where: { id }, data: updateJobInput });
  }

  remove(id: string) {
    this.prisma.job.delete({ where: { id } });
  }
}
