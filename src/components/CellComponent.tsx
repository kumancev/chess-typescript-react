import { Cell } from "../models/Cell";

type CellProps = {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
};

export function CellComponent({ cell, selected, click }: CellProps) {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{background: cell.avaible && cell.figure ? "green" : ""}}
    >
      {cell.avaible && !cell.figure && <div className={"avaible"} />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
}
