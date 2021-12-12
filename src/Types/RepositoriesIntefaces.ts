export interface IBuiltBy {
  username: String;
  url: String;
  avatar: String;
}

export interface IRepository {
  rank: Number;
  username: String;
  repositoryName: String;
  url: any;
  description: String;
  language: String;
  languageColor: String;
  totalStars: Number;
  forks: Number;
  starsSince: Number;
  since: String;
  builtBy: IBuiltBy[];
  title: any;
}
