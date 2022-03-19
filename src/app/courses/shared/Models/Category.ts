import { Subcategory } from "./Subcategory";
import { Image } from "./Image";

export class Category {
  subCategories: any;

  constructor(
    id: number,
    name: string,
    description: string,
    image: Image,
    subCategories: Array<Subcategory>
    ) {}
}