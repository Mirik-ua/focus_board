import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("force_todo");
  const todos = await db.collection("todos").find({}).toArray();
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db("force_todo");
  const result = await db.collection("todos").insertOne({
    section: data.section,
  });
  return NextResponse.json({ success: true, insertedId: result.insertedId });
}