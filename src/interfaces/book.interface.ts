export const IGenre = {
  FICTION: "FICTION",
  NON_FICTION: "NON_FICTION",
  SCIENCE: "SCIENCE",
  HISTORY: "HISTORY",
  BIOGRAPHY: "BIOGRAPHY",
  FANTASY: "FANTASY",
} as const;

export type IGenre = (typeof IGenre)[keyof typeof IGenre];

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: IGenre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}
