JavaScript 的创造者是？

**布兰登·艾奇**



JavaScript 的创造公司是？

**Netscape 网景**



浏览器脚本语言标准是谁制定的？标准文件代号是什么？

**欧洲计算机制造商协会-ECMA，ECMA-262**



ECMAScript 和 JavaScript 的关系是什么？

**前者是后者的规格，后者是前者的一种实现**



ECMA在每年哪个月份会发布年度的正式标准颁布？

**6月份**



ES6 和 ES2015 的关系是什么？

**ES6 泛指 5.1 版本之后的 “下一代标准”，ES2015 特指 2015 年 6 月份发布的年度标准**



制定 ECMA-262 标准的委员会代号是？

**TC39**



ECMA-262标准从提案到变成正式标准需要经历哪些阶段？

**1、Stage 0 - Strawman（展示阶段）**

**2、Stage 1 - Proposal（征求意见阶段）**

**3、Stage 2 - Draft（草案阶段）**

**4、Stage 3 - Candidate（候选人阶段）**

**5、Stage 4 - Finished（定案阶段）**



在哪里可以看 ECMA-262 所有提案？

**https://github.com/tc39/ecma262**



ECMAScript 有哪些具体实现？

**JavaScript、Node**



用 ES6 语法编写的代码怎样兼容低版本浏览器？

**Babel 转码器**



怎样安装 Babel？

**npm install --save-dev @babel/core**



Babel 的配置文件是什么？需要放在哪里？

**.babelrc，项目根目录下**



.babelrc 配置文件中 `presets` 字段的作用是？

**设定转码规则**



Babel 官方提供的 `preset` 规则集有哪些？

**@babel/preset-env、@babel/preset-react**



Babel 提供的命令行工具和入口命令分别是什么？

**@babel/cli，babel**



下面两条命令的作用分别是什么？

```bash
$ npx babel example.js -o compiled.js
```

```bash
$ npx babel src -d lib
```

**转码并写入特定文件，转码整个目录**



@babel/node 模块的作用是什么？

**提供 babel-node 命令，用于在命令行下直接运行 ES6 代码**



@babel/register 模块的作用是什么？

**它改写了 require 命令，使得在使用 require 加载 .js、.jsx、.es、.es6后缀的文件名时，会用 Babel 进行转码**



Babel 和 polyfill 的区别是什么？

**Babel 是一种兼容老式浏览器的方案，它会对 JavaScript 的一些新的语法进行转换；polyfill 是一类为了抹平浏览器差异的垫片库的统称，它主要是为了满足不同浏览器厂商之间的差异，以及为一些新的 ES6 接口方法提供 ES5 模拟。**



猜猜下面这个网址提供什么服务？

https://babeljs.io/repl/

**可以在线将 ES6 代码转为 ES5 代码**



Babel 可以在浏览器环境直接使用吗？

**可以，使用 @babel/standalone 模块 即可，但要注意性能问题**



下面命令的意思是？

```bash
$ npm init -y
```

**初始化一个npm包/项目，生成 package.json，-y 表示一路默认不用询问**



Vue-Router 的基本使用流程是？

**1、定义路由组件**

**2、定义路由**

**3、引入并注册路由器**

**4、创建路由实例**

**5、挂载路由实例到 Vue 根实例**



`this.$router` 和 `this.$route` 的区别是？

**前者：路由器，后者：当前页面路由**



Vue-Router 中怎样获取当前路由参数？

**this.$route.params.xxx**



Vue-Router 在 js 中控制路由跳转的方法有哪些？

**this.$router.go() 、this.$router.push()**



`<router-link>` 相比于 `<a>` ，优势在哪？

**1、切换 hash / history 模式时不需要做变动**

**2、history 模式下不会触发页面重载**

**3、history 模式下使用 base 选项后，to 属性不需要写基路径**



`<router-link>` 在什么情况下会自动添加 class: `.router-link-active` ？

**路由匹配到 to 属性对应的路由时**



动态路由参数的写法是？

**{ path: '/user/:id', component: User }**



怎样获取路由中的查询参数？

**this.$route.query**



怎样获取路由中的哈希参数？

**this.$route.hash**



下面代码的作用是？

