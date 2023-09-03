const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShowImg }) => {
  const handleClick = () => {
    if (bigShowImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
      console.log('shoe:', changeBigShoeImg);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl 
    ${
      bigShowImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'
    } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-slate-300/75 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
