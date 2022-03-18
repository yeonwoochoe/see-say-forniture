import classes from "./OrderSheet.module.scss";

const OrderSheet = () => {
  return (
    <section id={classes.orderSheetBox}>
      <article className={classes.CheckListArea}></article>
      <article className={classes.CheckOutBox}></article>
    </section>
  );
};

export default OrderSheet;
