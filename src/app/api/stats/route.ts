import { NextRequest, NextResponse } from "next/server";

var lastGitRequest = new Date("2023-01-10T12:00:00Z");
var stats = { stars: 0, forks: 0, contributors: 0 };

function isIterable(obj: any): obj is Iterable<any> {
  return obj != null && typeof obj[Symbol.iterator] === "function";
}

async function getStats() {
  let page = 0;
  let stars = 0;
  let forks = 0;
  let contributors = 0;

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/orus-dev/repos?per_page=100&page=${page}`
    );
    const repos = await res.json();

    if (repos.length === 0 || !isIterable(repos)) break;

    for (const repo of repos) {
      stars += repo.stargazers_count;
      forks += repo.forks_count;
      const conRes = await fetch(repo.contributors_url);
      contributors += (await conRes.json()).length;
    }

    page++;
  }

  return { stars, forks, contributors };
}

export async function GET(req: NextRequest) {
  const now = new Date();

  if (now.getTime() - lastGitRequest.getTime() > 60 * 60 * 1000) {
    stats = await getStats();
    lastGitRequest = now;
  }

  return NextResponse.json(stats);
}
