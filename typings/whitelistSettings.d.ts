import { NexusPrismaTypes } from '@nexus-prisma/nexus-prisma'

export type AllQueryArgsSingle = 'where'

export type AllQueryArgsArray =
  | 'where'
  | 'orderBy'
  | 'first'
  | 'last'
  | 'before'
  | 'skip'
  | 'after'

export type QueryTypes = Array<
  NexusPrismaTypes['objectTypes']['fields']['Query']
>

export type MutationTypes = Array<
  NexusPrismaTypes['objectTypes']['fields']['Mutation']
>
