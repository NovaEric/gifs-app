// Generated by https://quicktype.io

export interface ISearchResponse {
  data:       IGif[];
  pagination: Pagination;
  meta:       Meta;
}

export interface IGif {
  type:                       Type;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   string;
  source:                     string;
  title:                      string;
  rating:                     Rating;
  content_url:                string;
  source_tld:                 string;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            string;
  trending_datetime:          string;
  images:                     Images;
  analytics_response_payload: string;
  analytics:                  Analytics;
  user?:                      User;
}

export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original:                 { [key: string]: string };
  downsized:                Downsized;
  downsized_large:          Downsized;
  downsized_medium:         Downsized;
  downsized_small:          DownsizedSmall;
}

export enum Rating {
  G = "g",
  PG = "pg",
  PG13 = "pg-13",
}

export enum Type {
  GIF = "gif",
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      string;
  display_name:  string;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}

export interface Downsized {
  height: string;
  width:  string;
  size:   string;
  url:    string;
}

export interface DownsizedSmall {
  height:   string;
  width:    string;
  mp4_size: string;
  mp4:      string;
}
