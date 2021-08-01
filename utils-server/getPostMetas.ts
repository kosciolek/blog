import path from "path";
import { promises as fsp } from "fs";

export const getPostMetas = async () => {
  const postsDir = path.join(process.cwd(), "posts");
  const postFilenames = await fsp.readdir(postsDir);

  const metas = postFilenames.map((filename) => ({
    name: /^(.*?)\./.exec(filename)[1],
    // eslint-disable-next-line
    meta: require(`../posts/${filename}`).meta,
  }));
  return metas;
};
