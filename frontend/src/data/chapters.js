const img = (n) => `/${String(n).padStart(4, '0')}.jpg`;

export const chapters = [
  { title: 'The Eye', images: [1, 2, 7, 9, 18].map(img) },
  { title: 'Touch', images: [5, 6, 12, 13].map(img) },
  { title: 'Warm Studies', images: [3, 4, 8, 14].map(img) },
  { title: 'Nature', images: [16, 17, 19].map(img) },
  { title: 'Process', images: [10, 11, 15].map(img) },
];

export const allImages = chapters.flatMap((chapter) => chapter.images);
