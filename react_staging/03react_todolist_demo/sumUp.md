一 React当中子级组件如何修改父组件的状态？
  1.首先子组件是不可以直接修改props
  2.对于父组件，想要修改自身的state可以通过定义函数通过回调修改
    这里我们就可以将这个函数传给自己的子组件，让子组件通过回调实现修改父组件的state
  3.需要修改哪个组件的state，就在哪个组件下定义对应函数 修改state
    至于函数在哪里回调，需要依据需求
  4.这里需要注意的是：父组件定义的修改state的函数只关注修改state需要的条件，
    切忌把回调该函数触发的逻辑条件也书写在这个函数里面（这些触发回调函数的条件在调用地方再定义一个函数，
    函数中可调用修改状态的函数）
  5.子级组件这里可以理解为父组件下包含的所有组件，不仅仅是子组件。
    多层次下的组件可以一步步传递函数到该组件上面
二 表单修改，并将状态保存起来
  1.这个todolist Demo我们把列表数据放在了根组件APP当中。在子组件修改Item当中通过checkBox的值修改完成状态
  2.我们需要将父组件的修改状态的函数，一级一级的传给Item组件
  3.修改状态需要两个参数（针对于总状态数据），一个是id，一个是input的checked属性的布尔值
  4.大致思路就是父组件创建updateTodo函数，接受两个参数，一个为Id，一个为布尔值。在Item组件中回调
  5.Item组件中input有onChange事件，改变就会调用，当这个事件触发回调handleChange修改状态
  6.难点：handleChange需要接受一个id参数，并且该函数里还要获取checked值。
          这时input没改变就会回调这个handleChange函数。
         handleChange需要返回一个函数，这个函数就是当onChange改变的时候回调的函数
         handleChange返回的函数的参数为一个事件触发对象，及checkBox框，这样，该函数就能拿到id 和 checked值
         在该函数内部执行updateTodo实现修改表单状态
三 window.confirm使用  -> 跳出一个带有确定和取消的弹窗
    1.confirm()  参数接收提示信息。  点击确定 confirm()返回true  点击取消 confirm()返回false
四 defaultChecked只在第一次渲染数据有作用 如果动态绑定了checked值，那么必须设置onChange事件