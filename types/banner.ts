export interface BannerInfo {
  hide: boolean;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: Image;
  imgSmall: Image;
  asterisk: string;
  title1: string;
  title2: string;
  title3: string;
  title4?: string;
  publication: Date;
  id: string;
  title2extra?: string;
  isDefaultBanner: boolean;
  expirationDate: Date;
}

export interface Image {
  _id: string;
  name: string;
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
  provider: string;
  related: string[];
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
