import Alpine from 'alpinejs';
import { icons } from './sideBarIcons';
import {
  barChart1,
  barChart2,
  barChart3,
  lineChart1,
  lineChart2
} from './charts';

window.Alpine = Alpine;

//MenuList
Alpine.data('sidebar', (active)=>({
  showSideBar: false,
  expandSideMenu: true,
  openDropdown: '',
  menuList: [
      {name: 'Dashboard', icon: icons.dashboard, dropDown: [], activeMenu: active === 'Dashboard' ? true : false, showDropDown: false, link: './login.html'},
      {menuHeader: 'Notification', name: 'Data Warehouse', icon: icons.dataWarehouse, dropDown: [], activeMenu: active === 'View Balance' ? true : false, showDropDown: false, link: 'https://www.creditswitch.com/', alert: '0'},
      {menuHeader: 'Report', name: 'Switching Controls', icon: icons.switchingControls,
        dropDown: [
            {name: 'Switching Report', icon: icons.subMenu, link: 'https://www.creditswitch.com/', activeMenu: active === 'Switching Report' ? true : false},
            {name: 'Airtel Switching Reversal', icon: icons.subMenu, link: 'https://www.netflix.com/ng/'}
        ], activeMenu: active === 'Switching Controls' ? true : false, showDropDown: false, link: 'https://www.creditswitch.com/'
      },
      {name: 'Service Reports', icon: icons.serviceReports, 
        dropDown: [
            {name: 'Electricty', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
            {name: 'Cable TV', icon: icons.subMenu, link: 'https://www.netflix.com/ng/'}
        ], activeMenu: active === 'Service Reports' ? true : false, showDropDown: false, link: 'https://www.creditswitch.com/'
      },
      {name: 'Service Settings', icon: icons.changePassword, dropDown: [], activeMenu: active === 'Vend Services' ? true : false, showDropDown: false, link: 'https://www.creditswitch.com/'
      },
      {name: 'Fund Wallet', icon: icons.viewBalance, dropDown: [], activeMenu: active === 'Fund Wallet' ? true : false, showDropDown: false, link: 'https://www.creditswitch.com/'},
      {menuHeader: 'Settings', name: 'Profile/Password Change', icon: icons.changePassword, dropDown: [], activeMenu: false, shactiveMenu: active === 'Change Password' ? true : false, link: 'https://www.creditswitch.com/'},
      {name: 'Logout', icon: icons.logout, dropDown: [], activeMenu: active === 'Logout' ? true : false, showDropDown: false, link: 'https://www.creditswitch.com/'},
  ],
  toggleDropdown(index) {
      if (this.menuList[index].dropDown.length === 0) {
          window.location.href = this.menuList[index].link;
          return;
      };
      this.expandSideMenu = true;
      this.openDropdown = index;
  },
  toggleSideBar() {
      if (this.showSideBar) {
          this.showSideBar = false;
          return;
      }
      this.showSideBar = false;
      this.expandSideMenu = !this.expandSideMenu;
  }
}));

//Charts
Alpine.data('barChart1', barChart1);
Alpine.data('barChart2', barChart2);
Alpine.data('barChart3', barChart3);
Alpine.data('lineChart1', lineChart1);
Alpine.data('lineChart2', lineChart2);

Alpine.start();
