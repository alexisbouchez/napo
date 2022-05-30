import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
