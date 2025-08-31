import Word from "../models/word.model.js";

// simple edit distance calculation
function editDistance(a, b) {
  const dp = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] == b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // deletion
            dp[i][j - 1], // insertion
            dp[i - 1][j - 1] // substitution
          );
      }
    }
  }

  return dp[a.length][b.length];
}

export default class autoCorrectService {
  async correct(word) {
    try {
      console.log("Received word: ", word);

      // Fetch only words that start with the same letter and are within ±2 length
      const regex = new RegExp("^" + word[0], "i");
      const minLen = word.length - 2;
      const maxLen = word.length + 2;

      const words = await Word.find(
        {
          text: { $regex: regex, $exists: true },
          $expr: {
            $and: [
              { $gte: [{ $strLenCP: "$text" }, minLen] },
              { $lte: [{ $strLenCP: "$text" }, maxLen] },
            ],
          },
        },
        "text"
      );

      const wordList = words.map((w) => w.text);

      console.log(`Filtered candidates: ${wordList.length}`);

      let minDist = Infinity;
      let suggestion = word;

      for (const w of wordList) {
        const dist = editDistance(word, w);
        if (dist < minDist) {
          minDist = dist;
          suggestion = w;
        }
      }

      return suggestion;
    } catch (error) {
      console.error("error while finding correct match:", error.message);
      throw new Error(error);
    }
  }
}
