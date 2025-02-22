import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
};

const NFTImage = ({ selectedNft }) => {
  console.log(selectedNft?.metadata.image);
  return (
    <div>
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <IoMdSnow />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>
      <div>
        {selectedNft?.metadata.image &&
        selectedNft?.metadata.image.slice(-3) == "mp4" ? (
          <>
            <video autoPlay loop>
              <source src={selectedNft?.metadata.image} />
            </video>
          </>
        ) : (
          <>
            <img src={selectedNft?.metadata.image} />
          </>
        )}
      </div>
    </div>
  );
};

export default NFTImage;