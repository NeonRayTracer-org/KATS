import {
  // AllQueryArgsArray,
  // AllQueryArgsSingle,
  MutationTypes,
  QueryTypes
} from 'whitelistSettings'

const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS

// const allQueryArgsSingle: AllQueryArgsSingle[] = ['where']

/* const allQueryArgsArray: AllQueryArgsArray[] = [
  'orderBy',
  'first',
  'last',
  'before',
  'skip',
  'after',
  'where'
] */

const ALLOWED_PRISMA_QUERIES: QueryTypes = [
  // Posts
  'posts',
  'postTag',
  // Projects
  'project',
  'projects',
  'projectTag',
  // Project categories
  {
    name: 'projectCategory'
  },
  {
    name: 'projectCategories'
  },
  // Users
  'user'
]

const ALLOWED_PRISMA_MUTATIONS: MutationTypes = [
  // Posts
  { name: 'createPost', alias: 'postCreate' },
  { name: 'updatePost', alias: 'postUpdate' },
  { name: 'deletePost', alias: 'postDelete' },
  // Projects
  { name: 'createProject', alias: 'projectCreate' },
  { name: 'updateProject', alias: 'projectUpdate' },
  { name: 'deleteProject', alias: 'projectDelete' },
  // Project categories
  { name: 'createProjectCategory', alias: 'projectCategoryCreate' },
  { name: 'updateProjectCategory', alias: 'projectCategoryUpdate' },
  { name: 'deleteProjectCategory', alias: 'projectCategoryDelete' },
  // Users
  { name: 'deleteUser', alias: 'userDelete' },
  { name: 'updateUser', alias: 'userUpdate' }
]

export default {
  ALLOWED_DOMAINS,
  ALLOWED_PRISMA_MUTATIONS,
  ALLOWED_PRISMA_QUERIES
}
