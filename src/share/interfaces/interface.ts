import { Unknown } from "./Unknown";

export interface City extends Unknown {
  cityName: string;
  rainyAround?: number;
  status?: string;
  provinces?: Provinces[];
}
export interface Provinces extends Unknown {
  provinceName: string;
  rainyAround?: number;
  status: string;
  area?: string;
}
