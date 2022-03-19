import { Image } from "./Image";

export class Subcategory {
  description: any;
  constructor(
    id: number,
    categoryId: number,
    imageId: number,
    name: string,
    description: string,
    image: Image
  ) {}
}