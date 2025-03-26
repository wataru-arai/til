import type { Item, Kind } from "./types";

// 文字列の先頭に`- `をつけて返す
export function formatToItem(item: Item): string {
  const symbol = symbolizedKind(item.kind)
  return `${symbol} ${item.content}`;
}

export function symbolizedKind(kind:Kind): string {
  switch (kind) {
    case "memo":
      return "-"
    case "todo":
      return "⚪︎"
    case "done":
      return "x"
  }
}