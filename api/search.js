export default async function handler(req, res) {
  res.status(200).json({
    count: 1,
    papers: [
      {
        title: "iPhone対応APIが動作しています",
        journal: "Vercel Test",
        pubdate: "2026",
        authors: ["System"],
        abstract: "この表示が出れば、iPhoneでも通信が成功しています。",
        doi: null,
        citationCount: 0
      }
    ]
  });
}
