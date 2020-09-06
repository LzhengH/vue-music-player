import Vue from 'vue'
import { Button, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.component(Message.name, Message) // 不用这种方式会自动弹空白message
