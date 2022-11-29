export interface Treatment {
  _id: string;
  name?: string;
  title: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  width: number;
  height: number;
  images: Image[];
  url: string;
  formats: Formats;
  provider: Provider;
  related: Treatment[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
  slug: string;
  content: string;
  showcasePage: boolean;
}
export interface Image {
  _id: string;
  name?: string;
  title: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: Formats;
  provider: Provider;
  related: Treatment[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export enum EXT {
  JPEG = ".jpeg",
}

export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

export interface Large {
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export enum Name {
  TreatmentSkinbeautyclinic = "treatment-skinbeautyclinic",
}

export enum Provider {
  Local = "local",
}