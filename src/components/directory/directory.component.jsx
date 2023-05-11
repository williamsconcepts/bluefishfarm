import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const categories = [
    {
      id: 1,
      title: 'Fingerlings',
      imageUrl: 'https://drive.google.com/file/d/1Ada1jf5fG8NH81AeKnNRa57ftbeEZDD3/view?usp=share_link',
      route: 'shop/fingerlings'
    },
    {
      id: 2,
      title: 'Juveniles',
      imageUrl: 'https://drive.google.com/file/d/14JouX9s6LD-1mMbdcrc5kIQaPR_DFjOX/view?usp=share_link',
      route: 'shop/juveniles'
    },
    {
      id: 3,
      title: 'BBQ Sizes',
      imageUrl: 'https://drive.google.com/file/d/1smvBpsbSh1kAzByxpCfCqKdqWiYHTGWd/view?usp=share_link',
      route: 'shop/bbq sizes'
    },
    {
      id: 4,
      title: 'Smoked/Smokables',
      imageUrl: 'https://drive.google.com/file/d/12Ag1H3ZDzTc41-iI1ke5Qmc265NOUh2H/view?usp=share_link',
      route: 'shop/smoked-fish'
    },
    {
      id: 5,
      title: 'Poultry Birds',
      imageUrl: 'https://drive.google.com/file/d/1-gHyJ49Wr35qV0ZXC0YM3Zbgts4rmBMZ/view?usp=share_link',
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