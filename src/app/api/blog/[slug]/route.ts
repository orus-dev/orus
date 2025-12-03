// app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PostPreview } from "@/lib/posts";

const BLOG_DIR = path.join(process.cwd(), "blog");

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Read JSON metadata
    const jsonPath = path.join(BLOG_DIR, `${slug}.json`);
    if (!fs.existsSync(jsonPath)) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    const rawData = fs.readFileSync(jsonPath, "utf-8");
    const data: Omit<PostPreview, "url"> = JSON.parse(rawData);

    // Read Markdown content
    const mdPath = path.join(BLOG_DIR, `${slug}.md`);
    let content = "";
    if (fs.existsSync(mdPath)) {
      content = fs.readFileSync(mdPath, "utf-8");
    }

    return NextResponse.json({
      meta: {
        ...data,
        url: `/blog/${slug}`,
      },
      content,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
