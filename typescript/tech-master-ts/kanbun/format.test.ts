import { expect, test } from "bun:test";
import { formatToItem } from "./format";
import type { Item } from "./types";

const itemMemo = {
  id: 1,
  content: "メモ",
  kind: "memo",
  archived: false,
} as const;

const itemTodo = {
  id: 1,
  content: "Todo",
  kind: "todo",
  archived: false,
} satisfies Item;

test("formatToItem", () => {
  expect(formatToItem(itemMemo)).toBe("- メモ");
  expect(formatToItem(itemTodo)).toBe("⚪︎ Todo");
});
