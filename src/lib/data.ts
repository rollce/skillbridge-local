export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  hours: number;
  skills: string[];
  impact: string;
}

export const opportunities: Opportunity[] = [
  {
    id: "o1",
    title: "After-school math mentor",
    organization: "BrightKids Center",
    hours: 3,
    skills: ["teaching", "math", "communication"],
    impact: "Support 12 students weekly",
  },
  {
    id: "o2",
    title: "Food distribution logistics",
    organization: "City Food Hub",
    hours: 4,
    skills: ["coordination", "physical", "teamwork"],
    impact: "Pack 180 food boxes",
  },
  {
    id: "o3",
    title: "Website accessibility review",
    organization: "OpenHelp NGO",
    hours: 5,
    skills: ["web", "ux", "analysis"],
    impact: "Improve accessibility for 4 public pages",
  },
  {
    id: "o4",
    title: "Community hotline assistant",
    organization: "SafeLine Local",
    hours: 2,
    skills: ["listening", "communication", "empathy"],
    impact: "Handle 25 help requests per shift",
  },
];
