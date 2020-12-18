const userController = require("../controllers/user");
const followController = require("../controllers/follow");

const resolvers = {
    Query: {
        //UsEr
        getUser: (_, { id, username }) => userController.getUser(id, username), 
        search: (_, { search }) => userController.search(search),

        //follow
        isFollow: (_, { username }, ctx) => followController.isFollow(username, ctx),
        getFollowers: (_, { username }) => followController.getFollowers(username),
    },
    Mutation: {
       // User
       register: (_, { input }) => userController.register(input),
       login: (_, { input }) => userController.login(input),
       updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
       deleteAvatar: (_, {}, ctx) => userController.deleteAvatar(ctx),
       updateUser: (_, { input }, ctx) => userController.updateUser(input, ctx),

       //Follow
       follow: (_, { username }, ctx) => followController.follow(username, ctx),
       unFollow: (_, { username }, ctx) => followController.unFollow(username, ctx),
    },
};

module.exports = resolvers;