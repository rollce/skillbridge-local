import { opportunities } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const skills = String(body?.skills ?? "")
    .toLowerCase()
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const maxHours = Number(body?.maxHours ?? 3);

  if (!skills.length) {
    return NextResponse.json({ error: "Please provide at least one skill" }, { status: 400 });
  }

  const ranked = opportunities
    .map((opportunity) => {
      const overlap = opportunity.skills.filter((skill) => skills.includes(skill)).length;
      const hourPenalty = opportunity.hours > maxHours ? 0.4 : 1;
      const score = overlap * 10 * hourPenalty;
      return { ...opportunity, score: Number(score.toFixed(1)) };
    })
    .filter((opportunity) => opportunity.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return NextResponse.json({ matches: ranked });
}
