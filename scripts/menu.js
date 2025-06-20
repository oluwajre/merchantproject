import { icons } from './sideBarIcons'

export const menu = (active) => {
 return {
    showSideBar: false,
    expandSideMenu: true,
    openDropdown: '',
    currentPageDetail: {name: 'Home', link: './dashboard.html'},
    menuList: [
          {name: 'Dashboard', icon: icons.dashboard, dropDown: [], link: './dashboard.html', headerName: 'Home'},
          {menuHeader: 'Notification', name: 'Data Warehouse', icon: icons.dataWarehouse, dropDown: [], link: './dataWarehouse.html', headerName: 'Date Warehouse', alert: '0'},
          {menuHeader: 'Report', name: 'Switching Controls', icon: icons.switchingControls,
            dropDown: [
                {name: 'Switching Report', icon: icons.subMenu, headerName: 'Airtime Switching Report', link: './switchingReport.html'},
                {name: 'Airtel Switching Reversal', icon: icons.subMenu, headerName: 'MReversal Airtel Airtime Switching', link: './switchReversal.html'},
            ]
          },
          {name: 'Service Reports', icon: icons.serviceReports, 
            dropDown: [
                {name: 'Airtime & Data', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Airtime', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Data', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Electricty', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Cable TV', icon: icons.subMenu, link: 'https://www.netflix.com/ng/'},
                {name: 'Cash Back', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Transaction Summary', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Account Summary', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'ANQ', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'ANQ Service', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'SMS', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                {name: 'Betting', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'Toll', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'Insurance', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'Intl Topup Report', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'Epins', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'Automated Daily Reports', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
            ]
          },
          {name: 'Service Settings', icon: icons.settings, dropDown: [], link: 'https://www.creditswitch.com/'},
          {name: 'Accounts', icon: icons.accounts,
            dropDown: [
              {name: 'Funding Records', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Debit Records', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'USSD Payments', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Wallet Transfer', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Provider Balance', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
            ]
          },
          {name: 'PIN', icon: icons.pin,
            dropDown: [
              {name: 'Pin Dashboard', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Upload Pin / Activity Log', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Create Vouchers / PINs', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
            ]
          },
          {name: 'Update Transactions', icon: icons.updateTransactions,
            dropDown: [
              {name: 'Update Confirm Code', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Update Back logs', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Revend', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Update Cabletv Status', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Call back Reports', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Upload Failed ANQ', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
            ]
          },
          {name: 'Admin Controls', icon: icons.adminControls,
            dropDown: [
              {name: 'Roles Permissions Module', icon: icons.rolesPermissionsModule,
                dropDown: [
                  {name: 'Roles', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                  {name: 'Permissions', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                  {name: 'User Roles', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                  {name: 'RolesPermissions', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
                ], availableSubDropDown: true, openSubDropdown: ''
              },
              {name: 'Login Actvity Reports', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Add Merchant, View Merch Info', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Reset Merchant Credentials', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Update Merchant Ip/ Set Low Balance Limit', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Link Account', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "Credit Merchant's Account", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "Approvals", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "Reversal/Credit Merchant", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "Debit a Merchant's Account", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "View Activity Log", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "Current Administrators", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: "Merchants and Discount", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Create Provider', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: 'Update Merchants Discounts', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: 'Provider Discounts', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: 'ANQ Service', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: "Sub Admin", icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Setup SMS', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: 'Setup Notifications', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: 'Stock Balance Thresholds', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
              {name: 'Manage Data Plans', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
            ]
          },
          {menuHeader: 'Settings', name: 'Profile/Password Change', icon: icons.settings, dropDown: [], link: 'https://www.creditswitch.com/'},
          {name: 'Logout', icon: icons.logout, dropDown: [], link: 'https://www.creditswitch.com/'},
          {menuHeader: 'Logs', name: 'Merchant Request Log', icon: icons.dataWarehouse, dropDown: [], link: 'https://www.creditswitch.com/'},
          {name: 'Http Requests Log', icon: icons.dataWarehouse, dropDown: [], link: 'https://www.creditswitch.com/'},
    ],

    toggleDropdown(item, index) {
        if (!item.dropDown || item.dropDown.length === 0) {
            window.location.href = item.link;
            console.log('normal menu, no dependecy')
            return;
        };

        this.expandSideMenu = true;

        if(item.availableSubDropDown) {
        item.openSubDropdown = item.openSubDropdown === index ? '' : index;
        }else {
        this.openDropdown = this.openDropdown === index ? '' : index;
        }
    },
    
    isActive(item) {
    if (item.name === active) {
      this.currentPageDetail = {
        name: item.headerName,
        link: item.link
      };
      return true;
    } 

    if (item.dropDown?.length) {
        return item.dropDown.some(child => this.isActive(child));
    }

    return false;
    },
    
    toggleSideBar() {
        if (this.showSideBar) {
            this.showSideBar = false;
            return;
        }
        this.showSideBar = false;
        this.expandSideMenu = !this.expandSideMenu;
    }
 }
};