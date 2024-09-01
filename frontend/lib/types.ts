export type Product = {
  id: number;
  title: string;
  model: string;
  curPrice: number;
  oldPrice: number;

  // slug: string;
  // featuredImage: string;
  // numOfStock: number;
  // description: string;
  // longDescription: string;
  // tags: string[];
  // images: Image[];
  // options: ProductOption[];
};

export type Image = {
  id: number;
  url: string;
  altText: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Testimonial = {
  id: number;
  rating: number;
  content: string;
  customer: {
    name: string;
    job: string;
  };
};
