import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Purchase } from './purchase';

@ObjectType()
class Customer {
  @Field(() => ID)
  id: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}

export { Customer };
