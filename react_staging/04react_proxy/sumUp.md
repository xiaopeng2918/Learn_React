# 一 React中axios请求
##   代理设置
###   第一种配置：
      在package.json中设置proxy字段  设置需要被代理的请求链接 那么在axios请求当中你可以请求当前客户端所在链接
      react会帮你代理package.json设置的链接。
      注意： 如果在本地客户端能够找到该资源或者数据，axios会优先访问本地的。
            要使用localhost 自己使用127.0.0.1不可以
            在react该项目中默认请求根路径为public下的静态资源
      缺点: 只能代理一个
###   第二种配置
在src下创建setupProxy.js文件  文件名不能变


里面需要使用CJS（common.js）语法
       
      
[点击查看具体配置](http://yxp2918.top/2021/05/29/%E6%A1%86%E6%9E%B6/React/react%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE/)