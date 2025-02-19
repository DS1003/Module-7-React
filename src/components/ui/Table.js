// src/components/ui/Table.js

export const Table = ({ children, className }) => {
  return <table className={`w-full border-collapse ${className}`}>{children}</table>;
};

export const TableHeaderComponent = ({ children }) => {
  return <thead className="bg-gray-200">{children}</thead>;
};

export const TableRowComponent = ({ children }) => {
  return <tr className="border-b border-gray-300">{children}</tr>;
};

export const TableHeadComponent = ({ children }) => {
  return <th className="p-2 text-left text-gray-700">{children}</th>;
};

export const TableBodyComponent = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableCellComponent = ({ children }) => {
  return <td className="p-2">{children}</td>;
};
