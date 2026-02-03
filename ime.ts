export type DictionaryEntry = {
  key: string;
  value: string;
};

const DICTIONARY: DictionaryEntry[] = [
  { key: "ka", value: "か" },
  { key: "ki", value: "き" },
  { key: "ku", value: "く" },
  { key: "ke", value: "け" },
  { key: "ko", value: "こ" },
];

export class Ime {
  private buffer = "";

  input(text: string): void {
    for (const char of text) {
      this.buffer += char;
      this.processBuffer();
    }
  }

  getBuffer(): string {
    return this.buffer;
  }

  reset(): void {
    this.buffer = "";
  }

  private processBuffer(): void {
    if (!this.buffer.startsWith("k")) {
      return;
    }

    const match = DICTIONARY.find((entry) => entry.key === this.buffer);
    if (match) {
      console.log("命中詞條", match);
    }
  }
}

export { DICTIONARY };
