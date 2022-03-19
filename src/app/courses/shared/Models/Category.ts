import { Subcategory } from "./Subcategory";
import { Image } from "./Image";

export class Category {

  constructor(
    id: number,
    name: string,
    description: string,
    Image: Image,
    subcategory: Array<Subcategory>
    ) {}

}