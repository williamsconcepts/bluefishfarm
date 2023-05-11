import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const categories = [
    {
      id: 1,
      title: 'Fingerlings',
      imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2021/04/whatsapp-image-2023-04-09-at-8.00.36-pm-jpeg-1.webp',
      route: 'shop/fingerlings'
    },
    {
      id: 2,
      title: 'Juveniles',
      imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2021/04/whatsapp-image-2023-03-29-at-11.42.37-pm-jpeg-1.webp',
      route: 'shop/juveniles'
    },
    {
      id: 3,
      title: 'BBQ Sizes',
      imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2023/04/whatsapp-image-2023-03-21-at-7.15.30-am-1.jpeg',
      route: 'shop/bbq sizes'
    },
    {
      id: 4,
      title: 'Smoked/Smokables',
      imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2021/04/shopping-2.png',
      route: 'shop/smoked-fish'
    },
    {
      id: 5,
      title: 'Poultry Birds',
      imageUrl: 'https://bluefishfarm.org/wp-content/uploads/2023/04/whatsapp-image-2023-04-06-at-1.58.18-pm-jpeg-1.webp',
      route: 'shop/poultry birds'
    },
  ];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />   
            ))}   
        </DirectoryContainer> 
    );
}

export default Directory