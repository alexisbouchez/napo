import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJobInput {
  @Field(() => String)
  title: string;
}
