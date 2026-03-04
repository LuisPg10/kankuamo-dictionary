import { Card } from '../components/Card';
import number from '../assets/images/user.png';

export const NumbersPage = () => {
  let cards = [];
  let spanishInfo = [
    'Uno',
    'Dos',
    'Tres',
    'Cuatro',
    'Cinco',
    'Seis',
    'Siete',
    'Ocho',
    'Nueve',
    'Diez',
  ];
  let englishInfo = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
  ];
  let kankuamaInfo = [
    'Ijkwa',
    'Moga',
    'Mewa',
    'Makegwa',
    'Achigwa',
    'Jingwa',
    'Küga',
    'Ambigwa',
    'Ihkagwa',
    'Ugwa',
  ];

  for (let i = 0; i < 10; i++) {
    cards.push(
      <Card
        key={spanishInfo[i]}
        data={number}
        spanish={spanishInfo[i]}
        kankuamo={kankuamaInfo[i]}
        english={englishInfo[i]}
      />,
    );
  }
  return (
    <>
      {/*Cartas de numeros*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
    </>
  );
};
