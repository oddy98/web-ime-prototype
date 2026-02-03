// 最小詞庫，只示範 k 開頭
const DICTIONARY = {
  ka: ["卡", "咖"],
  ki: ["奇", "棋"],
  ku: ["酷", "庫"]
}

// 當前輸入 buffer
let buffer = ""

// 找到 input 元素
const input = document.getElementById("imeInput")

input.addEventListener("keydown", function(event) {
  const key = event.key

  // 只處理字母
  if (!/^[a-z]$/i.test(key)) return

  // 累積 buffer
  buffer += key.toLowerCase()

  // 只處理 k 開頭
  if (!buffer.startsWith("k")) return

  // 嘗試查詞庫
  const candidates = DICTIONARY[buffer]
  if (candidates) {
    console.log("Buffer:", buffer, "Candidates:", candidates)
  }
})
