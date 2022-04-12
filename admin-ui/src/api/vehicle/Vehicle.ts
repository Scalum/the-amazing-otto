import { Manifest } from "../manifest/Manifest";

export type Vehicle = {
  chasisNumber: string;
  createdAt: Date;
  id: string;
  manifests?: Array<Manifest>;
  registrationNumber: string;
  updatedAt: Date;
};
