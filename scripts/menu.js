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
          {menuHeader: 'Reports', name: 'Switching Controls', icon: icons.switchingControls,
            dropDown: [
                {name: 'Switching Report', icon: icons.subMenu, headerName: 'Airtime Switching Report', link: './switchingReport.html'},
                {name: 'Airtel Switching Reversal', icon: icons.subMenu, headerName: 'MReversal Airtel Airtime Switching', link: './switchReversal.html'},
            ]
          },
          {name: 'Service Reports', icon: icons.serviceReports, 
            dropDown: [
                {name: 'Airtime & Data', icon: icons.subMenu, headerName: 'Airtime/Data Summary', link: './airtime_data.html'},
                {name: 'Airtime', icon: icons.subMenu, headerName: 'Query Airtime Transactions', link: './airtime.html'},
                {name: 'Data', icon: icons.subMenu, headerName: 'Query Data Transactions', link: './data.html'},
                {name: 'Electricty', icon: icons.subMenu, headerName: 'Query Electricity', link: './electricity.html'},
                {name: 'Cable TV', icon: icons.subMenu, headerName: 'CableTV Transactions', link: './cabletv_report.html'},
                {name: 'Cash Back', icon: icons.subMenu, headerName: 'Cash Back Report', link: './cashback_report.html'},
                {name: 'Transaction Summary', icon: icons.subMenu, headerName: 'Query Transaction Summary', link: './transaction_summary.html'},
                {name: 'Account Summary', icon: icons.subMenu, headerName: 'Account Summary Report', link: './account_summary.html', alert: 'new'},
                {name: 'ANQ', icon: icons.subMenu, headerName: 'ANQ Summary', link: './anq.html'},
                {name: 'ANQ Service', icon: icons.subMenu, headerName: 'ANQ Service Summary', link: './anq_service.html', alert: 'new'},
                {name: 'SMS', icon: icons.subMenu, headerName: 'SMS Report', link: './sms_report.html'},
                {name: 'Betting', icon: icons.subMenu, link: 'https://www.creditswitch.com/', alert: 'new'},
                {name: 'Toll', icon: icons.subMenu, headerName: 'Toll Report', link: './toll_report.html', alert: 'new'},
                {name: 'Insurance', icon: icons.subMenu, headerName: 'Insurance Report', link: './insurance_report.html', alert: 'new'},
                {name: 'Intl Topup Report', icon: icons.subMenu, headerName: 'Query IntlTopup Transactions', link: './pay724_report.html', alert: 'new'},
                {name: 'Epins', icon: icons.subMenu, headerName: 'Epin Summary', link: './epins.html', alert: 'new'},
                {name: 'Automated Daily Reports', headerName: 'Daily Transactions Report Control', icon: icons.subMenu, link: './daily_transaction_report.html', alert: 'new'},
            ]
          },
          {name: 'Service Settings', icon: icons.settings, headerName: 'Change Batch-Ids | Set Commissions', dropDown: [], link: './service_settings.html'},
          {name: 'Accounts', icon: icons.accounts,
            dropDown: [
              {name: 'Funding Records', icon: icons.subMenu, headerName: 'Query Account Funding', link: './funding.html'},
              {name: 'Debit Records', icon: icons.subMenu, headerName: 'Query Debit Record', link: './debit_record.html'},
              {name: 'USSD Payments', icon: icons.subMenu, headerName: 'Query USSD Payments', link: './payments-737.html'},
              {name: 'Wallet Transfer', icon: icons.subMenu, headerName: 'Mobile Money Report', link: './wallettransfer.html'},
              {name: 'Provider Balance', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
            ]
          },
          {name: 'PIN', icon: icons.pin,
            dropDown: [
              {name: 'Pin Dashboard', icon: icons.subMenu, headerName: 'Query Pin Record', link: './pin_dashboard.html'},
              {name: 'Upload Pin / Activity Log', icon: icons.subMenu, headerName: 'Upload Pin(s)', link: './pin_upload.html'},
              {name: 'Create Vouchers / PINs', icon: icons.subMenu, headerName: 'Upload Pin', link: './voucher.html'},
            ]
          },
          {name: 'Update Transactions', icon: icons.updateTransactions,
            dropDown: [
              {name: 'Update Confirm Code', icon: icons.subMenu, headerName: 'Manage Confirm Code', link: './update_confirmcode.html'},
              {name: 'Update Back logs', icon: icons.subMenu, headerName: 'Manage Confirm Code', link: './manage_backlogs.html'},
              {name: 'Revend', icon: icons.subMenu, link: 'https://www.creditswitch.com/'},
              {name: 'Update Cabletv Status', icon: icons.subMenu, headerName: 'Update Cabletv Status', link: './update_cabletv_status.html'},
              {name: 'Call back Reports', icon: icons.subMenu, headerName: 'Web hook Report', link: './webhook_callback.html'},
              {name: 'Upload Failed ANQ', icon: icons.subMenu, headerName: 'Update ANQ Local', link: './upload_failed_anq.html', alert: 'new'},
            ]
          },
          {name: 'Admin Controls', icon: icons.adminControls,
            dropDown: [
              {name: 'Roles Permissions Module', icon: icons.rolesPermissionsModule,
                dropDown: [
                  {name: 'Roles', icon: icons.subMenu, headerName: 'Roles', link: './roles.html'},
                  {name: 'Permissions', icon: icons.subMenu, headerName: 'Permissions', link: './permissions.html'},
                  {name: 'User Roles', icon: icons.subMenu, headerName: 'UserRoles', link: './roles_permissions.html'},
                  {name: 'RolesPermissions', icon: icons.subMenu, headerName: 'RolesPermissions',  link: './rolespermissions.html'},
                ], availableSubDropDown: true, openSubDropdown: ''
              },
              {name: 'Login Actvity Reports', icon: icons.subMenu, headerName: 'Login Activity Report', link: './activitylog_report.html'},
              {name: 'Add Merchant, View Merch Info', icon: icons.subMenu, headerName: 'Manage Superdealer', link: './manage_superdealer.html'},
              {name: 'Reset Merchant Credentials', icon: icons.subMenu, headerName: 'Reset Api Credentials', link: './reset_api_credentials.html'},
              {name: 'Update Merchant Ip/ Set Low Balance Limit', icon: icons.subMenu, headerName: 'Update Merchant Ip / Set Merchant Low Balance Limit', link: './update_merchant_ip.html'},
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