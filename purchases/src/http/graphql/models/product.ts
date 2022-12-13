import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
class Product {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  slug: string;
}

export { Product };
