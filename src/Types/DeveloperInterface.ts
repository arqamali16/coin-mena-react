export interface IPopularRepository {
  repositoryName: String;
  description: any;
  url: String;
}

export interface IDeveloper {
  rank: Number;
  username: String;
  name: String;
  url: any;
  avatar: String;
  since: String;
  popularRepository: IPopularRepository;
  title: any;
  href: any;
}
