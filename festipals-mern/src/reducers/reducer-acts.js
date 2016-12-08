import ActController from '../database/ActController';

export default function() {
  // return [
  //   {
  //     id: 1,
  //     title: "Slayer",
  //     stage: "Orange",
  //     genre: 'Thrash',
  //   },
  //   {
  //     id: 2,
  //     title: "Metallica",
  //     stage: "Brun",
  //     genre: "Thrash",
  //   },
  //   {
  //     id: 3,
  //     title: "Cradle of Filth",
  //     stage: "Brun",
  //     genre: "Black",
  //   }
  // ]

  return ActController.getAllActs();
}
