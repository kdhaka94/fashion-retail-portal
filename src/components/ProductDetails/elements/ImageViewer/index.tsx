import classes from "./styles.module.css";
import { Image } from "@components/common";

export const ImageViewer = () => {
  return (
    <div className={classes.navbar}>
        <div  className={classes.imageArray}>
          {[1,2,3,4].map((image)=>{
            return <>
              <div className={classes.imageDiv} >
                <Image className={classes.imageClass} src={"https://mui.com/static/images/avatar/1.jpg"} />
              </div>
            </>
          })}
        </div>
        <div className={classes.fullImageDiv}>
          <Image className={classes.fillImage} src={"https://mui.com/static/images/avatar/1.jpg"} />
        </div>
    </div>
  );
};
