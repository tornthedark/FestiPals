export const selectAct = (act) => {
  console.log('You clicked an act:', act.title);

  return {
    type: "ACT_SELECTED",
    data: act
  }
};
