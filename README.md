# SkillBridge Local

SkillBridge Local is a multi-page volunteering coordination app that matches people to local opportunities using skills and time constraints.

Live: https://skill.rollsev.work

## Why this project exists

Communities often have willing volunteers but weak matching between tasks, skills, and availability. This project demonstrates a lightweight recommendation workflow for social impact coordination.

## Product goals

- List active local opportunities in one place
- Match volunteers by skills and weekly time capacity
- Surface top-fit opportunities with transparent scoring
- Show impact-oriented outcomes for community teams

## Pages and user flows

- `/` Overview
  - Product context and action entry points
- `/opportunities`
  - Browse active opportunities and impact descriptions
- `/matching`
  - Submit skills + max weekly hours to receive ranked matches
- `/impact`
  - KPI-oriented impact summary view

## API surface

### `GET /api/opportunities`
Returns full opportunity dataset.

### `POST /api/match`
Input:
- `skills`: comma-separated string
- `maxHours`: numeric weekly limit

Validation:
- Requires at least one skill

Scoring model:
- Count overlap between user skills and opportunity skills
- Base score: `overlap * 10`
- Apply hour penalty `0.4` when opportunity hours > maxHours
- Return top 3 matches sorted by score

Output:
- `matches` array with `score` included

## Data model (demo)

Opportunity fields:
- `id`, `title`, `organization`, `hours`, `skills`, `impact`

Current data includes examples such as:
- After-school mentoring
- Food logistics support
- Accessibility review
- Community hotline support

## UI / UX stack

- Chakra UI (`Box`, `Button`, `Badge`, `Input`, `SimpleGrid`, `Alert`)
- Framer Motion for transitions
- Tailwind CSS support styling

## Technical stack

- Next.js 16 (App Router + Route Handlers)
- TypeScript
- Tailwind CSS 4
- Chakra UI
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

- Deployed on Railway
- Public domain: `skill.rollsev.work`

## Portfolio value

SkillBridge demonstrates recommendation logic, clear API validation, and social-impact product framing in a deployable fullstack structure.

## Roadmap

- Add volunteer profile persistence
- Add organization-side opportunity management
- Add multi-factor scoring (location, schedule windows, language)
