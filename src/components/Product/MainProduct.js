import classes from "./MainProduct.module.scss";
//rafce
//<div className={classes["main-image"]}> 클래스명을 쓰려면 이렇게 써야함
const MainProduct = () => {
  return (
    <section id={classes.mainProductBox}>
      <article id={classes.BestPdArea}>
        <h2>Best Forniture</h2>
        <p>For Your House </p>
        <div className={classes.container}>
          <div className={classes["item"]}>1</div>
          <div className={classes["item"]}>2</div>
          <div className={classes["item"]}>3</div>
          <div className={classes["item"]}>4</div>
          <div className={classes["item"]}>5</div>
          {/* <div className={classes["item"]}>6</div> */}
        </div>
      </article>
      <article id={classes.HotSellerArea}>
        <h2>Hot Seller</h2>
      </article>
    </section>
  );
};

export default MainProduct;
