import { or, shield } from 'graphql-shield'

import { general } from './general'
import { post } from './post'
import { projectCategory } from './projectCategory'
import { user } from './user'

const rules = {
  ...general,
  ...post,
  ...user,
  ...projectCategory
}

export const permissions = shield({
  Mutation: {
    likePost: rules.isAuthenticatedUser,
    postCreate: or(rules.isAuthenticatedUser, rules.isAdmin),
    postDelete: or(rules.isPostOwner, rules.isAdmin),
    postUpdate: or(rules.isPostOwner, rules.isAdmin),
    projectCategoryCreate: rules.isAdmin,
    projectCategoryDelete: rules.isAdmin,
    projectCategoryUpdate: rules.isAdmin,
    projectCreate: rules.isAuthenticatedUser,
    projectDelete: or(rules.isProjectOwner, rules.isAdmin),
    projectUpdate: or(rules.isProjectOwner, rules.isAdmin),
    userDelete: or(rules.isAuthenticatedUser, rules.isAdmin),
    userUpdate: or(rules.isUser, rules.isAdmin)
  },
  Query: {
    posts: rules.isAdmin,
    projectCategories: rules.isAdmin,
    projects: rules.isAdmin
  }
})
