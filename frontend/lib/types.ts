export type Product = {
  id: number;
  title: string;
  model: string;
  price: number;
  oldPrice: number;
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
