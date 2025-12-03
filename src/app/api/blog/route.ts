import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PostPreview } from "@/lib/posts";

const BLOG_DIR = path.join(process.cwd(), "blog");

export function getAllBlogPreviews(): PostPreview[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json"));

  return files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);

    // Generate the URL based on filename
    const slug = file.replace(/\.json$/, "");

    return {
      ...data,
      url: `/blog/${slug}`,
    } as PostPreview;
  });
}

export function GET(req: NextRequest): NextResponse {
  return NextResponse.json(getAllBlogPreviews());
}
