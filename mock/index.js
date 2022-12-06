export const images = [
  'https://i.pinimg.com/originals/69/aa/d6/69aad62c4055045340d447cd1bb9592b.gif',
  'https://i.pinimg.com/originals/39/46/aa/3946aa9b4e52b71235b7b758a1e2ff84.gif',
  'https://i.pinimg.com/originals/9a/72/ac/9a72ac0c075f673e28932ea2f6a215ab.gif',
];

export const homeItems = [
  {
    title: 'Exploring Maui',
    type: 'Blog',
    text: 'We just got back from a trip to Maui, and we had a great time...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[0],
  },
  {
    title: 'Arctic Adventures',
    type: 'Blog',
    text:
      'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[1],
  },
  {
    title: 'Frolicking in the Faroe Islands',
    type: 'Blog',
    text:
      'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[2],
  },
];

export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

// Some fake lists
export const lists = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];
