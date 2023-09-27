import { Gender } from '@prisma/client';
import { AlignmentEnum } from '../../../src/shared/enums/alignment.enum';
import { LivingStatusEnum } from '../../../src/shared/enums/living-status.enum';
import { MaritalStatusEnum } from '../../../src/shared/enums/marital-status.enum';

export const characterSeederData = [
  {
    id: 1,
    name: 'Spider-Man',
    civilName: 'Peter Benjamin Parker',
    gender: Gender.male,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 2,
    name: 'Spider-Girl',
    civilName: 'May Parker',
    gender: Gender.female,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 3,
    name: 'Black Cat',
    civilName: 'Felicia Sara Hardy',
    gender: Gender.female,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 4,
    name: 'Sin',
    civilName: 'Sinthea Shmidt',
    gender: Gender.female,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 5,
    name: 'Viper',
    civilName: 'Ophelia Sarkissian',
    gender: Gender.female,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.divorced,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 6,
    name: 'Iron Maiden',
    civilName: 'Melina Vostokova',
    gender: Gender.female,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 7,
    name: 'Typhoid Mary',
    civilName: 'Mary Alice Walker',
    gender: Gender.female,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.married,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 8,
    name: 'Enchantress',
    civilName: 'Amora',
    gender: Gender.female,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 9,
    name: 'Green Goblin',
    civilName: 'Norman Virgil Osborn',
    gender: Gender.male,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.widowed,
    livingStatusId: LivingStatusEnum.deceased,
  },
  {
    id: 10,
    name: 'Doctor Octopus',
    civilName: 'Otto Gunther Octavius',
    gender: Gender.male,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 11,
    name: 'Sandman',
    civilName: 'William Baker',
    gender: Gender.male,
    alignmentId: AlignmentEnum.evil,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 12,
    name: 'Captain Marvel',
    civilName: 'Carol Susan Jane Danvers',
    gender: Gender.female,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 13,
    name: 'Captain America',
    civilName: 'Steven Grant Rogers',
    gender: Gender.male,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 14,
    name: 'Black Widow',
    civilName: 'Natalia Alianovna Romanova',
    gender: Gender.female,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.divorced,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 15,
    name: 'Scarlet Witch',
    civilName: 'Wanda Django Maximoff',
    gender: Gender.female,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.divorced,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 16,
    name: 'Wolverine',
    civilName: 'James Howlett',
    gender: Gender.male,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.deceased,
  },
  {
    id: 17,
    name: 'Jean Grey',
    civilName: 'Jean Elaine Grey-Summers',
    gender: Gender.female,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.married,
    livingStatusId: LivingStatusEnum.deceased,
  },
  {
    id: 18,
    name: 'Havok',
    civilName: 'Alexander Summers',
    gender: Gender.male,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.single,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 19,
    name: 'Invisible Woman',
    civilName: 'Susan Storm Richards',
    gender: Gender.female,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.married,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 20,
    name: 'Mister Fantastic',
    civilName: 'Reed Richards',
    gender: Gender.male,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.married,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 21,
    name: 'Human Torch',
    civilName: 'Jonathan Lowell Spencer Storm',
    gender: Gender.male,
    alignmentId: AlignmentEnum.good,
    maritalStatusId: MaritalStatusEnum.divorced,
    livingStatusId: LivingStatusEnum.alive,
  },
  {
    id: 22,
    name: 'Deadpool',
    civilName: 'Wade Winston Wilson',
    gender: Gender.male,
    alignmentId: AlignmentEnum.neutral,
    maritalStatusId: MaritalStatusEnum.separated,
    livingStatusId: LivingStatusEnum.alive,
  }
];
