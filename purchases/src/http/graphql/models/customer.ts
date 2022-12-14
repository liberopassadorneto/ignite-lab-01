import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchase } from './purchase';

// As entidades Customer (Purchases) e Student (Classroom) são a mesma coisa para o frontend => User
@ObjectType('User')
// Chave em comum entre o Customer (Purchases) e Student (Classroom)
@Directive('@key(fields: "authUserId")')
export class Customer {
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
