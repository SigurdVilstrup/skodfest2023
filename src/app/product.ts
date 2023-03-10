export interface Product {
  name: string;
  price: number;
  description?: string;
  product_id: string;
  type: 'beer' | 'ticket';
  priority: number;
}
