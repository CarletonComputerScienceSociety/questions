import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file URL and convert it to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust paths relative to the script's location in 'src/scripts'
const srcDir = path.join(__dirname, "..", "src", "content", "questions");
const destDir = path.join(__dirname, "..", "public", "images");

function copyImages(srcPath) {
  fs.readdir(srcPath, (err, courses) => {
    if (err) throw err;

    courses.forEach((course) => {
      const coursePath = path.join(srcPath, course);

      fs.readdir(coursePath, (err, subFolders) => {
        if (err) throw err;

        subFolders.forEach((subFolder) => {
          const subFolderPath = path.join(coursePath, subFolder);

          fs.readdir(subFolderPath, (err, subSubFolders) => {
            if (err) throw err;

            subSubFolders.forEach((subSubFolder) => {
              const subSubFolderPath = path.join(subFolderPath, subSubFolder);

              const srcImagePath = path.join(subSubFolderPath, "image.png");
              const destImagePath = path.join(
                destDir,
                course,
                subFolder,
                subSubFolder,
                "image.png",
              );

              // Check if image.png exists
              if (fs.existsSync(srcImagePath)) {
                // Create destination directory if it doesn't exist
                fs.mkdirSync(path.dirname(destImagePath), { recursive: true });

                // Copy the image
                fs.copyFile(srcImagePath, destImagePath, (err) => {
                  if (err) throw err;
                  console.log(`Copied: ${srcImagePath} to ${destImagePath}`);
                });
              }
            });
          });
        });
      });
    });
  });
}

copyImages(srcDir);
