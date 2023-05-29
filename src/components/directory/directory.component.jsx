import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const categories = [
    {
      id: 1,
      title: 'Fingerlings',
      imageurl: 'https://greentrrb.com/bluefish/Hybrid-Heterobranchius-Clarias-gariepinus-Custom.jpeg',
      route: 'shop/fingerlings'
    },
    {
      id: 2,
      title: 'Juveniles',
      imageurl: 'https://greentrrb.com/bluefish/juveniles.jpeg',
      route: 'shop/juveniles'
    },
    {
      id: 3,
      title: 'BBQ Sizes',
      imageurl: 'https://greentrrb.com/bluefish/African-catfish-broodstock-2-Custom.jpeg',
      route: 'shop/bbq sizes'
    },
    {
      id: 4,
      title: 'Smoked/Smokables',
      imageurl: 'https://greentrrb.com/bluefish/shopping.png',
      route: 'shop/smoked-fish'
    },
    {
      id: 5,
      title: 'Poultry Birds',
      imageurl: 'https://greentrrb.com/bluefish/poultry.jpeg',
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