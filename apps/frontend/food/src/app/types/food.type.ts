export type Food = {
  name: string;
  ingredients: Foodingredient[];
  kbzu: Kbzu;
  steps: FoodStep[];
  imageUrl: string;
}

export type Foodingredient = {
  name: string;
  weight: number;
}

export type Kbzu = {
  ccal: number;
  protein: number;
  fat: number;
  carbohydrates: number;
}

export type FoodStep = {
  name: string;
  description: string;
}
