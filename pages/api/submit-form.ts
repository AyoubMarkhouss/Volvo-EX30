import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbw484fubvI0JjdkX6-P0X-AvYjFzcJlhfyK_JZZU3B4xz2G6GYBF6IYebX3MamWuXcGEg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur proxy Google Script :", error);
    return res.status(500).json({ error: "Erreur côté serveur" });
  }
}
