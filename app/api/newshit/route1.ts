// import formidable from 'formidable';
// import fs from 'fs'; import path from 'path';

// export default async function handler(req, res) { 
//     const form = formidable({ multiples: true, uploadDir: path.join(process.cwd(), 'data'), keepExtensions: true, });

// form.parse(req, (err, fields, files) => { if (err) { console.error(err); res.status(500).send('Internal Server Error'); return; }

// const file = files.file;
// const oldPath = file.path;
// const newPath = path.join(process.cwd(), 'data', file.name);

// fs.rename(oldPath, newPath, (err) => {
//   if (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//     return;
//   }

//   res.status(200).send('File uploaded successfully');
// });
// }); }