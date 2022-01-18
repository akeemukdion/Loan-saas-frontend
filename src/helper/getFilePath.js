import { get_url_extension } from "./formats";


export const returnFile = (link) => {
    const extension = get_url_extension(link);
    return extension;
  };