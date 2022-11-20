const path =require("path");
module.exports={
    webpack:{
    alias:{
        "@":path.join(path.resolve(_dirrname,"/src")),
        "@Components":path.join(path.resolve(_dirrname,"/src/Components")),
        "@Data":path.join(path.resolve(_dirrname,"/src/Data")),
        "@Navigation":path.join(path.resolve(_dirrname,"/src/Na,vigation")),
        "@Themes":path.join(path.resolve(_dirrname,"/src/Themes")),
        "@Hooks":path.join(path.resolve(_dirrname,"/src/Hooks")),
        "@Styles":path.join(path.resolve(_dirrname,"/src/Styles")),
        
    },
    }
}