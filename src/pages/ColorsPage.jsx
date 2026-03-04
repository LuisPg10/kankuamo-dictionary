import { Card } from '../components/Card';
import color from '../assets/images/user.png';

export const ColorsPage = () => {
  let cards = [];
  const spanishInfo = [
    'Blanco',
    'Amarillo',
    'Azul',
    'Rojo',
    'Anaranjado',
    'Morado',
    'Verde',
    'Negro',
  ];
  const kankuamoInfo = [
    'Bunchikönke',
    'Akänl',
    'Chusuasi',
    'Amakua',
    'Yikanka',
    'Uözi',
    'Atahkáye',
    'Niakönke',
  ];
  const englishInfo = [
    'White',
    'Yellow',
    'Blue',
    'Red',
    'Orange',
    'Purple',
    'Green',
    'Black',
  ];

  for (let i = 0; i < 8; i++) {
    cards.push(
      <Card
        key={spanishInfo[i]}
        data={color}
        spanish={spanishInfo[i]}
        kankuamo={kankuamoInfo[i]}
        english={englishInfo[i]}
      />,
    );
  }
  return (
    <>
      {/*Cartas de colores*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
    </>
  );
};
