import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "キャラクター一覧" },
    { name: "description", content: "なりきりBBSのキャラクター一覧です" },
  ];
};

export default function Characters() {
  return (
    <div>
    <h1>キャラクター一覧</h1>
    <Link to="/">TOPへ戻る</Link>
   </div>
  );
}
