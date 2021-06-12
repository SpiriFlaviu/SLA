import {FileDTO} from "./fileDTO";

export interface GistDTO {
  id: string;
  description: string;
  files: Record<string, FileDTO>;
  html_url: string;
}
