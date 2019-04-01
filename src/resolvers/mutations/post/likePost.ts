import incrementByN from '@util/incrementByN'
import { extendType, idArg } from 'nexus'
import { Context } from '../../../db-types'

export const likePost = extendType({
  definition: (t) => {
    t.field('likePost', {
      args: { id: idArg(), userId: idArg() },
      nullable: true,
      resolve: async (_, { id, userId }, ctx: Context) => {
        // Retrieve users who've liked the post
        const postLikesUsersList = await ctx.prisma
          .post({ id })
          .likedBy()
          .then((users) => users)
          .catch((e: Error) => {
            throw e
          })

        // Get the amount likes on the post
        const postLikes = await ctx.prisma
          .post({ id })
          .likes()
          .then((likes) => likes)
          .catch((e: Error) => {
            throw e
          })

        // Did user like this post? Default to false
        let userLiked = false

        /**
         * Go through list of users that have liked the post,
         * then check if the id of each matches current `userId`
         * If any matches, return the post with no updated val
         * ! pLU = postLikesUser - it's shortened for formatting
         */
        postLikesUsersList.map((pLU) => pLU.id === userId && (userLiked = true))
        if (userLiked) {
          return ctx.prisma.updatePost({
            data: {},
            where: { id }
          })
        }

        // If user haven't liked the post and no errors occurred
        return ctx.prisma.updatePost({
          data: {
            likedBy: {
              connect: { id: userId }
            },
            likes: incrementByN(postLikes, 1)
          },
          where: { id }
        })
      },
      type: 'Post'
    })
  },
  type: 'Mutation'
})
