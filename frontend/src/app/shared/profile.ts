export interface Profile {
  bio: string;
  role: string;
  profilePicture: string;
  headerImage: string;
  bioColor: string;
  boxColor: string,
  cvHeader: string,
  fileBoxColor: string,
  fileColor: string,
  roleColor: string,
  pictureFrame: string,
  boxes: { title: string; content: string }[];
  files: string[];
  
}