import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const characterInclude = {
  alignment: true,
  maritalStatus: true,
  livingStatus: true,
  powers: {
    select: {
      power: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
    orderBy: {
      power: {
        name: 'asc',
      },
    },
  },
  teams: {
    select: {
      team: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
    orderBy: {
      team: {
        name: 'asc',
      },
    },
  },
  relatives: {
    select: {
      id: true,
      addedAt: true,
      relationship: {
        select: {
          id: true,
          name: true,
        },
      },
      relative: {
        select: {
          id: true,
          name: true,
          civilName: true,
        },
      },
    },
    orderBy: {
      relative: {
        name: 'asc',
      },
    },
  },
  allies: {
    select: {
      id: true,
      ally: {
        select: {
          id: true,
          name: true,
          civilName: true,
        },
      },
    },
    orderBy: {
      ally: {
        name: 'asc',
      },
    },
  },
  enemies: {
    select: {
      id: true,
      enemy: {
        select: {
          id: true,
          name: true,
          civilName: true,
        },
      },
    },
    orderBy: {
      enemy: {
        name: 'asc',
      },
    },
  },
} as Prisma.CharacterInclude<DefaultArgs>;
