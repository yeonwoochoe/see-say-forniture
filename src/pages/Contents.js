import classes from "./Contents.module.scss";
import MainProduct from "../components/Product/MainProduct";
import OrderSheet from "../components/Cart/OrderSheet";

function Contents() {
  return (
    <main id={classes.contentsBox}>
      <MainProduct />
      <OrderSheet />
    </main>
  );
}

export default Contents;
