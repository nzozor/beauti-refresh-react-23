import Image from "next/image";
import Link from "next/link";
import LaunchIcon from '@mui/icons-material/Launch';

const ExclusiveStockist: React.FC = () => {

  const imageList = [
    {
      imageSource: '/images/Stockist_Alumier.jpg',
      ref: 'https://www.alumiermd.co.uk/',
    },
    {
      imageSource: '/images/beauti_hayo.jpg',
      ref: 'https://hayoumethod.com/',
    },
    {
      imageSource: '/images/Stockist_Skinade.jpg',
      ref: 'https://skinade.com/',
    },
  ]

  return (
    <section className="text-center">
      <h3 className="mb-[30px] mt-[60px] text-[32px] font-[100] text-[#3e3d3c]">Exclusive Stockist</h3>
      <h4 className="text-[20px] font-[100] leading-[29px] text-[#3e3d3c] mb-[30px]">Medical grade skincare exclusively available at our clinic</h4>
      <div className="flex place-items-center flex-col gap-[1rem] lg:flex-row justify-center px-[1rem] lg:px-[5rem] xl:px-[6rem] py-4">
        {
          imageList.map((item, index) => {
            return (
              <a href={item.ref} target="_blank" key={index} rel="noopener noreferrer" className="flex justify-center">
                <div className='relative duration-300 cursor-pointer exclusiveContainer flex justify-center place-items-center gap-[2rem] max-w-[90%] lg:max-w-[650px] border-[1px] border-[#C7CBD6] hover:shadow-lg'>
                  <Image
                    className="js-lazy-image cursor-pointer"
                    loading="lazy"
                    src={item.imageSource}
                    alt="Skinade | Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment"
                    width={600}
                    height={380}
                  />
                  <LaunchIcon className="exclusiveLinkIcon duration-300  hidden absolute top-[10px] right-[10px] text-[#454545] text-[1.5rem] cursor-pointer" />
                </div>
              </a>
            )
          })
        }
      </div>
    </section>
  );
};

export default ExclusiveStockist;
