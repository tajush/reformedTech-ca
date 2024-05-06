import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
  page_id: 336018560135310, //  change 'null' to your Facebook Page ID,
  theme_color: '#155263', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})