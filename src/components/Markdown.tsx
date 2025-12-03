import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/github.css";
import { CopyIcon } from "lucide-react";

interface MarkdownProps {
  content: string;
  components?: Record<string, React.ElementType>;
  darkMode?: boolean;
}

const Markdown: React.FC<MarkdownProps> = ({
  content,
  components,
  darkMode = true,
}) => {
  // Copy to clipboard handler
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={darkMode ? "prose prose-invert" : "prose"}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeKatex,
          rehypeHighlight,
          rehypeSlug,
          rehypeAutolinkHeadings,
          rehypeRaw,
          remarkBreaks,
        ]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold my-6" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold my-5" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-semibold my-4" {...props} />
          ),
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
              {...props}
            >
              {children}
            </a>
          ),
          code: ({ className, children, ...props }) => {
            const language = className?.replace("language-", "") || "";
            return (
              <div className="relative group my-4">
                <pre
                  className={`rounded-lg p-4 overflow-x-auto ${
                    darkMode ? "bg-gray-900" : "bg-gray-100"
                  }`}
                >
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
                <button
                  onClick={() => copyToClipboard(String(children))}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white px-2 py-1 text-sm rounded"
                >
                  Copy
                </button>
              </div>
            );
          },
          details: ({ node, ...props }) => (
            <details
              className="my-4 p-2 border rounded bg-gray-50 dark:bg-gray-800"
              {...props}
            />
          ),
          summary: ({ node, ...props }) => (
            <summary className="font-semibold cursor-pointer" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul {...props} className="list-disc list-inside my-1.5" />
          ),
          ol: ({ ...props }) => (
            <ol {...props} className="list-decimal list-inside my-1.5" />
          ),
          hr: ({ ...props }) => <hr {...props} className="my-4" />,
          ...components,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
