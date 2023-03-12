<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
    >
      <a-tabs
        :active-key="customActiveKey"
        :tab-bar-style="{ textAlign: 'center', borderBottom: 'unset' }"
        :centered="true"
      >
        <a-tab-pane key="tab1" tab="账户密码登录">
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="服务器IP"
            >
              <template #prefix>
              <hdd-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="端口"
            >
              <template #prefix>
                <link-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="用户名"
            >
              <template #prefix>
                <user-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input-password
              size="large"
              placeholder="密码"
            >
              <template #prefix>
                <lock-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input-password>
          </a-form-item>

        </a-tab-pane>
        <!--        <a-tab-pane key="tab2" :tab="$t('user.login.tab-login-quick')">-->
        <!--          <a-form-item>-->
        <!--            <a-input disabled="true" size="large" type="text" placeholder="敬请期待" v-decorator="['undone']">-->
        <!--              <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>-->
        <!--            </a-input>-->
        <!--          </a-form-item>-->
        <!--        </a-tab-pane>-->
      </a-tabs>

      <a-form-item>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
        >登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import {HddOutlined, LinkOutlined, UserOutlined, LockOutlined} from '@ant-design/icons-vue'
export default {
  name: "Login",
  data () : object{
    return {
      customActiveKey: 'tab1',
    }
  },
  components:{
    HddOutlined,
    LinkOutlined,
    UserOutlined,
    LockOutlined
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
