export const menuData = [
 {
  key: 0,
  label: 'Home',
  path: '/',
  icon: { url: '', iconX: 0, iconY: 0 },
 },
 {
  key: 1,
  label: 'Product',
  path: '/product',
  icon: { url: '', iconX: 0, iconY: 0 },
 },
 {
  key: 2,
  label: 'Service',
  path: '/service',
  icon: { url: '', iconX: 0, iconY: 0 },
  children: [
   {
    key: 200,
    label: 'Sub Service 1',
    path: '/service/subService1',
    icon: { url: '', iconX: 0, iconY: 0 },
   },
   {
    key: 201,
    label: 'Sub Service 2',
    path: '/service/subService2',
    icon: { url: '', iconX: 0, iconY: 0 },
   }
  ]
 },
 {
  key: 3,
  label: 'Company',
  path: '/company',
  icon: { url: '', iconX: 0, iconY: 0 },
 },
 {
  key: 4,
  label: 'ContactUs',
  path: '/contactUs',
  icon: { url: '', iconX: 0, iconY: 0 },
 }

];