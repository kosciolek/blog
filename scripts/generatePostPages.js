const fsp = require("fs").promises;
const path = require("path");

const postsDir = path.join(__dirname, "..", "..", "posts");
const pagesDir = path.join(__dirname, "..", "pages", "posts");

const makePostSource = (filename) => `import * as Post from "../posts/${filename}";
import { makePost } from "../../makePost";

export default makePost(Post);
`;

(async () => {
  console.log("Generating post pages...");
  const posts = await fsp.readdir(postsDir);
  await Promise.all(
    posts.map((filename) => {
      const noExtension = /^(.*)\./.exec(filename)[1];
      const outPath = path.join(pagesDir, noExtension) + ".tsx";
      console.log(`Generating ${noExtension} to ${outPath}`);
      return fsp.writeFile(outPath, makePostSource(filename));
    })
  );
  console.log(`Generated ${posts.length} post pages.`);
})();
