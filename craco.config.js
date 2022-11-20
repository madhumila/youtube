const path = require("path");
module.exports={
    webpack:{
    alias:{
        "@":path.join(path.resolve(_dirname,"./src")),
        "@Components":path.join(path.resolve(_dirname,"./src/Components")),
        "@Data":path.join(path.resolve(_dirname,"./src/Data")),
        "@Navigation":path.join(path.resolve(_dirname,"./src/Navigation")),
        "@Themes":path.join(path.resolve(_dirname,"./src/Themes")),
        "@Hooks":path.join(path.resolve(_dirname,"./src/Hooks")),
        "@Styles":path.join(path.resolve(_dirname,"./src/Styles")),
        
    },
    },
};