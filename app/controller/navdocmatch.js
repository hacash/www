const fs = require("fs")

var pathcaches = {}

async function renderNavDocViewer(cnf, ctx, next, is_nav, name) {
    ctx.params.is_nav = is_nav ? 'true' : false
    ctx.params.name = name
    await global.koappx.viewer_render('navdoc', cnf, ctx, next)
}


module.exports = async function(cnf, ctx, next){

    
    let q = ctx.query
    , navdocname = (ctx.params.navdocmatch||'').toLowerCase()
    , render = async function(is_nav) {
        await renderNavDocViewer(cnf, ctx, next, is_nav, navdocname)
    }

    // cache
    if(pathcaches[navdocname] === undefined) {
    }else{
        // console.log("cache path !!! = ", navdocname)
        await render(pathcaches[navdocname])
        return
    }
    
    
    // find in disk
    var is_nav = false
    try{
    if(fs.existsSync(`./nav/en/${navdocname}.md`) || fs.existsSync(`./nav/zh/${navdocname}.md`)){
        is_nav = true
    }else if(fs.existsSync(`./doc/en/${navdocname}.md`) || fs.existsSync(`./doc/zh/${navdocname}.md`)){
        is_nav = false
    }else{
        // console.log("next!!!")
        return next()
    }
    }catch(e){}

    pathcaches[navdocname] = is_nav

    // view
    await render(is_nav)
}
