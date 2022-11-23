/* eslint-disable react-hooks/rules-of-hooks */

export function filterButton(typeButton: any, dataList: any) {
  let filtredButton = dataList.filter((type: any) => {
    return type[typeButton];
  });
  return filtredButton;
}
