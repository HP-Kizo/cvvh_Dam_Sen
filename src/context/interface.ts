export interface BackgroundProps {
  image: string;
  alt: string;
}

export interface ImageData {
  id: number;
  src: string;
  alt: string;
}

export interface RecommendedItem {
  id: number;
  title: string;
  date: string;
  imgSrc: string;
  alt: string;
  category: string;
}
export interface SectionInfo {
  title: string;
  image: string;
  alt: string;
  descriptions: string[];
}

export interface MonkeyData {
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
  sections: SectionInfo[];
}
export interface HeaderProps {
  title: string;
  category?: string;
  date?: string;
}
export interface DataBG {
  image: string;
  alt: string;
}

export interface Images {
  src: string;
  alt: string;
  caption: string;
}
export interface PostContents {
  title?: string;
  description: string;
  images: Images[];
  content?: string[];
}

export interface Slide {
  id: number;
  src: string;
  alt: string;
}

export interface CarouselItem {
  title?: string;
  desc?: string[];
  slides: Slide[];
}
