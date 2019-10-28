const getNested = (arr, parent = 0) => {
  const comb = [];
  arr.forEach(item => {
    if (item.parent === parent) {
      const children = getNested(arr, item.id);

      if (children.length) {
        item.children = children;
      }

      comb.push(item);
    }
  });
  return comb;
};

const input = [
  { id: 1, title: 'hello', parent: 0 },
  { id: 2, title: 'hello', parent: 0 },
  { id: 3, title: 'hello', parent: 1 },
  { id: 4, title: 'hello', parent: 3 },
  { id: 5, title: 'hello', parent: 4 },
  { id: 6, title: 'hello', parent: 4 },
  { id: 7, title: 'hello', parent: 3 },
  { id: 8, title: 'hello', parent: 2 },
];

const output = [
  {
    id: 1,
    title: 'hello',
    parent: 0,
    children: [
      {
        id: 3,
        title: 'hello',
        parent: 1,
        children: [
          {
            id: 4,
            title: 'hello',
            parent: 3,
            children: [{ id: 5, title: 'hello', parent: 4 }, { id: 6, title: 'hello', parent: 4 }],
          },
          { id: 7, title: 'hello', parent: 3 },
        ],
      },
    ],
  },
  { id: 2, title: 'hello', parent: 0, children: [{ id: 8, title: 'hello', parent: 2 }] },
];
