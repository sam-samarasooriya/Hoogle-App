export interface UserData {
  user: string;
  profile_picture?: string;
  bio?: string;
}

export interface User extends UserData{
  id: number
}

export interface InsultData{
  insult: string;
  insultee_id: number;
  insulter_id: number;
  likes: number;
  dislike: number;
}
export interface Insult extends InsultData {
    id: number;

  }