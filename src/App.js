import Directory from './components/directory/directory.component';


const App = () => {
    const categories = [
      {
        id: 1,
        title: 'Finerlings',
        imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2021/04/whatsapp-image-2023-04-09-at-8.00.36-pm-jpeg-1.webp',
      },
      {
        id: 2,
        title: 'Juveniles',
        imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2021/04/whatsapp-image-2023-03-29-at-11.42.37-pm-jpeg-1.webp',
      },
      {
        id: 3,
        title: 'BBQ Sizes',
        imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2023/04/whatsapp-image-2023-03-21-at-7.15.30-am-1.jpeg',
      },
      {
        id: 4,
        title: 'Smoked Fishes',
        imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2021/04/shopping-2.png',
      },
      {
        id: 5,
        title: 'Broiler Chickens',
        imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2023/04/whatsapp-image-2023-04-06-at-1.58.18-pm-jpeg-1.webp',
      },
    ];

    return (
      <Directory categories={categories}/>
    );

};

export default App;
