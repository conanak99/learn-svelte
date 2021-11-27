import type { Idol } from "./models/idol";
import type { Movie } from "./models/movie";

const URL = "http://localhost:3000/api";

type Result<T> = {
  count: number;
  total: number;
  result: T[];
};

export const getIdols = async (search: string): Promise<Result<Idol>> => {
  const url = `${URL}/actress?name=${search}`;

  const result = await fetch(url).then((x) => x.json());
  return result;
};

export const getIdolById = async (idolId: string): Promise<Idol> => {
  const url = `${URL}/actress/${idolId}`;

  const result = await fetch(url).then((x) => x.json());
  return result;
};

export const getMovies = async (idolId: string): Promise<Result<Movie>> => {
  const url = `${URL}/videos?${idolId}`;

  const result = await fetch(url).then((x) => x.json());
  return result;
};
