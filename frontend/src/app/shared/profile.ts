export interface Profile {
  bio: string;
  role: string;
  profilePicture: string;
  boxes: { title: string; content: string }[];
  files: string[];
}