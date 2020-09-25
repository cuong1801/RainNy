import { Unknown } from "./Unknown";

export interface City extends Unknown {
  name?: string;
  RainyAround?: number;
  status: string;
  town?: Town[];
}
export interface Town extends Unknown {
  name: string;
  RainyAround: number;
  status: string;
}
