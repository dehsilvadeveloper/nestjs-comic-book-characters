import { TeamMemberRole, TeamMemberStatus } from '@prisma/client';

export const characterTeamSeederData = [
  // Avengers
  {
    characterId: 1, // Spider-Man
    teamId: 1,
    status: TeamMemberStatus.former,
    role: TeamMemberRole.member,
  },
  {
    characterId: 16, // Wolverine
    teamId: 1,
    status: TeamMemberStatus.former,
    role: TeamMemberRole.member,
  },
  {
    characterId: 14, // Black Widow
    teamId: 1,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
  {
    characterId: 13, // Captain America
    teamId: 1,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.leader,
  },
  {
    characterId: 12, // Captain Marvel
    teamId: 1,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
  {
    characterId: 15, // Scarlet Witch
    teamId: 1,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },

  // Fantastic Four
  {
    characterId: 19, // Invisible Woman
    teamId: 2,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
  {
    characterId: 20, // Mister Fantastic
    teamId: 2,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.leader,
  },
  {
    characterId: 21, // Human Torch
    teamId: 2,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },

  // Sinister Six
  {
    characterId: 9, // Green Goblin
    teamId: 3,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.leader,
  },
  {
    characterId: 10, // Doctor Octopus
    teamId: 3,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
  {
    characterId: 11, // Sandman
    teamId: 3,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },

  // X-Men
  {
    characterId: 16, // Wolverine
    teamId: 4,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
  {
    characterId: 17, // Jean Grey
    teamId: 4,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
  {
    characterId: 18, // Havok
    teamId: 4,
    status: TeamMemberStatus.current,
    role: TeamMemberRole.member,
  },
];
