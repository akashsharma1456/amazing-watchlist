export class Show {
  id: number;
  name: string;
  status: string;
  genres: Array<string>;
  summary: string;
  image: string;
  language: string;


  constructor(showinfo) {
    this.id = showinfo.id;
    this.language = showinfo.language;
    this.name = showinfo.name;
    this.genres = showinfo.genres;
    this.summary = showinfo.summary;
    this.status = showinfo.status;
    this.image = showinfo.image;
  }
}
