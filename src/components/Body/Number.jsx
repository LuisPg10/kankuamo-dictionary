import './View.css';
import Card from '../Card/Card';
import number from '../../images/user.png';

export default function Number() {
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
        data={number}
        spanish={spanishInfo[i]}
        kankuamo={kankuamaInfo[i]}
        english={englishInfo[i]}
      />,
    );
  }
  return (
    <>
      {/*Titulo del vista*/}
      <h1 className="mt-auto">NÚMEROS</h1>
      {/*Cartas de numeros*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
    </>
  );
}
