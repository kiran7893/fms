import { connect } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    return NextResponse.json({ message: "Database connected successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
}
