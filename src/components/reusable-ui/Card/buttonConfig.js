export const getCardButtons = (
  isOverlapImageVisible,
  onRemove,
  onAdd,
  quantity
) => [
  {
    id: "1",
    className: "primary-button left",
    label: "-",
    onClick: onRemove,
    disabled: isOverlapImageVisible,
    version: "three",
  },
  {
    id: "2",
    className: "primary-button center",
    label: quantity,
    onClick: onRemove,
    disabled: isOverlapImageVisible,
    version: "three",
  },
  {
    id: "3",
    className: "primary-button right",
    label: "+",
    onClick: onAdd,
    disabled: isOverlapImageVisible,
    version: "three",
  },
];