```js
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

**监视路由参数变化**



`{ path: '*' }` 的作用是？

**兜底，通配符，常用作 404 页面**



这种 `{ path: 'user-*' }` 写法的作用是？

**匹配以 user-开头的任意路径**



为什么通配符路由：“ * ” 要放在最后面？

**兜底**



下面 Nginx 配置文件代码的作用是？

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**让 history 模式的路由正常工作**



怎样获取通过 “ 通配符路由 ” 匹配到的字符？

**this.$route.params.pathMatch**



Vue-Router 路由匹配的优先级规则是怎样的？

**谁先定义，谁优先**



怎样理解`<router-view>`？

**路由匹配的出口**



下面代码运行后，访问 `http://localhost:8080/#/user/001` 会匹配到哪个子路由？

```js
// ...

export default new Router({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'post',
          component: Post
        }
      ]
    }
  ]
})

```

**Profile 和 Post 都没有被匹配，只会展示 User 组件**



路由跳转的声明式与编程式写法分别是什么？

**\<router-link :to="...">**，**router.push(...)**



下面代码的区别是什么？

```js
this.$router.push('user')
```

```js
this.$router.push('/user')
```

**前者相对当前路径，后者是相对根路径**



下面代码中的 name 在哪里定义？

```js
this.$router.push({ name: 'user', params: { id: '002' } })
```

**router中，区别于组件名**



下面代码触发后会跳转到哪个 URL？

```js
router.push({ path: '/user', params: { userId: '002' }})
```

```js
router.push({ path: '/user/${userId}' })
```

**/user，/user/002**



`this.$router.push()` 和 `this.$router.replace()` 区别是？

**后者不会向 history 添加新记录，即：不能回退到跳转之前的路由，因为已经替换了**



`<router-link>` 和 `this.$router.push()` 中 `path` 和 `name` 可以一起用吗？

**不能，后者会覆盖前者**



什么是命名路由？

**给路由加：name 字段**



下面代码演示的是什么？

```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```



下面代码哪里有错？

```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```

**component => components**



下面代码的作用是什么？

```js
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/index',
      redirect: '/'
    }
  ]
})
```

**/index 重定向到 /**



下面代码想说明什么？

```js
export default new Router({
  routes: [
    {
      path: '/',
      redirect: to => {
        const flag = window.confirm('r u sure?')
        if (flag) {
          return '/sure'
        }
        return '/not-sure'
      }
    }
  ]
})
```

**路由重定向可以接收一个函数**



路由重定向（redirect）与路由别名（alias）的区别是什么？

**前者：浏览器地址栏只会体现重定向后的url；**

**后者：浏览器地址栏都可以显示，只是指向的路由组件是同一个；**



 下面组件中的 props 作用是什么？

```js
export default new Router({
  routes: [
    {
      path: '/a/:id',
      component: ComponentA
    },
    {
      path: '/b/:id',
      component: ComponentB,
      props: true
    },
  ]
})
```

**路由组件传参，用于组件与路由解耦**



路由组件使用下面的路由配置，请问这个组件中将会自动获得的props是什么？

```js
export default new Router({
  routes: [
    {
      path: '/b',
      component: ComponentB,
      props: (route) => ({ query: route.query.q })
    },
  ]
})
```

**query**



路由 hash 模式的缺点是什么？

**丑**



Vue-Router 中的 “导航” 的意思是？

**路由正在发生改变**



params 或 query 的改变会触发 进入/离开 的导航守卫吗？

**不会**



完整的导航解析流程是怎样的？

1. **导航被触发。**
2. **在失活的组件里调用 `beforeRouteLeave` 守卫。**
3. **调用全局的 `beforeEach` 守卫。**
4. **在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。**
5. **在路由配置里调用 `beforeEnter`。**
6. **解析异步路由组件。**
7. **在被激活的组件里调用 `beforeRouteEnter`。**
8. **调用全局的 `beforeResolve` 守卫 (2.5+)。**
9. **导航被确认。**
10. **调用全局的 `afterEach` 钩子。**
11. **触发 DOM 更新。**
12. **用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。**



全局前置守卫的作用是？

```js
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

**全局设置路由导航规则，常用于检测是否登录，做到特定页面只能登录授权后才能进入的功能**



什么是 “路由对象” ？

**指：当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的路由记录**



什么是 “全局后置钩子” ？

```js
router.afterEach((to, from) => {
  alert(`welcome to ${to.name}`)
})
```

**可认为是路由的 onchange 事件**



router.beforeEach() 和 router.beforeResolve() 区别？

**前者是全局前置守卫，后者是全局解析守卫，前者触发时机更靠前**



下面代码的作用是什么？

```js
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (from.name === 'user') {
          next(false)
        } else {
          next()
        }
      }
    }
 	]
})
```

**使用路由独享守卫，不允许 name 为 user 的路由直接跳转到 login**



