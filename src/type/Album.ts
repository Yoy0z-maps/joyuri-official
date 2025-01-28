export interface Album {
  title: string;
  description: string;
  src: string;
  album: string;
  date: string;
  list: Song[];
  mvLink: string;
  rcLink: string;
}

interface Song {
  id: number;
  title: string;
  attribute: string;
}
