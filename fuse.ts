import { fusebox, sparky } from 'fuse-box'
class Context {
  isProduction
  runServer
  getConfig = () =>
    fusebox({
      output: "dist/$name-$hash",
      target: 'browser',
      entry: 'src/index.tsx',
      dependencies: { include: ["tslib"] },
      webIndex: {
        template: 'src/index.html',
      },
      cache: {
        enabled: true,
        FTL: true,
        root: ".cache"
      },
      watch: true,
      devServer: this.runServer?{open:true}:false,
    })
}
const { task, rm, exec } = sparky<Context>(Context)

task('default', async ctx => {
  ctx.runServer = true
  const fuse = ctx.getConfig()
  await fuse.runDev()
})

task('preview', async ctx => {
  rm('./dist')
  ctx.runServer = true
  ctx.isProduction = true
  const fuse = ctx.getConfig()
  await fuse.runProd({ uglify: false })
})
task('dist', async ctx => {
  rm('./dist')
  ctx.runServer = false
  ctx.isProduction = true
  const fuse = ctx.getConfig()
  await fuse.runProd({ uglify: false, manifest:true })
})
