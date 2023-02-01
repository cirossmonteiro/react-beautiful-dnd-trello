import Board from "./board/board";
import { IColumn } from "./interfaces";

const initArray = (n: number) => Array.apply(null, Array(n)).map((_, index) => index);

const COLUMNS = 2, CARDS = 6;

const data: IColumn[] = initArray(COLUMNS)
              .map((_, i) => ({
                id: `col-${i}`,
                title: `Column: ${i}`,
                cards: initArray(CARDS)
                  .map((_, j) => ({
                    id: `id_col-${i}_card-${j}`,
                    title: `Column: ${i} Card: ${j}`
                  }))
              }));

const Trello = () => {
  return (
    <Board initial={data} />
  );
}

export default Trello;