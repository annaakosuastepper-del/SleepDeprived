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
  socialColor: string,
  pictureFrame: string,
  skillsColor: string,
  skills: string;
  boxes: { title: string; content: string }[];
  files: string[];
  socialLinks: {platform: string, url: string}[];
  
}