export interface IPictures {
  id: string;
  src: string;
  name: string;
}

export interface IUnpslashRes {
  results: {
    id: string;
    description: string;
    alt_description: string;
    urls: { raw: string; full: string; small: string };
  }[];
}
