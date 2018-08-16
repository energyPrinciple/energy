export class Upload {
  $key: string;
  file: File;
  url: string;
  page: string;
  link: string;
  title: string;
  youtubelink: string;
  description: string;
  created: string;

  constructor(file: File) {
    this.file = file;
  }

}
