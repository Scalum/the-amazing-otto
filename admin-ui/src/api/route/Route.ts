import { Manifest } from "../manifest/Manifest";

export type Route = {
  createdAt: Date;
  fromLocation: string | null;
  id: string;
  manifests?: Array<Manifest>;
  name: string | null;
  toLocation: string | null;
  updatedAt: Date;
};
