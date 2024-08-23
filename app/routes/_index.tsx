import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "なりきりBBS" },
    { name: "description", content: "設定のないロールプレイングBBS" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  return json({ cookie: cookieHeader });
}

export default function Index() {
  const {cookie} =  useLoaderData<typeof loader>();

  return (
   <div>
    <h1>なりきりBBS</h1>
    <Link to="/characters">キャラクター一覧</Link>
    <p>Cookie: {cookie}</p>
   </div>
  );
}
