import styles from "./SalesPost.module.css";

const SalesPurchase = () => { 
  const handleClick = () => {
    alert("post로 이동합니다");
  };
  return (
    <div className={styles.textParent} onClick={handleClick}>
      <b className={styles.text}>{` `}</b>
      <div className={styles.groupChild} />
      <b className={styles.b}>{`게시글 제목 `}</b>
      <div className={styles.div}>12000 원</div>
    </div>
  );
};

export default SalesPurchase;
