import { Database } from "bun:sqlite";
import {
  archiveItems,
  createItem,
  deleteItem,
  getItems,
  initializeItemTable,
  updateTodoToDone,
} from "./db";
import { formatToItem } from "./format";

const db = new Database("sqlite.db");

initializeItemTable(db);

try {
  if (Bun.argv.length === 4) {
    const content: string = Bun.argv.pop() ?? "";
    const command: string = Bun.argv.pop() ?? "";
    switch (command) {
      case "memo":
        createItem(db, content, "memo");
        break;
      case "todo":
        createItem(db, content, "todo");
        break;
      case "done":
        updateTodoToDone(db, content);
        break;
      case "drop":
        deleteItem(db, content);
        break;
      default:
        throw new Error("不正なコマンドです");
    }
    printItems(db);
  } else if (Bun.argv.length === 3) {
    const command: string = Bun.argv.pop() ?? "";
    switch (command) {
      case "trim":
        archiveItems(db);
        break;
      default:
        throw new Error("不正なコマンドです");
    }
    printItems(db);
  } else if (Bun.argv.length === 2) {
    printItems(db);
    // const items = getItems(db);
    // items.forEach((item) => {
    //   console.log(formatToItem(item));
    // });
  } else {
    throw new Error("追加のコマンドライン引数は1つまでです");
  }
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message)
  }
}

function printItems(db: Database) {
  const items = getItems(db);
  items.forEach((item) => {
    if (item.archived) {
      return;
    }
    console.log(formatToItem(item));
  });
}

db.close();
