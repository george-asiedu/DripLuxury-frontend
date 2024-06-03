export interface Products {
    id: string,
    type: string,
    name: string,
    productImage: string,
    imageOverlay: string,
    price: number,
    shortDescription: string,
    longDescription: string,
    category: string,
    tags: string,
    rating: number,
    size: string[],
    highlights: string[],
    washingInstructions: string;
    composition: string[]
}