export type ImagesType = {
  image_intro: string;
  float_intro: string;
  image_intro_alt: string;
  image_intro_caption: string;
  image_fulltext: string;
  float_fulltext: string;
  image_fulltext_alt: string;
  image_fulltext_caption: string;
};

export type NewsTypeJson = {
  imagens: string;
};

export type NewsType = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: ImagesType;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export type TheNewsType = NewsType[];
