import { mkdir, readdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const source = "assets/maksa-icon.svg";
const androidRes = "android/app/src/main/res";
const densities = { "mipmap-mdpi":48, "mipmap-hdpi":72, "mipmap-xhdpi":96, "mipmap-xxhdpi":144, "mipmap-xxxhdpi":192 };
for (const [folder,size] of Object.entries(densities)) {
  const dir = `${androidRes}/${folder}`;
  await mkdir(dir,{recursive:true});
  const png = await sharp(source).resize(size,size).png().toBuffer();
  for (const name of ["ic_launcher.png","ic_launcher_round.png","ic_launcher_foreground.png"]) {
    await writeFile(`${dir}/${name}`,png);
  }
}
console.log("MAKSA ARAB red/black/silver launcher icons generated.");
