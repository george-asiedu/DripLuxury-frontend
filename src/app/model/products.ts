export interface Products {
    id: string,
    type: string,
    name: string,
    productImage: string,
    imageOverlay: string,
    detailsImage: string,
    price: number,
    shortDescription: string,
    longDescription: string,
    category: string,
    tags: string,
    rating: number,
    sizes: string[],
    highlights: string[],
    washingInstructions: string;
    composition: string[]
}